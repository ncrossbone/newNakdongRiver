Ext.define('chart.view.viewTab5', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab5',
	xtype: 'viewTab5',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
					border: false,
					layout: 'vbox',
					tbar: [
						{
							text: '엑셀',
							iconCls: 'excel', 
							handler: function() {
								var data = Ext.getCmp("grid5").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>년도</th>";
								html += "<th>중권역명</th>";
								html += "<th>시도</th>";
								html += "<th>시군구</th>";
								html += "<th>매립대상폐기물</th>";
								html += "<th>매립지면적(m<sup>2</sup>)</th>";
								html += "<th>매립용량(m<sup>3</sup>)</th>";
								
								html += "</tr>";
								html += "</thead>";
								html += "<tbody>";
								
								
								for(var i in data) {
									html += "<tr>";
									html += "<td>" + data[i].data['YEAR'] + "</td>";
									html += "<td>" + data[i].data['AM_NM'] + "</td>";
									html += "<td>" + data[i].data['DO_NM'] + "</td>";
									html += "<td>" + data[i].data['CTY_NM'] + "</td>";
									html += "<td>" + data[i].data['CD_NM1'] + "</td>";
									html += "<td>" + data[i].data['LANDF_AREA'] + "</td>";
									html += "<td>" + data[i].data['LANDF_CAP'] + "</td>";
									html += "</tr>";
								}
								
								html += "</tbody></table></div>";
								
								$(html).find("td").attr("style", "mso-number-format:'\\@'; text-align: center;");
								
								if($("form[name='excelForm']").length > 0) {
									$("form[name='excelForm']").remove()
								}
								 
								$("body").append("<form name='excelForm' method='post' target='_blank' accept-charset='EUC-KR'><input type='hidden' id='excel' name='excel'></form>")
								
								$("#excel").val(
									$("<div>").append(
										$(html).clone()
									).html()
								);
								
								document.excelForm.action="/nakdong/exportExcel.do"; 
								document.excelForm.submit();
							}	
						},
						{
							xtype: 'combobox',
							store: 'storeYear',
							queryMode: 'local',
							displayField: 'ITEM',
							valueField: 'VAL',
							fieldLabel: '년도',
							labelWidth: 28,
							labelSeparator: '',
							width:100,
							listeners: {
								render: function(me) {
									var request = new Request();
									var year = request.getParameter('year');
									
									me.setValue(year);
								},
								change: function(me, nv, ov) {
									var grid = Ext.getCmp('grid5');
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									gproxy.extraParams = {
										year: nv,
										mw: request.getParameter('mw')
									};
									
									gstore.load();
								}
							}
						}
					],
                    items: [
                        {
                            xtype: 'panel',
							width: 600,
							border: false,
							height: 520,
							items: [
								{
									xtype: 'grid',
									id: 'grid5',
									store: 'storeType51',
									border: false,
									width: 598,
									height: 520,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'YEAR', header: '년도', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '중권역명', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'DO_NM', header: '시도', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'CTY_NM', header: '시군구', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'CD_NM1', header: '매립대상폐기물', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'LANDF_AREA', header: '매립지면적(m<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'LANDF_CAP', header: '매립용량(m<sup>3</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}}
									],
									listeners: {
										render: {
											fn: function(me) {
												// 년도 변경시에 수행되는 로직이 있으므로 이것은 불필요 한듯... 2014.05.08
//												var store = me.getStore();
//												var proxy = store.getProxy();
//												
//												var request = new Request();
//												
//												proxy.extraParams = {
//													year: request.getParameter('year'),
//													mw: request.getParameter('mw')
//												};
//												
//												store.load();
											}
										}
									}
								}
							]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
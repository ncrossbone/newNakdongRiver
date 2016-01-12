Ext.define('chart.view.viewTab4', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab4',
	xtype: 'viewTab4',
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
								var data = Ext.getCmp("grid4").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>년도</th>";
								html += "<th>중권역명</th>";
								html += "<th>시도</th>";
								html += "<th>시군구</th>";
								html += "<th>양식장종류</th>";
								html += "<th>처리방법</th>";
								html += "<th>면허면적(m<sup>2</sup>)</th>";
								html += "<th>시설면적(m<sup>2</sup>)</th>";
								
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
									html += "<td>" + data[i].data['TREAT_METHOD'] + "</td>";
									html += "<td>" + data[i].data['LICEN_AREA'] + "</td>";
									html += "<td>" + data[i].data['FACIL_AREA'] + "</td>";
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
									var grid = Ext.getCmp('grid4');
									
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
									id: 'grid4',
									store: 'storeType41',
									border: false,
									width: 598,
									height: 520,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'YEAR', header: '년도', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '중권역명', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'DO_NM', header: '시도', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'CTY_NM', header: '시군구', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'CD_NM1', header: '양식장종류', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'TREAT_METHOD', header: '처리방법', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'LICEN_AREA', header: '면허면적(m<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'FACIL_AREA', header: '시설면적(m<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
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
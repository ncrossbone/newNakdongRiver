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
							text: '����',
							iconCls: 'excel', 
							handler: function() {
								var data = Ext.getCmp("grid4").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>�⵵</th>";
								html += "<th>�߱ǿ���</th>";
								html += "<th>�õ�</th>";
								html += "<th>�ñ���</th>";
								html += "<th>���������</th>";
								html += "<th>ó�����</th>";
								html += "<th>�������(m<sup>2</sup>)</th>";
								html += "<th>�ü�����(m<sup>2</sup>)</th>";
								
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
							fieldLabel: '�⵵',
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
										{xtype: 'gridcolumn', dataIndex: 'YEAR', header: '�⵵', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '�߱ǿ���', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'DO_NM', header: '�õ�', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'CTY_NM', header: '�ñ���', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'CD_NM1', header: '���������', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'TREAT_METHOD', header: 'ó�����', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'LICEN_AREA', header: '�������(m<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'FACIL_AREA', header: '�ü�����(m<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}}
									],
									listeners: {
										render: {
											fn: function(me) {
												// �⵵ ����ÿ� ����Ǵ� ������ �����Ƿ� �̰��� ���ʿ� �ѵ�... 2014.05.08
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
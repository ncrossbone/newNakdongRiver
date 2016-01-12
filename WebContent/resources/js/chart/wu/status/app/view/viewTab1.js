Ext.define('chart.view.viewTab1', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab1',
	xtype: 'viewTab1',
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
							text: '�μ�',
							iconCls: 'print',
							handler: function() {
								$("#chart1").print();
							}	
						},
						{
							text: '����',
							iconCls: 'save', 
							handler: function() {
//								Ext.getCmp('chart1').save({type: 'image/png'});
								var chart = Ext.getCmp('chart1');
								saveCharToImage(chart);
							}	
						}
					],
                    items: [
                        {
                            xtype: 'panel',
							width: '100%',
							border: false,
							overflowX: 'auto',
							items: [
								{
									xtype: 'chart',
									id: 'chart1',
									draggable: false,
									animate: true,
									shadow: true,
									width: 2500,
									height: 300,
									margin: '10px 10px 20px 10px',
									store: 'storeType1',
									legend: {
										position: 'right'
									},
									axes: [
										{
				                            type: 'Category',
				                            fields: ['RSRH_YR'],
				                            position: 'bottom'
										},
										{
											type: 'Numeric',
				                            fields: ['LFT_AMT', 'IDS_AMT', 'AGR_AMT'],
				                            position: 'left',
											grid: true,
				                            label: {
				                            	renderer: function(value) {
					                    			return setComma(value.toFixed(0));
				                            	}
				                            }
										}
									],
				                    series: [
				                        {
				                            type: 'column',
				                            xField: 'RSRH_YR',
				                            yField: ['LFT_AMT', 'IDS_AMT', 'AGR_AMT'],
											title: ['��Ȱ�����', '���������', '��������'],
                            				fill: false,
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('RSRH_YR');
													var val;
													var type;
													
													if (item.yField == 'LFT_AMT') {
														val = storeItem.get('LFT_AMT');
														type = "��Ȱ�����";
													} else if (item.yField == 'IDS_AMT') {
														val = storeItem.get('IDS_AMT');
														type = "���������";
													} else if (item.yField == 'AGR_AMT') {
														val = storeItem.get('AGR_AMT');
														type = "��������";
													} 
				                            		
					                    			val = setComma(val);
													
													this.setTitle(name + "�� " + type + ": " + val);
				                            	}
				                            }
				                        }
				                    ],
									listeners: {
										render: {
											fn: function(me) {
												var store = me.getStore();
												var proxy = store.getProxy();
												
												var request = new Request();
												
												proxy.extraParams = {
													mw: request.getParameter('mw')
												};
												
												store.load();
											}
										}
									}
								}
							]
                        },
                        {
                            xtype: 'panel',
							width: 600,
							border: false,
							height: 150,
							tbar: [
								{
									text: '����',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid1").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>����⵵</th>";
										html += "<th>��Ȱ�����(õm<sup>3</sup>/��)</th>";
										html += "<th>���������(õm<sup>3</sup>/��)</th>";
										html += "<th>��������(õm<sup>3</sup>/��)</th>";
										
										html += "</tr>";
										html += "</thead>";
										html += "<tbody>";
										
										
										for(var i in data) {
											html += "<tr>";
											html += "<td>" + data[i].data['RSRH_YR'] + "</td>";
											html += "<td>" + data[i].data['LFT_AMT'] + "</td>";
											html += "<td>" + data[i].data['IDS_AMT'] + "</td>";
											html += "<td>" + data[i].data['AGR_AMT'] + "</td>";
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
								}
							],
							items: [
								{
									xtype: 'grid',
									id: 'grid1',
									store: 'storeType1',
									border: false,
									width: 598,
									height: 95,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'RSRH_YR', header: '����⵵', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'LFT_AMT', header: '��Ȱ�����(õm<sup>3</sup>/��)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'IDS_AMT', header: '���������(õm<sup>3</sup>/��)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'AGR_AMT', header: '��������(õm<sup>3</sup>/��)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}}
									],
									listeners: {
										render: {
											fn: function(me) {
												var store = me.getStore();
												var proxy = store.getProxy();
												
												var request = new Request();
												
												proxy.extraParams = {
													mw: request.getParameter('mw')
												};
												
												store.load();
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
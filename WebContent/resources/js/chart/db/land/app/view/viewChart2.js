Ext.define('chart.view.viewChart2', {
    extend: 'Ext.panel.Panel',

	id: 'viewChart2',
	xtype: 'viewChart2',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	requires:['chart.store.storeType2'],
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
								$("#chart2").print();
							}	
						},
						{
							text: '����',
							iconCls: 'save', 
							handler: function() {
								var chart = Ext.getCmp('chart2');
								saveCharToImage(chart);
//								Ext.getCmp('chart2').save({type: 'image/png'});
							}	
						}
					],
                    items: [
                        {
                            xtype: 'panel',
							width: '100%',
							border: false,
							items: [
								{
									xtype: 'chart',
									id: 'chart2',
									draggable: false,
									animate: true,
									shadow: true,
									width: 400,
									height: 350,
//									store: 'storeType2',
									store: Ext.create('chart.store.storeType2'),
									legend: {
										position: 'right'
									},
				                    series: [
				                        {
				                            type: 'pie',
				                            field: 'VAL',
				                        	showInLegend: true,
				                            tips: {
							                  trackMouse: true,
							                  width: 250,
							                  height: 25,
							                  titleAlign: 'center',
											  showInLegend: true,
							                  renderer: function(storeItem, item) {
											  	var chart = Ext.getCmp('chart2');
												var store = chart.getStore();
												var data = store.data.items;
												
												var all = 0;
												
												for(var i in data) {
													all += parseFloat(data[i].data['VAL']);
												}
																								
											  	var item = storeItem.get('ITEM_DISP');
												var val = storeItem.get('VAL');
												
												val = parseFloat(val);
												
							                    this.setTitle(item + " ���� ����: " + (val / all * 100).toFixed(2) + "%");
							                  }
							                },
				                            highlight: {
							                  segment: {
							                    margin: 20
							                  }
							                },
							                label: {
							                    field: 'ITEM_DISP',
							                    display: 'middle',
							                    contrast: true,
							                    font: '12px ����ü, Verdana',
												renderer: function(v) {
//													if(v == 'DRY') v = '�ð�ȭ/��������';
//													else if(v == 'RIC') v = '��';
//													else if(v == 'FLD') v = '��';
//													else if(v == 'FRST') v = '�긲';
//													else if(v == 'MDW') v = '����';
//													else if(v == 'SWMP') v = '����';
//													else if(v == 'VCT') v = '����';
//													else if(v == 'WZN') v = '����';
													
													return v;
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
													mw: request.getParameter('mw'),
													year: request.getParameter('year2')
												};
												
												store.load({
													scope: this,
													callback: function(records, operation, success) {
//														for(var i in me.legend.items) {
//															var text = me.legend.items[i].items[0].attr.text;
//															
//															if(text == 'DRY') me.legend.items[i].items[0].attr.text = '�ð�ȭ/��������';
//															else if(text == 'RIC') me.legend.items[i].items[0].attr.text = '��';
//															else if(text == 'FLD') me.legend.items[i].items[0].attr.text = '��';
//															else if(text == 'FRST') me.legend.items[i].items[0].attr.text = '�긲';
//															else if(text == 'MDW') me.legend.items[i].items[0].attr.text = '����';
//															else if(text == 'SWMP') me.legend.items[i].items[0].attr.text = '����';
//															else if(text == 'VCT') me.legend.items[i].items[0].attr.text = '����';
//															else if(text == 'WZN') me.legend.items[i].items[0].attr.text = '����';
//															
//														}
														
														me.redraw();
													}
												});
											}
										}
									}
								}
							]
                        },
                        {
                            xtype: 'panel',
							width: 400,
							border: false,
							height: 220,
							id: 'gridDiv22',
							tbar: [
								{
									text: '����',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid22").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>������</th>";
										html += "<th>������(%)</th>";
										
										html += "</tr>";
										html += "</thead>";
										html += "<tbody>";
										
										
										for(var i in data) {
											html += "<tr>";
											html += "<td>" + data[i].data['ITEM_DISP'] + "</td>";
											html += "<td>" + data[i].data['VAL'] + "</td>";
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
									id: 'grid22',
//									store: 'storeType12',
									store: Ext.create('chart.store.storeType2'),
									border: false,
									width: 398,
									height: 163,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'ITEM_DISP', header: '������', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'VAL', header: '���� ����(%)', flex: 1, align: 'right', renderer: function(val, p, record) {
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
													mw: request.getParameter('mw'),
													year: request.getParameter('year2')
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
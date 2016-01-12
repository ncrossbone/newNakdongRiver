Ext.define('chart.view.viewChart1', {
    extend: 'Ext.panel.Panel',

	id: 'viewChart1',
	xtype: 'viewChart1',
    layout: 'fit',

    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	requires:['chart.store.storeType1'],
            items: [
                {
                    xtype: 'panel',
					border: false,
					layout: 'vbox',
					tbar: [
						{
							text: '인쇄',
							iconCls: 'print',
							handler: function() {
								$("#chart1").print();
							}	
						},
						{
							text: '저장',
							iconCls: 'save', 
							handler: function() {
								var chart = Ext.getCmp('chart1');
								saveCharToImage(chart);
//								Ext.getCmp('chart1').save({type: 'image/png'});
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
									id: 'chart1',
									draggable: false,
									animate: true,
									shadow: true,
									width: 400,
									height: 350,
//									store: 'storeType1',
									store: Ext.create('chart.store.storeType1'),
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
											  	var chart = Ext.getCmp('chart1');
												var store = chart.getStore();
												var data = store.data.items;
												
												var all = 0;
												
												for(var i in data) {
													all += parseFloat(data[i].data['VAL']);
												}
																								
												var item = storeItem.get('ITEM_DISP');
												var val = storeItem.get('VAL');
												
												val = parseFloat(val);
												
							                    this.setTitle(item + " 면적 비율: " + (val / all * 100).toFixed(2) + "%");
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
							                    font: '12px 돋움체, Verdana',
												renderer: function(v) {
//													if(v == 'DRY') v = '시가화/건조지역';
//													else if(v == 'RIC') v = '논';
//													else if(v == 'FLD') v = '밭';
//													else if(v == 'FRST') v = '산림';
//													else if(v == 'MDW') v = '초지';
//													else if(v == 'SWMP') v = '습지';
//													else if(v == 'VCT') v = '나지';
//													else if(v == 'WZN') v = '수역';
													
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
													year: request.getParameter('year1')
												};
												
												store.load({
													scope: this,
													callback: function(records, operation, success) {
//														for(var i in me.legend.items) {
//															var text = me.legend.items[i].items[0].attr.text;
//															
//															if(text == 'DRY') me.legend.items[i].items[0].attr.text = '시가화/건조지역11';
//															else if(text == 'RIC') me.legend.items[i].items[0].attr.text = '논11';
//															else if(text == 'FLD') me.legend.items[i].items[0].attr.text = '밭11';
//															else if(text == 'FRST') me.legend.items[i].items[0].attr.text = '산림11';
//															else if(text == 'MDW') me.legend.items[i].items[0].attr.text = '초지11';
//															else if(text == 'SWMP') me.legend.items[i].items[0].attr.text = '습지11';
//															else if(text == 'VCT') me.legend.items[i].items[0].attr.text = '나지11';
//															else if(text == 'WZN') me.legend.items[i].items[0].attr.text = '수역1';
//															
//														}
//														
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
							id: 'gridDiv11',
							tbar: [
								{
									text: '엑셀',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid11").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>토지명</th>";
										html += "<th>면적율(%)</th>";
										
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
									id: 'grid11',
//									store: 'storeType11',
									store: Ext.create('chart.store.storeType1'),
									border: false,
									width: 398,
									height: 163,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'ITEM_DISP', header: '토지명', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'VAL', header: '면적 비율(%)', flex: 1, align: 'right', renderer: function(val, p, record) {
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
													year: request.getParameter('year1')
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
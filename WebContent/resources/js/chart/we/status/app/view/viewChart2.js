Ext.define('chart.view.viewChart2', {
    extend: 'Ext.panel.Panel',

	id: 'viewChart2',
	xtype: 'viewChart2',
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
							text: '인쇄',
							iconCls: 'print',
							handler: function() {
								$("#chart2").print();
							}	
						},
						{
							text: '저장',
							iconCls: 'save', 
							handler: function() {
								Ext.getCmp('chart2').save({type: 'image/png'});
							}	
						},
						{
							xtype: 'combobox',
							store: 'storeYear',
							queryMode: 'local',
							displayField: 'YR',
							valueField: 'YR',
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
									var chart = Ext.getCmp('chart2');
									var grid = Ext.getCmp('grid2');
									
									var cstore = chart.getStore();
									var cproxy = cstore.getProxy();
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									cproxy.extraParams = {
										year: nv,
										ptno: request.getParameter('ptno')
									};
									gproxy.extraParams = {
										year: nv,
										ptno: request.getParameter('ptno')
									};
									
									cstore.load();
									gstore.load();
								}
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
									border: false,
									draggable: false,
									animate: true,
									shadow: true,
									width: 580,
									margin: '10px 10px 10px 10px',
									height: 350,
									store: 'storeType2',
									legend: {
										position: 'bottom'
									},
									axes: [
										{
				                            type: 'Category',
				                            fields: ['WMOD'],
				                            position: 'bottom'
										},
										{
											type: 'Numeric',
				                            fields: ['DOC', 'BOD', 'COD', 'SS', 'TN', 'TP'],
				                            position: 'left',
											grid: true,
				                            label: {
				                            	renderer: function(value) {
					                    			return setComma(value.toFixed(3));
				                            	}
				                            }
										}
										,
										{
											type: 'Numeric',
				                            fields: ['PH'],
				                            position: 'right',
											grid: true,
				                            label: {
				                            	renderer: function(value) {
					                    			return setComma(value.toFixed(1));
				                            	}
				                            }
										}
									],
									series: [
				                        {
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['PH'],
											title: 'PH',
											axis: 'right',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('PH');
				                            		
													value = value.toFixed(1);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 PH: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
				 				            }
				                        }, 
				                        {
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['DOC'],
											title: 'DO',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('DOC');
				                            		
													value = value.toFixed(1);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 DO: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
				 				            }
				                        }
				                        ,{
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['BOD'],
											title: 'BOD',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('BOD');
				                            		
													value = value.toFixed(2);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 BOD: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
				 				            }
				                        }
				                        ,{
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['COD'],
											title: 'COD',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('COD');
				                            		
													value = value.toFixed(2);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 COD: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
				 				            }
				                        }
				                        ,{
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['SS'],
											title: 'SS',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('SS');
				                            		
													value = value.toFixed(1);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 SS: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
				 				            }
				                        }
										, {
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['TN'],
											title: 'TN',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('TN');
				                            		
													value = value.toFixed(3);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 TN: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
				 				            }
				                        }
										, {
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['TP'],
											title: 'TP',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('TP');
				                            		
													value = value.toFixed(3);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 TP: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
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
													ptno: request.getParameter('ptno')
													, year: request.getParameter('year')
												};
												
												store.load();
											}
										}
									}
								}
								, {
									xtype: 'grid',
									id: 'grid2',
									store: 'storeType2',
									border: 0,
									width: 600,
									height: 150,
									tbar: [
										{
											text: '엑셀',
											iconCls: 'excel', 
											handler: function() {
												var data = Ext.getCmp("grid2").getStore().data.items;
												
												var html = "<div><table border='1'><thead><tr>";
												
												html += "<th>월</th>";
												html += "<th>수온(℃)</th>";
												html += "<th>PH</th>";
												html += "<th>DO(mg/L)</th>";
												html += "<th>BOD(mg/L)</th>";
												html += "<th>COD(mg/L)</th>";
												html += "<th>SS(mg/L)</th>";
												html += "<th>TN(mg/L)</th>";
												html += "<th>TP(mg/L)</th>";
												
												html += "</tr>";
												html += "</thead>";
												html += "<tbody>";
												
												
												for(var i in data) {
													html += "<tr>";
													html += "<td>" + data[i].data['WMOD'] + "</td>";
													html += "<td>" + data[i].data['TEMP'] + "</td>";
													html += "<td>" + data[i].data['PH'] + "</td>";
													html += "<td>" + data[i].data['DOC'] + "</td>";
													html += "<td>" + data[i].data['BOD'] + "</td>";
													html += "<td>" + data[i].data['COD'] + "</td>";
													html += "<td>" + data[i].data['SS'] + "</td>";
													html += "<td>" + data[i].data['TN'] + "</td>";
													html += "<td>" + data[i].data['TP'] + "</td>";
													html += "</tr>";
												}
												
												html += "</tbody></table></div>";
												
												$(html).find("td").attr("style", "mso-number-format:'\\@'; text-align: center;");
												
												if($("form[name='excelForm']").length > 0) {
													$("form[name='excelForm']").remove();
												}
												 
												$("body").append("<form name='excelForm' method='post' target='_blank' accept-charset='EUC-KR'><input type='hidden' id='excel' name='excel'></form>");
												
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
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'WMOD', header: '월', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'TEMP', header: '수온(℃)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(1));
										}},
										{xtype: 'gridcolumn', dataIndex: 'PH', header: 'PH', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(1));
										}},
										{xtype: 'gridcolumn', dataIndex: 'DOC', header: 'DO(mg/L)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(1));
										}},
										{xtype: 'gridcolumn', dataIndex: 'BOD', header: 'BOD(mg/L)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'COD', header: 'COD(mg/L)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'SS', header: 'SS(mg/L)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(1));
										}},
										{xtype: 'gridcolumn', dataIndex: 'TN', header: 'TN(mg/L)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(3));
										}},
										{xtype: 'gridcolumn', dataIndex: 'TP', header: 'TP(mg/L)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(3));
										}}
									],
									listeners: {
										render: {
											fn: function(me){
												var store = me.getStore();
												var proxy = store.getProxy();
												
												var request = new Request();
												
												proxy.extraParams = {
													ptno: request.getParameter('ptno')
													, year: request.getParameter('year')
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
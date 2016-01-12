Ext.define('chart.view.viewChart1', {
    extend: 'Ext.panel.Panel',

	id: 'viewChart1',
	xtype: 'viewChart1',
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
								$("#chart1").print();
							}	
						},
						{
							text: '저장',
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
									width: 2000,
									margin: '10px 10px 20px 10px',
									height: 350,
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
				                            fields: ['MAX_AMT', 'AVG_AMT', 'SAV_AMT', 'DRY_AMT'],
				                            position: 'left',
											grid: true,
				                            label: {
				                            	renderer: function(value) {
					                    			return setComma(value.toFixed(2));
				                            	}
				                            }
										}
									],
				                    series: [
				                        {
				                            type: 'line',
				                            xField: 'RSRH_YR',
				                            yField: ['MAX_AMT'],
											title: '풍수량',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('RSRH_YR');
				                            		var value = storeItem.get('MAX_AMT');
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + "년 풍수량: " + value);
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
				                        }, {
				                            type: 'line',
				                            xField: 'RSRH_YR',
				                            yField: ['AVG_AMT'],
											title: '평수량',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('RSRH_YR');
				                            		var value = storeItem.get('AVG_AMT');
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + "년 평수량: " + value);
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
				                        }, {
				                            type: 'line',
				                            xField: 'RSRH_YR',
				                            yField: ['SAV_AMT'],
											title: '저수량',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('RSRH_YR');
				                            		var value = storeItem.get('SAV_AMT');
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + "년 저수량: " + value);
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
				                        }, {
				                            type: 'line',
				                            xField: 'RSRH_YR',
				                            yField: ['DRY_AMT'],
											title: '갈수량',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('RSRH_YR');
				                            		var value = storeItem.get('DRY_AMT');
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + "년 갈수량: " + value);
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
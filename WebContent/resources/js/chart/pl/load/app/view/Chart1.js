Ext.define('MyApp.view.Chart1', {
    extend: 'Ext.Panel',

    id: 'Chart1',
    xtype: 'Chart1',
    width: 600,
    height: 605,
    draggable: false,
    resizable: false,
    layout: 'fit',
    bodyPadding: 0,
	border: false,
	borderStyle: 'background-color: transparent',
	  
	tbar: [
		{
			text: '인쇄',
			iconCls: 'print',
			handler: function() {
			}	
		},
		{
			text: '저장',
			iconCls: 'save', 
			handler: function() {
			}	
		}
	],
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'chart',
                    id: 'chart1',
                    draggable: false,
                    animate: true,
                    shadow: true,
                    width: 590,
                    height: 550,
                    maxWidth: 590,
                    maxHeight: 550,
                    insetPadding: 10,
                    store: 'MyApp.store.Data1',
                    legend: {
                    	position: 'right'
                    },
                    axes: [
                        {
                            type: 'Numeric',
							position: 'left',
                            fields: ['bod1', 'tn1', 'tp1', 'bod2', 'tn2', 'tp2'],
                            title: '(kg/일)',
							grid: true,
                            label: {
                            	renderer: function(value) {
                            		value += '';
                            		
	                    			while((/(-?[0-9]+)([0-9]{3})/).test(value)) {
	                    				value = value.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
			    	        		}
	                    			
	                    			return value;
                            	}
                            }
                        },
				        {
				            type: 'Category',
				            position: 'bottom',
				            title: '중권역',
				            fields: [
								'areaM',
							],
					        label: {
					            rotate: {
					                degrees: 270
					            }
					        }
				        }
                    ],
                    series: [
                        {
                            type: 'line',
                            xField: 'areaM',
                            yField: 'bod1',
                        	showInLegend: true,
							title : '발생부하BOD량',
							markerConfig: {
				                type: 'cross',
				                size: 4,
				                radius: 4,
				                'stroke-width': 0
				            },
                            tips: {
                            	trackMouse: true,
                            	width: 300,
                            	height: 22,
                            	titleAlign: 'center',
                            	renderer: function(storeItem, item) {
                            		var data = item.value[1];
                            		data += '';
                            		
	                    			while((/(-?[0-9]+)([0-9]{3})/).test(data)) {
	                    				data = data.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
			    	        		}
	                    			
									this.setTitle(storeItem.get('areaM') + " 발생부하BOD량: " + data + '(kg/일)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaM',
                            yField: 'tn1',
                        	showInLegend: true,
							title : '발생부하TN량',
							markerConfig: {
				                type: 'cross',
				                size: 4,
				                radius: 4,
				                'stroke-width': 0
				            },
                            tips: {
                            	trackMouse: true,
                            	width: 300,
                            	height: 22,
                            	titleAlign: 'center',
                            	renderer: function(storeItem, item) {
                            		var data = item.value[1];
                            		data += '';
                            		
	                    			while((/(-?[0-9]+)([0-9]{3})/).test(data)) {
	                    				data = data.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
			    	        		}
	                    			
									this.setTitle(storeItem.get('areaM') + " 발생부하TN량: " + data + '(kg/일)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaM',
                            yField: 'tp1',
                        	showInLegend: true,
							title : '발생부하TP량',
							markerConfig: {
				                type: 'cross',
				                size: 4,
				                radius: 4,
				                'stroke-width': 0
				            },
                            tips: {
                            	trackMouse: true,
                            	width: 300,
                            	height: 22,
                            	titleAlign: 'center',
                            	renderer: function(storeItem, item) {
                            		var data = item.value[1];
                            		data += '';
                            		
	                    			while((/(-?[0-9]+)([0-9]{3})/).test(data)) {
	                    				data = data.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
			    	        		}
	                    			
									this.setTitle(storeItem.get('areaM') + " 발생부하TP량: " + data + '(kg/일)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaM',
                            yField: 'bod2',
                        	showInLegend: true,
							title : '배출부하BOD량',
							markerConfig: {
				                type: 'cross',
				                size: 4,
				                radius: 4,
				                'stroke-width': 0
				            },
                            tips: {
                            	trackMouse: true,
                            	width: 300,
                            	height: 22,
                            	titleAlign: 'center',
                            	renderer: function(storeItem, item) {
                            		var data = item.value[1];
                            		data += '';
                            		
	                    			while((/(-?[0-9]+)([0-9]{3})/).test(data)) {
	                    				data = data.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
			    	        		}
	                    			
									this.setTitle(storeItem.get('areaM') + " 배출부하BOD량: " + data + '(kg/일)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaM',
                            yField: 'tn2',
                        	showInLegend: true,
							title : '배출부하TN량',
							markerConfig: {
				                type: 'cross',
				                size: 4,
				                radius: 4,
				                'stroke-width': 0
				            },
                            tips: {
                            	trackMouse: true,
                            	width: 300,
                            	height: 22,
                            	titleAlign: 'center',
                            	renderer: function(storeItem, item) {
                            		var data = item.value[1];
                            		data += '';
                            		
	                    			while((/(-?[0-9]+)([0-9]{3})/).test(data)) {
	                    				data = data.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
			    	        		}
	                    			
									this.setTitle(storeItem.get('areaM') + " 배출부하TN량: " + data + '(kg/일)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaM',
                            yField: 'tp2',
                        	showInLegend: true,
							title : '배출부하TP량',
							markerConfig: {
				                type: 'cross',
				                size: 4,
				                radius: 4,
				                'stroke-width': 0
				            },
                            tips: {
                            	trackMouse: true,
                            	width: 300,
                            	height: 22,
                            	titleAlign: 'center',
                            	renderer: function(storeItem, item) {
                            		var data = item.value[1];
                            		data += '';
                            		
	                    			while((/(-?[0-9]+)([0-9]{3})/).test(data)) {
	                    				data = data.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
			    	        		}
	                    			
									this.setTitle(storeItem.get('areaM') + " 배출부하TP량: " + data + '(kg/일)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
Ext.define('MyApp.view.Chart2', {
    extend: 'Ext.Panel',

    id: 'Chart2',
    xtype: 'Chart2',
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
			text: '�μ�',
			iconCls: 'print',
			handler: function() {
			}	
		},
		{
			text: '����',
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
                    id: 'chart2',
                    draggable: false,
                    animate: true,
                    shadow: true,
                    width: 590,
                    height: 550,
                    maxWidth: 590,
                    maxHeight: 550,
                    insetPadding: 10,
                    store: 'MyApp.store.Data2',
                    legend: {
                    	position: 'right'
                    },
                    axes: [
                        {
                            type: 'Numeric',
							position: 'left',
                            fields: ['bod1', 'tn1', 'tp1', 'bod2', 'tn2', 'tp2'],
                            title: '(kg/��)',
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
				            title: '�ұǿ�',
				            fields: [
								'areaS',
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
                            xField: 'areaS',
                            yField: 'bod1',
                        	showInLegend: true,
							title : '�߻�����BOD��',
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
	                    			
									this.setTitle(storeItem.get('areaS') + " �߻�����BOD��: " + data + '(kg/��)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaS',
                            yField: 'tn1',
                        	showInLegend: true,
							title : '�߻�����TN��',
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
	                    			
									this.setTitle(storeItem.get('areaS') + " �߻�����TN��: " + data + '(kg/��)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaS',
                            yField: 'tp1',
                        	showInLegend: true,
							title : '�߻�����TP��',
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
	                    			
									this.setTitle(storeItem.get('areaS') + " �߻�����TP��: " + data + '(kg/��)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaS',
                            yField: 'bod2',
                        	showInLegend: true,
							title : '�������BOD��',
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
	                    			
									this.setTitle(storeItem.get('areaS') + " �������BOD��: " + data + '(kg/��)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaS',
                            yField: 'tn2',
                        	showInLegend: true,
							title : '�������TN��',
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
	                    			
									this.setTitle(storeItem.get('areaS') + " �������TN��: " + data + '(kg/��)');
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
                        {
                            type: 'line',
                            xField: 'areaS',
                            yField: 'tp2',
                        	showInLegend: true,
							title : '�������TP��',
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
	                    			
									this.setTitle(storeItem.get('areaS') + " �������TP��: " + data + '(kg/��)');
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
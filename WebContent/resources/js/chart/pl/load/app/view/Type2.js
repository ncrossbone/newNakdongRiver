Ext.define('MyApp.view.Type2', {
    extend: 'Ext.Panel',

    id: 'Type2',
    xtype: 'Type2',
    width: 600,
    height: 550,
    draggable: false,
    resizable: false,
    layout: 'fit',
    
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
                    store: 'MyApp.store.Type2',
		            legend: {
		                position: 'right'
		            },
                    axes: [
                        {
                            type: 'Numeric',
							position: 'left',
                            fields: [
                                'value1',
								'value2',
								'value3',
								'value4',
								'value5',
								'value6'
                            ],
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
				            fields: [
								'sw',
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
                            xField: 'sw',
                            yField: 'value1',
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
									this.setTitle(render(storeItem, item));
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
						{
                            type: 'line',
                            xField: 'sw',
                            yField: 'value2',
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
									this.setTitle(render(storeItem, item));
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
						{
                            type: 'line',
                            xField: 'sw',
                            yField: 'value3',
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
									this.setTitle(render(storeItem, item));
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
						{
                            type: 'line',
                            xField: 'sw',
                            yField: 'value4',
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
									this.setTitle(render(storeItem, item));
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
						{
                            type: 'line',
                            xField: 'sw',
                            yField: 'value5',
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
									this.setTitle(render(storeItem, item));
                            	}
                            },
                            highlight: {
                                size: 7
                            }
                        },
						{
                            type: 'line',
                            xField: 'sw',
                            yField: 'value6',
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
									this.setTitle(render(storeItem, item));
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

function render(storeItem, item){
	var name = item.series.yField;
	var label = "";
	
	var value = storeItem.get('value');
	if(name == "value1"){
		label = '�߻�����BOD��(kg/��)';
	}else if(name == "value2"){
		label = '�߻�����TN��(kg/��)';
	}else if(name == "value3"){
		label = '�߻�����TP��(kg/��)';
	}else if(name == "value4"){
		label = '�������BOD��(kg/��)';
	}else if(name == "value5"){
		label = '�������TN��(kg/��)';
	}else if(name == "value6"){
		label = '�������TP��(kg/��)';
	}
	
	value = storeItem.get(name);
	return label + " : " + value;
}

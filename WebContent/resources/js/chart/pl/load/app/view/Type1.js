Ext.define('MyApp.view.Type1', {
    extend: 'Ext.Panel',

    id: 'Type1',
    xtype: 'Type1',
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
                    id: 'chart1',
                    draggable: false,
                    animate: true,
                    shadow: true,
                    width: 590,
                    height: 550,
                    maxWidth: 590,
                    maxHeight: 550,
                    insetPadding: 10,
                    store: 'MyApp.store.Type1',
                    axes: [
                        {
                            type: 'Numeric',
							position: 'left',
                            fields: [
                                'value'
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
								'valueName',
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
                            xField: 'valueName',
                            yField: 'value',
                        	showInLegend: true,
							title : '°¡È­Ãµ',
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
	var name = storeItem.get('valueName');
	var value =storeItem.get('value');
	
	return name + " : " + value;
}

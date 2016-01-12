Ext.define('MyApp.view.Chart1', {
    extend: 'Ext.Panel',

    id: 'Chart1',
    xtype: 'Chart1',
    width: 800,
    height: '100%',
    draggable: false,
    resizable: false,
    layout: 'fit',
    
    title: '남강 오염기여율',
	  
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
                    width: 800,
                    height: '100%',
                    maxWidth: 800,
                    maxHeight: '100%',
                    insetPadding: 10,
                    store: 'MyApp.store.Data1',
		            legend: {
		                position: 'bottom'
		            },
                    axes: [
                        {
                            type: 'Category',
                            fields: [
                                'name'
                            ],
                            position: 'bottom',
                            title: '관측소',
					        label: {
					            rotate: {
					                degrees: 315
					            }
					        }
                        },
                        {
                            type: 'Numeric',
                            fields: ['bod', 'cod', 'tn', 'tp'],
                            grid: true,
                            position: 'left',
                            title: '기여율(%)'
                        }
                    ],
                    series: [
                        {
                            type: 'column',
                            xField: ['name'],
                            yField: ['bod', 'cod', 'tn', 'tp'],
                            title: ['BOD', 'COD', 'T-N', 'T-P'],
                            fill: false,
                            smooth: 3,
                        	showInLegend: true,
                            tips: {
                            	trackMouse: true,
                            	width: 300,
                            	height: 22,
                            	titleAlign: 'center',
                            	renderer: function(storeItem, item) {
                            		var name = storeItem.get('name');
                            		var value = "";
                            		
                            		if(item.yField == 'bod') {
                            			name += " BOD 기여율: ";
                            			value = storeItem.get('bod');
                            		} else if(item.yField == 'cod') {
                            			name += " COD 기여율: ";
                            			value = storeItem.get('cod');
                            		} else if(item.yField == 'tn') {
                            			name += " T-N 기여율: ";
                            			value = storeItem.get('tn');
                            		} else if(item.yField == 'tp') {
                            			name += " T-P 기여율: ";
                            			value = storeItem.get('tp');
                            		}
                            		
	                    			value += "%";
	                    			
                            		this.setTitle(name+value);
                            	}
                            },
			                highlight: {
			                    size: 7
			                },
                            label: {
                                display: 'none'
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
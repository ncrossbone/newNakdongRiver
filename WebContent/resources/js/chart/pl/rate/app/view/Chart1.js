Ext.define('MyApp.view.Chart1', {
    extend: 'Ext.Panel',

    id: 'Chart1',
    xtype: 'Chart1',
    width: 800,
    height: '100%',
    draggable: false,
    resizable: false,
    layout: 'fit',
    
    title: '���� �����⿩��',
	  
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
                            title: '������',
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
                            title: '�⿩��(%)'
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
                            			name += " BOD �⿩��: ";
                            			value = storeItem.get('bod');
                            		} else if(item.yField == 'cod') {
                            			name += " COD �⿩��: ";
                            			value = storeItem.get('cod');
                            		} else if(item.yField == 'tn') {
                            			name += " T-N �⿩��: ";
                            			value = storeItem.get('tn');
                            		} else if(item.yField == 'tp') {
                            			name += " T-P �⿩��: ";
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
Ext.define('MyApp.view.Tab1', {
    extend: 'Ext.form.Panel',

    width: 802,
    height: 700,
    xtype: 'Temp',
    frame: true,
    bodyPadding: 0,
	border: false,
	borderStyle: 'background-color: transparent',
	
	fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    requires: [
		'MyApp.view.Chart1',
		'MyApp.view.Grid1'
	],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                	flex: 1,
                    layout: 'fit',
                    margin: '0 0 3 0',
                    items: [{xtype: 'Chart1'}],
                	border: false,
                	borderStyle: 'background-color: transparent'
                },
                {
                    height: 200,
                    layout: 'fit',
                    margin: '0 0 0 0',
                    items: [{xtype: 'Grid1'}],
                	border: false,
                	borderStyle: 'background-color: transparent'
                }
            ]
        });

        me.callParent(arguments);
    }

});
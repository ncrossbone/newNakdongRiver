Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',

    width: 900,
    height: 600,
	id: 'view',

    requires: [
		'chart.view.viewGrid1'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
                    xtype: 'viewGrid1',
					flex: 1,
					border: 0
                }
            ]
        });

        me.callParent(arguments);
    }
});
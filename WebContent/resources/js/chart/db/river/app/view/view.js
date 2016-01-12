Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',

    width: 700,
    height: 600,
	id: 'view',

    requires: [
		'chart.view.viewChart1'
		,'chart.view.viewGrid1'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'viewChart1',
					flex: 1,
					border: 0,
					listeners: {
						render: function(me) {
							var request = new Request();
							
							var mw = request.getParameter('name');
							mw = decodeURIComponent(mw, "UTF-8");
							
							me.setTitle(mw + ' 중권역 하천유황');
						}
					}
                }
				, {
                    xtype: 'viewGrid1',
					flex: 1,
					border: 0
                }
            ]
        });

        me.callParent(arguments);
    }
});
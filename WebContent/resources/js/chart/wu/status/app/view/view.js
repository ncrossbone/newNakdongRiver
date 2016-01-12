Ext.define('chart.view.view', {
    extend: 'Ext.tab.Panel',

    height: 530,
    width: 600,
    activeTab: 0,
	id: 'view1',

    requires: [
		'chart.view.viewTab1',
		'chart.view.viewTab2'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'viewTab1',
					border: 0,
        			title: '누적량'
                },
                {
                    xtype: 'viewTab2',
					border: 0,
        			title: '비율'
                }
            ],
			listeners: {
				render: function(me) {
					var request = new Request();
					
					var mw = request.getParameter('name');
					mw = decodeURIComponent(mw, "UTF-8");
					
					me.setTitle(mw + ' 용수구분 누적 및 비율');
				}
			}
        });

        me.callParent(arguments);
    }
});
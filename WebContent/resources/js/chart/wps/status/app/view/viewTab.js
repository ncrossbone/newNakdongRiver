Ext.define('chart.view.viewTab', {
    extend: 'Ext.tab.Panel',

    height: 600,
    width: 600,
    activeTab: 0,
    title: '수질오염원 현황',

    requires: [
		'chart.view.viewTab1',
		'chart.view.viewTab2',
		'chart.view.viewTab3',
		'chart.view.viewTab4',
		'chart.view.viewTab5'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'viewTab1',
        			title: '생활계'
                },
                {
                    xtype: 'viewTab2',
        			title: '축산계'
                },
                {
                    xtype: 'viewTab3',
        			title: '산업계'
                },
                {
                    xtype: 'viewTab4',
        			title: '양식계'
                },
                {
                    xtype: 'viewTab5',
        			title: '매립계'
                }
            ]
        });

        me.callParent(arguments);
    }
});
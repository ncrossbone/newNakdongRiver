Ext.define('chart.view.view', {
    extend: 'Ext.tab.Panel',

    width: 600,
    height: 600,
    activeTab: 0,
	id: 'view',

    requires: [
		'chart.view.viewTab1'
		, 'chart.view.viewTab2'
		, 'chart.view.viewTab3'
		, 'chart.view.viewTab4'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
//                {
//                    xtype: 'viewTab1',
//        			title: '정보'
//                },
//                {
//                    xtype: 'viewTab2',
//        			title: '지점사진'
//                },
//                {
//                    xtype: 'viewTab3',
//        			title: '동영상'
//                },
                {
                    xtype: 'viewTab4',
        			title: '차트'
                }
            ]
        });

        me.callParent(arguments);
    }
});
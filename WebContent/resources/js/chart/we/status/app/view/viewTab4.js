Ext.define('chart.view.viewTab4', {
    extend: 'Ext.tab.Panel',

	id: 'viewTab4',
	xtype: 'viewTab4',
    layout: 'fit',
	border: 0,

    requires: [
		'chart.view.viewChart1'
		, 'chart.view.viewChart2'
		, 'chart.view.viewChart3'
		, 'chart.view.viewChart4'
	],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'viewChart1',
					border: 0,
					title: '수질-연도별'
                }
				, {
                    xtype: 'viewChart2',
					border: 0,
					title: '수질-월별'
                }
//              2014.05.14 수온 탭 삭제                
//				, {
//                    xtype: 'viewChart3',
//					border: 0,
//					title: '수온-연도별'
//                }
//				, {
//                    xtype: 'viewChart4',
//					border: 0,
//					title: '수온-월별'
//                }
            ]
        });

        me.callParent(arguments);
    }
});
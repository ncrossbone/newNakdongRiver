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
					title: '����-������'
                }
				, {
                    xtype: 'viewChart2',
					border: 0,
					title: '����-����'
                }
//              2014.05.14 ���� �� ����                
//				, {
//                    xtype: 'viewChart3',
//					border: 0,
//					title: '����-������'
//                }
//				, {
//                    xtype: 'viewChart4',
//					border: 0,
//					title: '����-����'
//                }
            ]
        });

        me.callParent(arguments);
    }
});
Ext.define('chart.view.viewTab', {
    extend: 'Ext.tab.Panel',

    height: 600,
    width: 600,
    activeTab: 0,
    title: '���������� ��Ȳ',

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
        			title: '��Ȱ��'
                },
                {
                    xtype: 'viewTab2',
        			title: '����'
                },
                {
                    xtype: 'viewTab3',
        			title: '�����'
                },
                {
                    xtype: 'viewTab4',
        			title: '��İ�'
                },
                {
                    xtype: 'viewTab5',
        			title: '�Ÿ���'
                }
            ]
        });

        me.callParent(arguments);
    }
});
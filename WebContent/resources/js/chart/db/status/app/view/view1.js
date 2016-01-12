Ext.define('chart.view.view1', {
    extend: 'Ext.tab.Panel',

    height: 600,
    width: 600,
    activeTab: 0,
    title: '�߱ǿ��� �ұǿ� �� ���������� ����',
	id: 'view1',

    requires: [
		'chart.view.view1Tab1',
		'chart.view.view1Tab2',
		'chart.view.view1Tab3'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'view1Tab1',
        			title: '�ұǿ��� ����'
                },
                {
                    xtype: 'view1Tab2',
        			title: '���������� ����'
                }//,
               // {
                //    xtype: 'view1Tab3',
        		//	title: '���������� ����'
               // }
            ]
        });

        me.callParent(arguments);
    }
});
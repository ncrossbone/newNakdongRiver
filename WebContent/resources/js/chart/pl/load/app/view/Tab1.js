Ext.define('MyApp.view.Tab1', {
    extend: 'Ext.tab.Panel',

    width: 602,
    height: 660,
    minButtonWidth: 100,
    activeTab: 0,
    minTabWidth: 100,
    bodyPadding: 0,
	border: false,
	borderStyle: 'background-color: transparent',

    title: '�߻�/���� ���Ϸ�',
    
    requires: [
		'MyApp.view.Tab2'
	],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
                	xtype: 'panel',
                	title: '�����',
                	items: [
            	        {
        	        		xtype: 'panel',
        	        		items: [{xtype: 'Tab2'}]
            	        }
        	        ]
                },
                {
                	xtype: 'panel',
                	title: '��Ȱ��'
                },
                {
                	xtype: 'panel',
                	title: '����'
                },
                {
                	xtype: 'panel',
                	title: '������'
                }
            ]
        });

        me.callParent(arguments);
    }

});
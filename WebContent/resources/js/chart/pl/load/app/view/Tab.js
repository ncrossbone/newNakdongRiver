Ext.define('MyApp.view.Tab', {
    extend: 'Ext.tab.Panel',

    width: 602,
    height: 600,
    minButtonWidth: 80,
    activeTab: 0,
    minTabWidth: 80,
    
    title: '�߱ǿ�(����) �߻�/���� ���Ϸ�',
    
    requires: [
		'MyApp.view.Type1',
		'MyApp.view.Type2',
		'MyApp.view.Type3'
	],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                	xtype: 'panel',
                	title: '�߱ǿ���',
                	items: [
            	        {
        	        		xtype: 'Type1'
            	        }
        	        ]
                },
				{
                	xtype: 'panel',
                	title: '�ұǿ���',
                	items: [
            	        {
        	        		xtype: 'Type2'
            	        }
        	        ]
                },
				{
                	xtype: 'panel',
                	title: '����������',
                	items: [
            	        {
        	        		xtype: 'Type3'
            	        }
        	        ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
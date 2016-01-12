Ext.define('MyApp.view.Tab', {
    extend: 'Ext.tab.Panel',

    width: 602,
    height: 600,
    minButtonWidth: 80,
    activeTab: 0,
    minTabWidth: 80,
    
    title: '중권역(남강) 발생/배출 부하량',
    
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
                	title: '중권역별',
                	items: [
            	        {
        	        		xtype: 'Type1'
            	        }
        	        ]
                },
				{
                	xtype: 'panel',
                	title: '소권역별',
                	items: [
            	        {
        	        		xtype: 'Type2'
            	        }
        	        ]
                },
				{
                	xtype: 'panel',
                	title: '행정구역별',
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
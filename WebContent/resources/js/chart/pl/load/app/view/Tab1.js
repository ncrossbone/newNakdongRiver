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

    title: '발생/배출 부하량',
    
    requires: [
		'MyApp.view.Tab2'
	],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
                	xtype: 'panel',
                	title: '산업계',
                	items: [
            	        {
        	        		xtype: 'panel',
        	        		items: [{xtype: 'Tab2'}]
            	        }
        	        ]
                },
                {
                	xtype: 'panel',
                	title: '생활계'
                },
                {
                	xtype: 'panel',
                	title: '축산계'
                },
                {
                	xtype: 'panel',
                	title: '토지계'
                }
            ]
        });

        me.callParent(arguments);
    }

});
Ext.define('MyApp.view.Tab2', {
    extend: 'Ext.tab.Panel',
    xtype: 'Tab2',

    width: 600,
    height: 630,
    minButtonWidth: 100,
    activeTab: 0,
    minTabWidth: 100,
    bodyPadding: 0,
	border: false,
	borderStyle: 'background-color: transparent',
    
    requires: [
		'MyApp.view.Chart1',
		'MyApp.view.Chart2',
		'MyApp.view.Chart3'
	],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                	xtype: 'panel',
                	title: '중권역별',
                	items: [{xtype: 'Chart1'}]
                },
                {
                	xtype: 'panel',
                	title: '소권역별',
                	items: [{xtype: 'Chart2'}]
                },
                {
                	xtype: 'panel',
                	title: '행정구역별',
                	items: [{xtype: 'Chart3'}]
                }
            ]
        });

        me.callParent(arguments);
    }

});
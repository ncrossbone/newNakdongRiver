Ext.define('chart.view.view2', {
    extend: 'Ext.tab.Panel',

    height: 600,
    width: 600,
    activeTab: 0,
    title: '青沥备开喊 搁利',
	id: 'view2',

    requires: [
		'chart.view.view2Tab1',
		'chart.view.view2Tab2'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'view2Tab1',
        			title: '青沥备开喊 搁利'
                }//,
                //{
                 //   xtype: 'view2Tab2',
        		//	title: '青沥备开喊 厚啦'
                //}
            ]
        });

        me.callParent(arguments);
    }
});
Ext.define('chart.view.view1', {
    extend: 'Ext.tab.Panel',

    height: 600,
    width: 600,
    activeTab: 0,
    title: '吝鼻开郴 家鼻开 棺 青沥备开喊 搁利',
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
        			title: '家鼻开喊 搁利'
                },
                {
                    xtype: 'view1Tab2',
        			title: '青沥备开喊 搁利'
                }//,
               // {
                //    xtype: 'view1Tab3',
        		//	title: '青沥备开喊 厚啦'
               // }
            ]
        });

        me.callParent(arguments);
    }
});
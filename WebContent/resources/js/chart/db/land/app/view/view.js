Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',

    width: 800,
    height: 600,
	id: 'view',
	layout: {
        type: 'hbox',
        align: 'center'
    },

    requires: [
		'chart.view.viewChart1'
		,'chart.view.viewChart2'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'viewChart1',
					flex: 1,
					border: 0,
					listeners: {
						render: function(me) {
							var request = new Request();
							
							var mw = request.getParameter('name');
							mw = decodeURIComponent(mw, "UTF-8");
							var year = request.getParameter('year1');
							
							me.setTitle(year + '년 ' + mw + ' 중권역 토지이용현황');
						}
					}
                }
				, {
                    xtype: 'viewChart2',
					flex: 1,
					border: 0,
					style: 'border-left: solid 1px #99bce8',
					listeners: {
						render: function(me) {
							var request = new Request();
							
							var mw = request.getParameter('name');
							mw = decodeURIComponent(mw, "UTF-8");
							var year = request.getParameter('year2');
							
							me.setTitle(year + '년 ' + mw + ' 중권역 토지이용현황');
						}
					}
                }
            ]
        });

        me.callParent(arguments);
    }
});
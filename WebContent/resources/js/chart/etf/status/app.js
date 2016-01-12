Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/etf/status/app/store',
        'chart.view': '/nakdong/resources/js/chart/etf/status/app/view',
        'chart.model': '/nakdong/resources/js/chart/etf/status/app/model'
    }
});

Ext.application({
    name: 'chart'
	
    ,models: [
        'modelType1'
    ],
    stores: [
        'storeType1'
    ],
    views: [
        'view1'
    ],
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

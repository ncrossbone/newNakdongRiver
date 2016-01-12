Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/we/water/app/store',
        'chart.view': '/nakdong/resources/js/chart/we/water/app/view',
        'chart.model': '/nakdong/resources/js/chart/we/water/app/model'
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
        'view'
    ],
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/we/tpmv/app/store',
        'chart.view': '/nakdong/resources/js/chart/we/tpmv/app/view',
        'chart.model': '/nakdong/resources/js/chart/we/tpmv/app/model'
    }
});

Ext.application({
    name: 'chart',
	requires : ['chart.view.view']
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

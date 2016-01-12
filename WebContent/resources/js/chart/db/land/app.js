Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.view': '/nakdong/resources/js/chart/db/land/app/view',
        'chart.model': '/nakdong/resources/js/chart/db/land/app/model',
        'chart.store': '/nakdong/resources/js/chart/db/land/app/store'
    }
});

Ext.application({
	requires: [
       'chart.view.view',
       'chart.store.storeType1',
       'chart.store.storeType2'
    ],
	views: [
        'view'
		,'viewChart1'
		,'viewChart2'
    ],
    name: 'chart',
    models: [
        'modelType1'
    ],
    
//    stores: [
//        'storeType1'
//        ,'storeType2'
//    ],
    
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

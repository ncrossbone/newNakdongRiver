Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/wps/status/app/store',
        'chart.view': '/nakdong/resources/js/chart/wps/status/app/view',
        'chart.model': '/nakdong/resources/js/chart/wps/status/app/model'
    }
});

Ext.application({

    models: [
        'modelType11'
        , 'modelType12'
		, 'modelType21'
		, 'modelType22'
		, 'modelType31'
		, 'modelType32'
		, 'modelType41'
		, 'modelType51'
		, 'modelYear'
    ],
    stores: [
        'storeType11'
        , 'storeType12'
        , 'storeType21'
        , 'storeType22'
        , 'storeType31'
        , 'storeType32'
        , 'storeType41'
        , 'storeType51'
		, 'storeYear'
    ],
    views: [
        'viewTab'
		, 'viewTab1'
		, 'viewTab2'
		, 'viewTab3'
		, 'viewTab4'
		, 'viewTab5'
    ],
	
    autoCreateViewport: true,
    name: 'chart'
});

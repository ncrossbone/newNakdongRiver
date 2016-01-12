Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/db/river2/app/store',
        'chart.view': '/nakdong/resources/js/chart/db/river2/app/view',
        'chart.model': '/nakdong/resources/js/chart/db/river2/app/model'
    }
});

Ext.application({
	requires:['chart.view.view'],
	
	getViewView : function(){
		return this.getView('view');
	},
	
    name: 'chart'
	
    ,models: [
        'modelType1'
        , 'modelYear1'
        , 'modelObs1'
    ],
    stores: [
        'storeType1'
        , 'storeYear1'
        , 'storeObs1'
    ],
    views: [
		'viewGrid1'
    ],
    
    launch: function() {
		var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

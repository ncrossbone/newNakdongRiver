Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/wu/sewer/app/store',
        'chart.view': '/nakdong/resources/js/chart/wu/sewer/app/view',
        'chart.model': '/nakdong/resources/js/chart/wu/sewer/app/model'
    }
});

Ext.application({
	requires :['chart.view.view1'],
	getViewView : function(){
		return this.getView('view1');
	},
    name: 'chart'
	
    ,models: [
        'modelType11'
        , 'modelYear1'
    ],
    stores: [
        'storeType11'
        , 'storeYear1'
    ],
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view1');
    	viewport.doAutoRender();
    }
});

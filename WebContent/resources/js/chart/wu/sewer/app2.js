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
	requires: ['chart.view.view2'],
	getViewView : function(){
		return this.getView('view2');
	},
    name: 'chart'
	
    ,models: [
        'modelType21'
        , 'modelYear2'
    ],
    stores: [
        'storeType21'
        , 'storeYear2'
    ],
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view2');
    	viewport.doAutoRender();
    }
});

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/db/river/app/store',
        'chart.view': '/nakdong/resources/js/chart/db/river/app/view',
        'chart.model': '/nakdong/resources/js/chart/db/river/app/model'
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
    ],
    stores: [
        'storeType1'
    ],
    views: [
         'viewChart1'
		, 'viewGrid1'
    ],
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});
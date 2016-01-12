Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/db/weather/app/store',
        'chart.view': '/nakdong/resources/js/chart/db/weather/app/view',
        'chart.model': '/nakdong/resources/js/chart/db/weather/app/model'
    }
});

Ext.application({
	requires: [
       'chart.view.view',
    ],
	        
    name: 'chart'
	
    ,models: [
        'modelType1',
        'modelType2',
        'modelType3'
    ],
    stores: [
        'storeType1',
        'storeType2',
        'storeType3'
    ],
    views: [
        'view'
    ],
    
    getViewView : function(){
    	return this.getView('view');
    },
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

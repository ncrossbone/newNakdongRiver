Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/wu/status/app/store',
        'chart.view': '/nakdong/resources/js/chart/wu/status/app/view',
        'chart.model': '/nakdong/resources/js/chart/wu/status/app/model'
    }
});

Ext.application({
    requires : ['chart.view.view'],
    getViewView : function(){
    	return this.getView('view');
    },
    
	name: 'chart'
	
    ,models: [
        'modelType1'
		, 'modelType2'
    ],
    stores: [
        'storeType1'
		, 'storeType2'
    ],
    views: [
         'view1Tab1'
		, 'view1Tab2'
    ],
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

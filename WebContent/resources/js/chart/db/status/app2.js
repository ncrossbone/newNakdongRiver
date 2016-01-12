Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/db/status/app/store',
        'chart.view': '/nakdong/resources/js/chart/db/status/app/view',
        'chart.model': '/nakdong/resources/js/chart/db/status/app/model'
    }
});

Ext.application({
	requires: [
       'chart.view.view2',
    ],
    
    name: 'chart'
	
    ,models: [
        'modelType21'
        , 'modelType22'
    ],
    stores: [
        'storeType21'
        , 'storeType22'
    ],
    views: [
        'view2'
		, 'view2Tab1'
		, 'view2Tab2'
    ],
    
    getViewView : function(){
    	return this.getView('view2');
    },
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view2');
    	viewport.doAutoRender();
    }
});

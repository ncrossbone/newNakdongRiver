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
       'chart.view.view1',
    ],

    name: 'chart'
	
    ,models: [
        'modelType11'
        , 'modelType12'
        , 'modelType13'
    ],
    stores: [
         'storeType12'
        , 'storeType13'
    ],
    views: [
         'view1Tab1'
		, 'view1Tab2'
		, 'view1Tab3'
    ],
    
    getView1View : function(){
    	return this.getView('view1');
    },
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view1');
    	viewport.doAutoRender();
    }
});

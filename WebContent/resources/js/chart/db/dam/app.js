Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/db/dam/app/store',
        'chart.view': '/nakdong/resources/js/chart/db/dam/app/view',
        'chart.model': '/nakdong/resources/js/chart/db/dam/app/model'
    }
});

Ext.application({
	requires: [
       'chart.view.view',
    ],

    name: 'chart'
	
    ,models: [
        'modelType1'
    ],
    stores: [
        'storeType1'
    ],
    views: [
        'view'
    ],
    
    getView1View : function(){
    	return this.getView('view');
    },
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

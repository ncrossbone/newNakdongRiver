Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath(
	{'MyApp': '/nakdong/resources/js/chart/pl/rate/app'}
);

Ext.application({
    models: [
        'MyApp.model.Data1'
    ],
    
    stores: [
        'MyApp.store.Data1'
    ],
    
    views: [
        'MyApp.view.Tab1',
        'MyApp.view.Chart1',
        'MyApp.view.Grid1'
    ],
    
    launch: function() {
    	var viewport = Ext.create('MyApp.view.Tab1');
    	viewport.doAutoRender();
    }
});

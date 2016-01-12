Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath(
	{'MyApp': '/nakdong/resources/js/chart/pl/load/app'}
);

Ext.application({
    models: [
        'MyApp.model.Data1',
        'MyApp.model.Data2',
        'MyApp.model.Data3'
    ],
    
    stores: [
        'MyApp.store.Data1',
        'MyApp.store.Data2',
        'MyApp.store.Data3'
    ],
    
    views: [
		'MyApp.view.Tab1',
		'MyApp.view.Tab2',
		'MyApp.view.Chart1',
		'MyApp.view.Chart2',
		'MyApp.view.Chart3'
    ],
    
    launch: function() {
    	var viewport = Ext.create('MyApp.view.Tab1');
    	viewport.doAutoRender();
    }
});

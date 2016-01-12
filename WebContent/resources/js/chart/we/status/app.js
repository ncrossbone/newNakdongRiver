Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '/nakdong/resources/js/lib/extjs-4.1.1',
        'chart.store': '/nakdong/resources/js/chart/we/status/app/store',
        'chart.view': '/nakdong/resources/js/chart/we/status/app/view',
        'chart.model': '/nakdong/resources/js/chart/we/status/app/model'
    }
});

Ext.application({
    name: 'chart',
    
	requires:[
	          	'chart.view.view'
	          	, 'chart.view.viewTab1'
		  		, 'chart.view.viewTab2'
		  		, 'chart.view.viewTab3'
		  		, 'chart.view.viewTab4'
		  		, 'chart.view.viewChart1'
		  		, 'chart.view.viewChart2'
		  		, 'chart.view.viewChart3'
		  		, 'chart.view.viewChart4'
	          ],
	
	getViewView : function(){
		return this.getView('view');
	},
	getView1Tab1 : function(){
		return this.getView('viewTab1');
	},
	getView1Tab2 : function(){
		return this.getView('viewTab2');
	},
	getView1Tab3 : function(){
		return this.getView('viewTab3');
	},
	getView1Tab4 : function(){
		return this.getView('viewTab4');
	},
	getViewChart1 : function(){
		return this.getView('viewChart1');
	},
	getViewChart2 : function(){
		return this.getView('viewChart2');
	},
	getViewChart3 : function(){
		return this.getView('viewChart3');
	},
	getViewChart4 : function(){
		return this.getView('viewChart4');
	}
	
    , models: [
        'modelType1'
        , 'modelType2'
        , 'modelType3'
        , 'modelType4'
        , 'modelYear'
    ]
	, stores: [
        'storeType1'
        , 'storeType2'
        , 'storeType3'
        , 'storeType4'
        , 'storeYear'
    ],
//    views: [
//        'view'
//		, 'view1Tab1'
//		, 'view1Tab2'
//		, 'view1Tab3'
//		, 'view1Tab4'
//		, 'viewChart1'
//		, 'viewChart2'
//		, 'viewChart3'
//		, 'viewChart4'
//    ],
    
    launch: function() {
    	var viewport = Ext.create('chart.view.view');
    	viewport.doAutoRender();
    }
});

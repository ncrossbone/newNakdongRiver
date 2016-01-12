Ext.define('MyApp.store.Type1', {
    extend: 'Ext.data.Store',
    
    requires: [
        'MyApp.model.Type1'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        
        me.callParent([Ext.apply({
            storeId: 'Type1',
            model: 'MyApp.model.Type1',
            data: [
               	{ mw: "가화천" , valueName: "발생부하BOD량",  	value: 5465485.442 }, 
				{ mw: "가화천" , valueName: "발생부하TN량", 		value: 69554653.83 }, 
				{ mw: "가화천" ,	valueName: "발생부하TP량", 		value: 6621570.774 },
				{ mw: "가화천" ,	valueName: "배출부하BOD량", 	value: 212578.7871 },
				{ mw: "가화천" ,	valueName: "배출부하TN량", 		value: 253543.7905 },
				{ mw: "가화천" ,	valueName: "배출부하TP량", 		value: 21322.28758 }
            ]
        }, cfg)]);
    }
});
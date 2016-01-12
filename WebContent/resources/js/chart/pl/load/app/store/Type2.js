Ext.define('MyApp.store.Type2', {
    extend: 'Ext.data.Store',
    
    requires: [
        'MyApp.model.Type2'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        
        me.callParent([Ext.apply({
            storeId: 'Type2',
            model: 'MyApp.model.Type2',
            data: [
               	{sw: "가화천" , value1: 149516.5328 , value2: 55274.90187 , value3: 6129.138112 , value4: 18846.35524 , value5: 22535.11165 , value6: 3173.716711},
				{sw: "곤양천" , value1: 160528.8851 , value2: 35990.67027 , value3: 3371.660547 , value4: 24582.02506 , value5: 6211.449829 , value6: 488.1779067},
				{sw: "관곡천" , value1: 106231.1611 , value2: 112391.8953 , value3: 5708.548041 , value4: 26065.55258 , value5: 100381.735 , value6: 4810.992025},
				{sw: "사천강" , value1: 29420.08189 , value2: 14607.8378 , value3: 2620.588599 , value4: 18577.6606 , value5: 11594.913 , value6: 1119.661361},
				{sw: "삼천포천" , value1: 753056.4606 , value2: 320806.029 , value3: 16422.56166 , value4: 43155.75916 , value5: 27131.30712 , value6: 3231.468475},
				{sw: "죽천천" , value1: 811615.9368 , value2: 189100.6554 , value3: 40239.2966 , value4: 59929.17622 , value5: 35351.92162 , value6: 3606.947938},
				{sw: "학림천" , value1: 3455116.384 , value2: 68826481.84 , value3: 6547078.981 , value4: 21422.25827 , value5: 50337.35233 , value6: 4891.323166}
            ]
        }, cfg)]);
    }
});
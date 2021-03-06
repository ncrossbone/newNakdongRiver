Ext.define('MyApp.store.Data3', {
    extend: 'Ext.data.Store',
    
    requires: [
        'MyApp.model.Data3'
    ],
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        
        me.callParent([Ext.apply({
            storeId: 'Data2',
            model: 'MyApp.model.Data3',
            data: [
                {add1: '경상남도', add2: '거제시', bod1: 1177108.43, tn1: 468524.92, tp1: 56590.53, bod2: 32524.94, tn2: 32220.13, tp2: 3994.38},
				{add1: '경상남도', add2: '거창군', bod1: 2129894.03, tn1: 211971.21, tp1: 25462.88, bod2: 3720.83, tn2: 8277.7, tp2: 1034.97},
				{add1: '경상남도', add2: '고성군', bod1: 3218414.93, tn1: 68998046.12, tp1: 6545670.67, bod2: 23331.35, tn2: 41847.43, tp2: 4648.85},
				{add1: '경상남도', add2: '김해시', bod1: 8804922.44, tn1: 1127102.77, tp1: 117549.31, bod2: 48474.04, tn2: 55826.97, tp2: 4435.85},
				{add1: '경상남도', add2: '밀양시', bod1: 854335.7, tn1: 54134.96, tp1: 11455.65, bod2: 8736.92, tn2: 9885.4, tp2: 979.78},
				{add1: '경상남도', add2: '사천시', bod1: 1584759.91, tn1: 373998, tp1: 61705.22, bod2: 141426.39, tn2: 96250.87, tp2: 11024.73},
				{add1: '경상남도', add2: '산청군', bod1: 32627.74, tn1: 31150.88, tp1: 1910.13, bod2: 3649.14, tn2: 2408.37, tp2: 408.06},
				{add1: '경상남도', add2: '양산시', bod1: 24554912.19, tn1: 1893078.89, tp1: 571912, bod2: 114191.25, tn2: 162158.81, tp2: 19007.21},
				{add1: '경상남도', add2: '의령군', bod1: 2696274.16, tn1: 111247.32, tp1: 15097.89, bod2: 33021.49, tn2: 22418.35, tp2: 2012.54},
				{add1: '경상남도', add2: '진주시', bod1: 26173764.76, tn1: 1408411.58, tp1: 293507.88, bod2: 172832.36, tn2: 145692.98, tp2: 6257.48},
				{add1: '경상남도', add2: '창녕군', bod1: 2382129.98, tn1: 332590.68, tp1: 9699.6, bod2: 32940.55, tn2: 29840.61, tp2: 2083.8},
				{add1: '경상남도', add2: '창원시마산합포구', bod1: 268110.96, tn1: 43806.29, tp1: 4240.18, bod2: 49035.76, tn2: 126178.91, tp2: 8106.6},
				{add1: '경상남도', add2: '창원시마산회원구', bod1: 11243468.04, tn1: 143373764.47, tp1: 188662.38, bod2: 3873.86, tn2: 2466.74, tp2: 286.37},
				{add1: '경상남도', add2: '창원시성산구', bod1: 1162201.51, tn1: 1214104.24, tp1: 277283.06, bod2: 3115.4, tn2: 15755.89, tp2: 273.35},
				{add1: '경상남도', add2: '창원시의창구', bod1: 7266333.52, tn1: 467286.38, tp1: 108868.19, bod2: 4710.81, tn2: 7016.39, tp2: 1276.91},
				{add1: '경상남도', add2: '창원시진해구', bod1: 1563516.07, tn1: 538832.87, tp1: 142339.12, bod2: 19744.23, tn2: 14138.18, tp2: 481.97},
				{add1: '경상남도', add2: '통영시', bod1: 1340809.62, tn1: 189181.71, tp1: 30724.22, bod2: 12573.08, tn2: 21418.78, tp2: 1556.9},
				{add1: '경상남도', add2: '하동군', bod1: 229154.68, tn1: 135230.95, tp1: 7883.6, bod2: 48117.35, tn2: 104395.66, tp2: 5020.09},
				{add1: '경상남도', add2: '함안군', bod1: 35280728.82, tn1: 3099598.2, tp1: 281038.39, bod2: 51240.72, tn2: 54119.87, tp2: 5988.29},
				{add1: '경상남도', add2: '함양군', bod1: 649541.43, tn1: 68147.98, tp1: 25063.03, bod2: 18913.2, tn2: 6388.02, tp2: 2347.67},
				{add1: '경상남도', add2: '합천군', bod1: 33678.91, tn1: 24521.16, tp1: 2050.29, bod2: 8412.6, tn2: 6430.97, tp2: 613.04}
            ]
        }, cfg)]);
    }
});
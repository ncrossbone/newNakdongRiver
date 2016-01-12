Ext.define('MyApp.store.Data2', {
    extend: 'Ext.data.Store',
    
    requires: [
        'MyApp.model.Data2'
    ],
    
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        
        me.callParent([Ext.apply({
            storeId: 'Data2',
            model: 'MyApp.model.Data2',
            data: [
                {areaM: '남강', areaS: '남강하류', bod1: 3789.18, tn1: 11139.04, tp1: 640.21, bod2: 0, tn2: 9.57, tp2: 0.92},
				{areaM: '남강', areaS: '반성천', bod1: 80356.77, tn1: 13032.62, tp1: 3131.28, bod2: 1794.48, tn2: 1322.52, tp2: 43.82},
				{areaM: '남강', areaS: '반성천합류점', bod1: 261509, tn1: 24279.22, tp1: 2912.94, bod2: 75621.31, tn2: 117196.24, tp2: 2411.28},
				{areaM: '남강', areaS: '석교천', bod1: 663791.65, tn1: 1685663.19, tp1: 80273.27, bod2: 3802.05, tn2: 4183.41, tp2: 800.06},
				{areaM: '남강', areaS: '영천강', bod1: 53092.25, tn1: 9441.52, tp1: 730.31, bod2: 322.16, tn2: 760.55, tp2: 23.51},
				{areaM: '남강', areaS: '영천강합류점', bod1: 24889947.09, tn1: 1197144.63, tp1: 271106.4, bod2: 93908.34, tn2: 25710.9, tp2: 3612.57},
				{areaM: '남강', areaS: '의령천', bod1: 1828329.4, tn1: 43135.78, tp1: 1859.28, bod2: 15749.78, tn2: 6581.26, tp2: 822.26},
				{areaM: '남강', areaS: '정암수위표', bod1: 782668.81, tn1: 140190.94, tp1: 15516.74, bod2: 691.91, tn2: 501.41, tp2: 158.32},
				{areaM: '남강', areaS: '함안천', bod1: 3729928.03, tn1: 291689.41, tp1: 41560.3, bod2: 6658.86, tn2: 11258.42, tp2: 895.58},
				{areaM: '남강', areaS: '함안천합류점', bod1: 88477.88, tn1: 7255.76, tp1: 284.13, bod2: 0, tn2: 0, tp2: 0}
            ]
        }, cfg)]);
    }
});
Ext.define('MyApp.store.Data1', {
    extend: 'Ext.data.Store',
    
    requires: [
        'MyApp.model.Data1'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        
        me.callParent([Ext.apply({
            storeId: 'Data1',
            model: 'MyApp.model.Data1',
            data: [
                {name: '����1', areaM: '����', areaS: '��õ���շ���', bod: 0, cod: 0, tn: 0, tp: 0},
                {name: '����õ', areaM: '����', areaS: '��õ���շ���', bod: 2.1, cod: 1.9, tn: 2.6, tp: 4.3},
				{name: '����5', areaM: '����', areaS: '��õ���շ���', bod: 69.5, cod: 144.7, tn: 96.2, tp: 145.9},
				{name: '����D1', areaM: '����', areaS: '��õ��', bod: 0.8, cod: 1.5, tn: 3.2, tp: 1.4},
				{name: '��õ��', areaM: '����', areaS: '��õ��', bod: 0, cod: 0, tn: 0, tp: 0},
				{name: '��õ��', areaM: '����', areaS: '��õ��', bod: 21.7, cod: 35.9, tn: 40.7, tp: 29.4},
				{name: '����2', areaM: '����', areaS: '�ݼ�õ�շ���', bod: 0, cod: 0, tn: 0, tp: 0},
				{name: '���õ', areaM: '����', areaS: '�ݼ�õ�շ���', bod: 0.1, cod: 0.2, tn: 0.2, tp: 0.2},
				{name: '����õ', areaM: '����', areaS: '�ݼ�õ�շ���', bod: 2.3, cod: 1.4, tn: 1.1, tp: 3.8},
				{name: '����õ', areaM: '����', areaS: '�ݼ�õ�շ���', bod: 1.9, cod: 3.4, tn: 3, tp: 3.7},
				{name: '���õ', areaM: '����', areaS: '�ݼ�õ�շ���', bod: 1.3, cod: 2.2, tn: 1.4, tp: 1.7},
				{name: '����õ', areaM: '����', areaS: '�ݼ�õ�շ���', bod: 0.1, cod: 0.2, tn: 0.5, tp: 0.3},
				{name: '���õ2', areaM: '����', areaS: '�ݼ�õ�շ���', bod: 0.5, cod: 0.9, tn: 0.5, tp: 0.6}	
            ]
        }, cfg)]);
    }
});
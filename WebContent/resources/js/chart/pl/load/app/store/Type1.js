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
               	{ mw: "��ȭõ" , valueName: "�߻�����BOD��",  	value: 5465485.442 }, 
				{ mw: "��ȭõ" , valueName: "�߻�����TN��", 		value: 69554653.83 }, 
				{ mw: "��ȭõ" ,	valueName: "�߻�����TP��", 		value: 6621570.774 },
				{ mw: "��ȭõ" ,	valueName: "�������BOD��", 	value: 212578.7871 },
				{ mw: "��ȭõ" ,	valueName: "�������TN��", 		value: 253543.7905 },
				{ mw: "��ȭõ" ,	valueName: "�������TP��", 		value: 21322.28758 }
            ]
        }, cfg)]);
    }
});
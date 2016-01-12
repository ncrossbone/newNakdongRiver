Ext.define('chart.store.storeYear1', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelYear1'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelYear1',
            storeId: 'storeYear1',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wu/wuSewer_year1.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
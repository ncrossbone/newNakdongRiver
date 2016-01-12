Ext.define('chart.store.storeType1', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType1',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType1',
            storeId: 'storeType1',
            proxy: {
                type: 'ajax',
                url: '/nakdong/etf/etfStatus_chart1.json',
                reader: {
                    type: 'json',
                    root: 'result',
                }
            }
        }, cfg)]);
    }

});
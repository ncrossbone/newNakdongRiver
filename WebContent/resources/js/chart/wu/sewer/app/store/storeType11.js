Ext.define('chart.store.storeType11', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType11'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType11',
            storeId: 'storeType11',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wu/wuSewer_chart1.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
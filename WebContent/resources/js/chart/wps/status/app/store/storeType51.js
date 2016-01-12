Ext.define('chart.store.storeType51', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType51'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType51',
            storeId: 'storeType51',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wps/wpsStatus_chart51.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
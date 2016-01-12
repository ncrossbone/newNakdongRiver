Ext.define('chart.store.storeType32', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType32'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType32',
            storeId: 'storeType32',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wps/wpsStatus_chart32.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
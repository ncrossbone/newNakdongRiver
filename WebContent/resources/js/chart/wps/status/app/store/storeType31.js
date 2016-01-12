Ext.define('chart.store.storeType31', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType31'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType31',
            storeId: 'storeType31',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wps/wpsStatus_chart31.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
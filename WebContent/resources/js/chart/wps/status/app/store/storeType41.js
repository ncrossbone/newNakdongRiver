Ext.define('chart.store.storeType41', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType41'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType41',
            storeId: 'storeType41',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wps/wpsStatus_chart41.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
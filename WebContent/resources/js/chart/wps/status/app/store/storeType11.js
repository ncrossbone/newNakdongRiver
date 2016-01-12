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
                url: '/nakdong/wps/wpsStatus_chart11.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
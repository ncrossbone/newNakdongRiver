Ext.define('chart.store.storeType12', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType12'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType12',
            storeId: 'storeType12',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wps/wpsStatus_chart12.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
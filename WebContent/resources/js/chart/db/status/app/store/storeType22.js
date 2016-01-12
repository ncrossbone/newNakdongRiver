Ext.define('chart.store.storeType22', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType22'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType22',
            storeId: 'storeType22',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/dbStatus_chart22.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
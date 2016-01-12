Ext.define('chart.store.storeType13', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType13'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType13',
            storeId: 'storeType13',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/dbStatus_chart13.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
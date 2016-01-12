Ext.define('chart.store.storeType21', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType21'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType21',
            storeId: 'storeType21',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/dbStatus_chart21.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
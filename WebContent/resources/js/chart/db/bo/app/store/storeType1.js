Ext.define('chart.store.storeType1', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType1'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType1',
            storeId: 'storeType1',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/common_boInfo.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
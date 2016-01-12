Ext.define('chart.store.storeType3', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType3'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType3',
            storeId: 'storeType3',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/common_rainInfo.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
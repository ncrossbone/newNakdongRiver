Ext.define('chart.store.storeType2', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType2'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType2',
            storeId: 'storeType2',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/common_rainInfoChart2.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
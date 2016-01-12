Ext.define('chart.store.storeType4', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType4'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType4',
            storeId: 'storeType4',
            proxy: {
                type: 'ajax',
                url: '/nakdong/we/weStatus_chart2.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
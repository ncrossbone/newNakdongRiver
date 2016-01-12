Ext.define('chart.store.storeYear2', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelYear2'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelYear2',
            storeId: 'storeYear2',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wu/wuSewer_year2.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
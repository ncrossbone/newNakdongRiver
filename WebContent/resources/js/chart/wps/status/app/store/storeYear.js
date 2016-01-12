Ext.define('chart.store.storeYear', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelYear'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'chart.model.modelYear',
            storeId: 'storeYear',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wps/wpsStatus_year.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
Ext.define('chart.store.storeObs1', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelObs1'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelObs1',
            storeId: 'storeObs1',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/dbRiver_chart2_obs.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
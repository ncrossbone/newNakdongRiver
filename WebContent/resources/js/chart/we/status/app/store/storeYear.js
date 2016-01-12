Ext.define('chart.store.storeYear', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelYear'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelYear',
            storeId: 'storeYear',
			autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/nakdong/we/weStatus_year.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }

});
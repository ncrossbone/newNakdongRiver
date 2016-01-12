Ext.define('chart.store.storeType2', {
    extend: 'Ext.data.Store',

    requires: [
        'chart.model.modelType1'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'chart.model.modelType1',
            storeId: 'storeType2',
            proxy: {
                type: 'ajax',
                url: '/nakdong/db/dbLand_chart1.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
//        	,
//			listeners: {
//				'load': function(me, records, successful, eo) {
//					for(var i in records) {
//						var tr = records[i];
//						
//						if(tr.data['ITEM'] == 'DRY') records[i].data['ITEM'] = '시가화/건조지역';
//						else if(tr.data['ITEM'] == 'RIC') records[i].data['ITEM'] = '논';
//						else if(tr.data['ITEM'] == 'FLD') records[i].data['ITEM'] = '밭';
//						else if(tr.data['ITEM'] == 'FRST') records[i].data['ITEM'] = '산림';
//						else if(tr.data['ITEM'] == 'MDW') records[i].data['ITEM'] = '초지';
//						else if(tr.data['ITEM'] == 'SWMP') records[i].data['ITEM'] = '습지';
//						else if(tr.data['ITEM'] == 'VCT') records[i].data['ITEM'] = '나지';
//						else if(tr.data['ITEM'] == 'WZN') records[i].data['ITEM'] = '수역';
//					}
//				}
//			}
        }, cfg)]);
    }

});
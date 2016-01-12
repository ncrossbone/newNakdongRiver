Ext.define('chart.model.modelType1', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'RSRH_YR',
            type: 'string'
        },
        {
            name: 'LFT_AMT',
            type: 'float'
        },
        {
            name: 'IDS_AMT',
            type: 'float'
        },
        {
            name: 'AGR_AMT',
            type: 'float'
        }
    ]
});
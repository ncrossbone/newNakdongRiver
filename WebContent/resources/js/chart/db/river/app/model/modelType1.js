Ext.define('chart.model.modelType1', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'RSRH_YR',
            type: 'string'
        },
        {
            name: 'MAX_AMT',
            type: 'float'
        },
        {
            name: 'AVG_AMT',
            type: 'float'
        },
        {
            name: 'SAV_AMT',
            type: 'float'
        },
        {
            name: 'DRY_AMT',
            type: 'float'
        }
    ]
});
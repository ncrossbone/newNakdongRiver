Ext.define('chart.model.modelType1', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'YEAR',
            type: 'string'
        },
        {
            name: 'RF_AVG',
            type: 'float'
        },
        {
            name: 'RF_MAX',
            type: 'float'
        },
        {
            name: 'RF_MIN',
            type: 'float'
        }
    ]
});
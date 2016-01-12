Ext.define('chart.model.modelType1', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'YEAR',
            type: 'string'
        },
        {
            name: 'RN_DAY_AVG',
            type: 'float'
        },
        {
            name: 'RN_DAY_MAX',
            type: 'float'
        },
        {
            name: 'RN_DAY_MIN',
            type: 'float'
        }
    ]
});
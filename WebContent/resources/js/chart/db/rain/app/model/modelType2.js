Ext.define('chart.model.modelType2', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'RFOBSCD',
            type: 'string'
        },
        {
            name: 'YEAR',
            type: 'string'
        },
        {
            name: 'MONTH',
            type: 'string'
        },
        {
            name: 'RF',
            type: 'float'
        }
    ]
});
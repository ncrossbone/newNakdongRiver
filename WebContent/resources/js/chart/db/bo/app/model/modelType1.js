Ext.define('chart.model.modelType1', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'MONTH',
            type: 'string'
        },
        {
            name: 'SWL',
            type: 'float'
        },
        {
            name: 'OWL',
            type: 'float'
        },
        {
            name: 'INF',
            type: 'float'
        },
        {
            name: 'OTF',
            type: 'float'
        }
    ]
});
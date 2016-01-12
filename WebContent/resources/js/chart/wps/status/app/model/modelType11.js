Ext.define('chart.model.modelType11', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'YEAR',
            type: 'float'
        },
        {
            name: 'AM_NM',
            type: 'string'
        },
        {
            name: 'TREATED',
            type: 'float'
        },
        {
            name: 'RAWED',
            type: 'float'
        }
    ]
});
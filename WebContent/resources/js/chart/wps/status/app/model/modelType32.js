Ext.define('chart.model.modelType32', {
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
            name: 'DO_NM',
            type: 'string'
        },
        {
            name: 'CTY_NM',
            type: 'string'
        },
        {
            name: 'WORK_SIZE',
            type: 'string'
        },
        {
            name: 'WW_AMT',
            type: 'float'
        }
    ]
});
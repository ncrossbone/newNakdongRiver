Ext.define('chart.model.modelType12', {
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
            name: 'GUBUN2',
            type: 'string'
        },
        {
            name: 'GUBUN3',
            type: 'string'
        },
        {
            name: 'USEWATER',
            type: 'long'
        }
    ]
});
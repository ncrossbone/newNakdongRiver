Ext.define('chart.model.modelType1', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'PT_NO',
            type: 'string'
        },
        {
            name: 'PT_NM',
            type: 'string'
        },
        {
            name: 'WMWK',
            type: 'string'
        },
        {
            name: 'WMYR',
            type: 'string'
        },
        {
            name: 'WMOD',
            type: 'string'
        },
        {
            name: 'ITEM_BOD',
            type: 'float'
        },
        {
            name: 'GRADE_KOR',
            type: 'string'
        },
        {
            name: 'GRADE',
            type: 'string'
        }
    ]
});
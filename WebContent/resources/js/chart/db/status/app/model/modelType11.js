Ext.define('chart.model.modelType11', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'MBAS_NM',
            type: 'string'
        },
        {
            name: 'SBAS_NM',
            type: 'string'
        },
        {
            name: 'WAREA_EXT',
            type: 'float'
        }
    ]
});
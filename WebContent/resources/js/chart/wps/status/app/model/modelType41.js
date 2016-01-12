Ext.define('chart.model.modelType41', {
    extend: 'Ext.data.Model',

    fields: [
		{name: 'YEAR', type: 'float'},
		{name: 'AM_NM', type: 'string'},
		{name: 'DO_NM', type: 'string'},
		{name: 'CTY_NM', type: 'string'},
		{name: 'CD_NM1', type: 'string'},
		{name: 'TREAT_METHOD', type: 'string'},
		{name: 'LICEN_AREA', type: 'float'},
		{name: 'FACIL_AREA', type: 'float'}
    ]
});
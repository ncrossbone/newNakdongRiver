Ext.define('MyApp.model.Data2', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'areaM', 	type: 'string'},
        {name: 'areaS', 		type: 'string'},
		{name: 'bod1', 		type: 'float'},
		{name: 'tn1', 		type: 'float'},
		{name: 'tp1', 		type: 'float'},
		{name: 'bod2', 		type: 'float'},
		{name: 'tn2', 		type: 'float'},
		{name: 'tp2', 		type: 'float'}
    ]
});
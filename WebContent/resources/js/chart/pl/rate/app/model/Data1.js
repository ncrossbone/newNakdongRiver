Ext.define('MyApp.model.Data1', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'name', 	type: 'string'},
        {name: 'areaM', 	type: 'string'},
        {name: 'areaS', 		type: 'string'},
		{name:'bod', 		type: 'float'},
		{name:'cod', 		type: 'float'},
		{name:'tn', 			type: 'float'},
		{name:'tp', 			type: 'float'}
    ]
});
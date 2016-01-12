Ext.define('chart.model.modelType1', {
    extend: 'Ext.data.Model',
	idProperty: 'modelType1',
	fields: [
         {
             name: 'FACI_NM',
             type: 'string'
         },
         {
             name: 'ADDR',
             type: 'string'
         },
         {
             name: 'FACI_AMT',
             type: 'string'
         },
        /* {
             name: 'TRT_METHOD_PRE',
             type: 'string'
         },
         */{
             name: 'OPR_ORG',
             type: 'string'
         }/*,
         {
             name: 'TRT_METHOD_1',
             type: 'string'
         },
         {
             name: 'TRT_METHOD_2',
             type: 'string'
         },
         {
             name: 'TRT_METHOD_3',
             type: 'string'
         },
         {
             name: 'START_DD',
             type: 'string'
         }*/
     ]
});
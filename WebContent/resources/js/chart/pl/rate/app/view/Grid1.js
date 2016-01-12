Ext.define('MyApp.view.Grid1', {
    extend: 'Ext.grid.Panel',

    id: 'Grid1',
    xtype: 'Grid1',
    width: 800,
    height: 200,
    store: 'MyApp.store.Data1',

	columns: [
          {
        	  dataIndex: 'name',
        	  header: '관측소',
        	  flex: 1
          },
          {
        	  dataIndex: 'areaM',
        	  header: '중권역',
        	  flex: 1
          },
          {
        	  dataIndex: 'areaS',
        	  header: '소권역',
        	  flex: 1
          },
          {
        	  dataIndex: 'bod',
        	  header: 'BOD기여율(%)',
        	  flex: 1,
        	  align: 'right',
        	  renderer: function(val, p, record) {
    			  return setValue(val, "blue");
        	  }
          },
          {
        	  dataIndex: 'cod',
        	  header: 'COD 기여율(%)',
        	  flex: 1,
        	  align: 'right',
        	  renderer: function(val, p, record) {
    			  return setValue(val, "green");
        	  }
          },
          {
        	  dataIndex: 'tn',
        	  header: 'T-N 기여율(%)',
        	  flex: 1,
        	  align: 'right',
        	  renderer: function(val, p, record) {
    			  return setValue(val, "red");
        	  }
          },
          {
        	  dataIndex: 'tp',
        	  header: 'T-P 기여율(%)',
        	  flex: 1,
        	  align: 'right',
        	  renderer: function(val, p, record) {
    			  return setValue(val, "orange");
        	  }
          }
      ],
	  
	tbar: [
		{
			text: '인쇄',
			iconCls: 'print',
			handler: function() {
				var grid = Ext.getCmp('Grid1');
				Ext.ux.GridPrinter.print(grid);
			}	
		},
		{
			text: '저장',
			iconCls: 'save', 
			handler: function() {
			}	
		}
	],
			  
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	columns: [
    	          {
    	        	  xtype: 'gridcolumn',
    	        	  dataIndex: 'name'
    	          },
    	          {
    	        	  xtype: 'gridcolumn',
    	        	  dataIndex: 'areaM'
    	          },
    	          {
    	        	  xtype: 'gridcolumn',
    	        	  dataIndex: 'areaS'
    	          },
    	          {
    	        	  xtype: 'gridcolumn',
    	        	  dataIndex: 'bod'
    	          },
    	          {
    	        	  xtype: 'gridcolumn',
    	        	  dataIndex: 'cod'
    	          },
    	          {
    	        	  xtype: 'gridcolumn',
    	        	  dataIndex: 'tn'
    	          },
    	          {
    	        	  xtype: 'gridcolumn',
    	        	  dataIndex: 'tp'
    	          }
	          ]
        });

        me.callParent(arguments);
    }

});

function setValue(val, color) {
	  if(val == '0' || val == '') {
		  return "<div style='color:" + color + "'>" + val + "</div>";
	  }
	  
	  val += '';
	  
	  while((/(-?[0-9]+)([0-9]{3})/).test(val)) {
		  val = val.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
	  }
	  
	  return "<div style='color:" + color + "'>" + val + "</div>";
}

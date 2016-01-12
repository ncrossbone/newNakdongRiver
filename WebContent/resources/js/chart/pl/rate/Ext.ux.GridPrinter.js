/**
 * @class GetIt.GridPrinter
 * @author Ed Spencer (edward@domine.co.uk)
 * Helper class to easily print the contents of a grid. Will open a new window with a table where the first row
 * contains the headings from your column model, and with a row for each item in your grid's store. When formatted
 * with appropriate CSS it should look very similar to a default grid. If renderers are specified in your column
 * model, they will be used in creating the table. Override headerTpl and bodyTpl to change how the markup is generated
 * 
 * Usage:
 * 
 * var grid = new Ext.grid.GridPanel({
 *   colModel: //some column model,
 *   store   : //some store
 * });
 * 
 * Ext.ux.GridPrinter.print(grid);
 * 
 */
Ext.ux.GridPrinter = {
  /**
   * Prints the passed grid. Reflects on the grid's column model to build a table, and fills it using the store
   * @param {Ext.grid.GridPanel} grid The grid to print
   */
  print: function(grid) {
    //We generate an XTemplate here by using 2 intermediary XTemplates - one to create the header,
    //the other to create the body (see the escaped {} below)
	var columns = grid.columns;
    
    //build a useable array of store data for the XTemplate
    var data = [];
    grid.store.data.each(function(item) {
      var convertedData = [];

      //apply renderers from column model
      for (var key in item.data) {
        var value = item.data[key];
        
        Ext.each(columns, function(column) {
          if (column.dataIndex == key) {
            convertedData[key] = column.renderer ? column.renderer(value) : value;
          }
        }, this);
      }
      
      data.push(convertedData);
    });
    
    //use the headerTpl and bodyTpl XTemplates to create the main XTemplate below
    var headings = Ext.ux.GridPrinter.headerTpl.apply(columns);
    var body     = Ext.ux.GridPrinter.bodyTpl.apply(columns);
    
    var html = new Ext.XTemplate(
      '<html>',
        '<head>',
          '<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />',
		  '<meta http-equiv="X-UA-Compatible" content="IE=6"/>',
          '<link href="' + Ext.ux.GridPrinter.stylesheetPath + '" rel="stylesheet" type="text/css" />',
		  '<script type="text/javascript" src="/js/lib/jquery-1.7.2.js"></script>',
		  '<script type="text/javascript" src="/js/lib/jquery.printElement.js"></script>',
		  '<script type="text/javascript" src="/chart/print.js"></script>',
          '<title>�μ�</title>',
        '</head>',
        '<body>',
          '<div class="content"><table>',
            headings,
            '<tpl for=".">',
              body,
            '</tpl>',
          '</table></div>',
		  '<div class="button">',
		  '	<input type="button" value="�μ�" class="print" onclick="myPrint();">',
		  '	<input type="button" value="�ݱ�" class="close" onclick="self.close();">',
		  '</div>',
        '</body>',
      '</html>'
    ).apply(data);
    
    //open up a new printing window, write to it, print it and close
    var win = window.open('', 'printgrid');
    
    win.document.open();
    win.document.write(html);
    
//    win.print();
//    win.close();
  },
  
  /**
   * @property stylesheetPath
   * @type String
   * The path at which the print stylesheet can be found (defaults to '/stylesheets/print.css')
   */
  stylesheetPath: '/chart/print.css',
  
  /**
   * @property headerTpl
   * @type Ext.XTemplate
   * The XTemplate used to create the headings row. By default this just uses <th> elements, override to provide your own
   */
  headerTpl:  new Ext.XTemplate(
    '<tr>',
      '<tpl for=".">',
        '<th>{text}</th>',
      '</tpl>',
    '</tr>'
  ),
   
   /**
    * @property bodyTpl
    * @type Ext.XTemplate
    * The XTemplate used to create each row. This is used inside the 'print' function to build another XTemplate, to which the data
    * are then applied (see the escaped dataIndex attribute here - this ends up as "{dataIndex}")
    */
  bodyTpl:  new Ext.XTemplate(
    '<tr>',
      '<tpl for=".">',
        '<td>\{{dataIndex}\}</td>',
      '</tpl>',
    '</tr>'
  )
};
Ext.define('chart.view.viewTab1', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab1',
	xtype: 'viewTab1',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
					border: false,
					listeners: {
						render: function(me, op) {
							var request = new Request();
							var ptno = request.getParameter('ptno');
							
							var where = encodeURIComponent("측정소코드=", "UTF-8") + '%27' + encodeURIComponent(ptno, "UTF-8") + '%27';
							var url = mapUrl + '/arcgis/rest/services/ndk4/MapServer/1/query?text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&f=pjson&where=' + where;

							$.ajax({
								url: url
								, dataType: 'jsonp'
								, success: function(d) {
									var html;
									
									if(d.features.length == 0) {
										html = "<div id='noInfo'></div>";
									} else {
										var data = d.features[0].attributes;
										html = "<table border='0' cellpadding='0' cellspacing='0' class='info'>";
										
										for(var i in data) {
											if(data[i] != "" && data[i] != null && data[i] != " ") {
												html += "<tr>"
															+ "	<td class='title'>" + i + "</td>"
														  	+ "	<td class='content'>" + data[i] + "</td>"
															+ "</tr>"
											}
										}
										
										html += "</table>";
										
									}
									
									me.update(html);
								}
							});
						}
					}
                }
            ]
        });

        me.callParent(arguments);
    }
});
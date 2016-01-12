Ext.define('chart.view.viewTab3', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab3',
	xtype: 'viewTab3',
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
							
							var where = "?ptno=" + ptno;
							var url = 'http://localhost:8080/we/weStatus_movie.json' + where;
							
							$.ajax({
								url: url
								, dataType: 'json'
								, success: function(d) {
									var result = d.result;
									var html = "<div class='video'>"
												+ "	<div id='videoObj'>";
												
									if(result.length == 0) {
										html += "<div id='noMovie'></div>";
									} else {
										html += "<object " +
									                    "	id='MovieObject'" +
									                    "	classid='CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95'" +
									                    "	codebase='http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715'" +
									                    "	width=478 height=450" +
									                    "	type='application/x-oleobject'>" +
									                    "	<param name='filename' value='http://211.114.21.28:8080/movie/" + result[0]['MOVIE'] + "'>" +
									                    "	<param name='transparentatstart' value='false'>" +
									                    "	<param name='autostart' value='false'>" +
									                    "	<param name='animationatstart' value='true'>" +
									                    "	<param name='showcontrols' value='true'>" +
									                    "	<param name='showpositioncontrols' value='false'>" +
									                    "	<param name='showstatusbar' value='true'>" +
									                    "	<param name='autosize' value='false'>" +
									                    "	<param name='displaysize' value='0'>" +
									                    "	<embed type='application/x-mplayer2'" +
									                    "		pluginspage='http://www.microsoft.com/isapi/redir.dll?prd=windows&sbp=mediaplayer&ar=Media&sba=Plugin&'" +
									                    "		src='http://211.114.21.28:8080/movie/" + result[0]['MOVIE'] + "' name=mediaplayer autostart=0 width=478" +
									                    "		height=450 transparentatstart=0 animationatstart=1 showcontrols=1" +
									                    "		showpositioncontrols=0 showstatusbar=1 autosize=0 displaysize=0></embed>" +
									                    "</object>";
									}
									
									html += "</div>"
											+ "	<div class='msg'>"
											+ "	</div>"
											+ "</div>";
											
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
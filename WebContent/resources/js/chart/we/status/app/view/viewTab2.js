Ext.define('chart.view.viewTab2', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab2',
	xtype: 'viewTab2',
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
							var url = 'http://localhost:8080/we/weStatus_photo.json' + where;
							
							$.ajax({
								url: url
								, dataType: 'json'
								, success: function(d) {
									var result = d.result;
									var html;
									var imgHtml;
									var onMouseOutOpacity = 0.67;
									
									html = "<div class='photo'>"
											+ "	<div id='controls'></div>"
											+ "	<div id='slideshow'></div>"
											+ "	<div id='caption'></div>"
											+ "	<div id='thumbs'>"
											+ "		<ul class='thumbs noscript'>";
									
									if(result.length == 0) {
										html += "<li>"
													  + "	<a class='thumb' name='optionalCustomIdentifier' href='/nakdong/resources/images/chart/noimages.jpg' title='해당 지점사진이 없습니다'>"
													  + "		<img src='/nakdong/resources/images/chart/noimages.jpg' alt='해당 지점사진이 없습니다' />"
													  + "	</a>"
													  + "	<div class='caption'>해당 지점사진이 없습니다</div>"
													  + "</li>";
									} else {
										for(var i in result) {
											var photo = result[i]['PHOTO'];
											var filename = photo.split("_");
											var caption = "";
											
											for(var i = 1; i < filename.length; i++) {
												if(i < (filename.legnth-1))
													caption += filename[i] + " ";
												else {
													caption += filename[i].split(".")[0] + " ";
												}
											}
											
											html += "<li>"
														  + "	<a class='thumb' name='optionalCustomIdentifier' href='http://211.114.21.28:8080/images/photo/water/" + photo + "' title=''>"
														  + "		<img src='http://211.114.21.28:8080/images/photo/water/" + photo + "' alt='' />"
														  + "	</a>"
														  + "	<div class='caption'>" + caption + "</div>"
														  + "</li>";
										}
									}
									
									html += "		</ul>"
											+ "	</div>"
											+ "</div>";
									
									me.update(html);
									
									$('#thumbs ul.thumbs li').opacityrollover({
								        mouseOutOpacity: onMouseOutOpacity,
								        mouseOverOpacity: 1.0,
								        fadeSpeed: 'fast',
								        exemptionSelector: '.selected'
								    });
							
								    var gallery = $('#thumbs').galleriffic({
								        delay: 2500,
								        numThumbs: 7,
								        preloadAhead: 10,
								        enableTopPager: true,
								        enableBottomPager: true,
								        maxPagesToShow: 10,
								        imageContainerSel: '#slideshow',
								        controlsContainerSel: '#controls',
								        captionContainerSel: '#caption',
								        renderSSControls: true,
								        renderNavControls: true,
								        playLinkText: "<img src='/nakdong/resources/images/chart/button_play.png'>",
								        pauseLinkText: "<img src='/nakdong/resources/images/chart/button_stop.png'>",
								        prevLinkText: "<img src='/nakdong/resources/images/chart/button_prev.png'>",
								        nextLinkText: "<img src='/nakdong/resources/images/chart/button_next.png'>",
								        nextPageLinkText: "<img src='/nakdong/resources/images/chart/button_nextPage.png'>",
								        prevPageLinkText: "<img src='/nakdong/resources/images/chart/button_prevPage.png'>",
								        enableHistory: false,
								        autoStart: false,
								        syncTransitions: true,
								        defaultTransitionDuration: 900,
								        onSlideChange: function(prevIndex, nextIndex) {
								            this.find('ul.thumbs').children()
											        .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
											        .eq(nextIndex).fadeTo('fast', 1.0);
								        },
								        onPageTransitionOut: function(callback) {
								            this.fadeTo('fast', 0.0, callback);
								        },
								        onPageTransitionIn: function() {
								            this.fadeTo('fast', 1.0);
								        }
								    });
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
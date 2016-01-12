function dbAdminView() {
	var $dialog_min_list = $("div[id*='Min']");
	var $dialog_max_list = $("div[id*='Max']");
	
	var dialog_info = {};
	
	// start
	this.init = function() {
		dialog_info = {
			'search': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 300
				, maxHeight: 200
			}
			, 'toc': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 300
				, maxHeight: 284
			}
			, 'legend': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 300
				, maxHeight: 250
			}
		};
		
		setDialogMin();
		setDialogMax();
		
		setSearch();
		setToc();
		
		setMeasurement();
	};
}

function MM_swapImgRestore() { //v3.0
	  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
	}
	
	function MM_preloadImages() { //v3.0
	  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}
	
	function MM_findObj(n, d) { //v4.01
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	  if(!x && d.getElementById) x=d.getElementById(n); return x;
	}
	
	function MM_swapImage() { //v3.0
	  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
	}


	// dialog min button 설정: 검색, 주제도, 범례
	function setDialogMin() {
		$dialog_min_list.draggable();
		
		$dialog_min_list.bind({
			click: function(evt) {
				var target = evt.currentTarget;
				var type = target.id.replace('Min', '');
				var count = dialog_info[type].minCount;
				
				var $min =  $(target);
				var $max = $("#" + type + "Max");
				
				$min.css({
					display: 'none'
				});
				
				if (count == 0) {
					$max.dialog("option", "position", [parseInt($min.css("left")), parseInt($min.css("top")) + 55]);
				} else {
					$max.dialog("option", "position", [parseInt($min.css("left")), parseInt($min.css("top"))]);
				}

				dialog_info[type].minCount = count + 1;
				
				$max.dialog("open");
			}
		});
	};
	
	// dialog max 설정: 검색, 주제도, 범례
	function setDialogMax() {
		$dialog_max_list.each(function(i, obj) {
			var $now = $(obj);
			var type = obj.id.replace('Max', '');
			
			$now.dialog({
				autoOpen: false
				, closeOnEscape: false
				, dialogClass: "mapDialog"
				, width: dialog_info[type].maxWidth
				, height: dialog_info[type].maxHeight
				, maxWidth: dialog_info[type].maxWidth
				, maxHeight: dialog_info[type].maxHeight
				, resizable: false
				, create: function(evt, ui) {
					var $content = $(evt.target);
					var $dialog = $content.parent();
					
					var type = evt.target.id.replace('Max', '');
					var $min = $("#" + type + "Min");
					var $max = $("#" + type + "Max");
					
					// title: title image, min button
					var title = "<div class='title'><img src='/nakdong/resources/images/map/" + type + "_max_title.png' /></div>"
								+ "<div class='btn'><img src='/nakdong/resources/images/map/dialog_title_btn_min.png' class='min' /></div>";
					
					$dialog.find(".ui-dialog-title").empty();
					$dialog.find(".ui-dialog-title").append(title);
					
					// min button click event
					$dialog.find(".ui-dialog-title .btn .min").bind({
						click: function() {
							$max.dialog("close");
							
							$min.css({
								display: 'block'
								, left: $now.dialog("option", "position")[0] + 'px'
								, top: $now.dialog("option", "position")[1] + 'px'
							});
						}
					});
				}
			});
		});
	};
	

function ajaxTest(){
	var L_CODE = document.getElementById("L_CODE").value;
				var M_CODE = num;
				$.ajax({
							url: '/nakdong/db/common_code.json'
							, data:{"M_CODE":M_CODE,"L_CODE":L_CODE}
							, dataType: 'json'
							, success: function(d) {
							
							}
				});

}

	// 검색 설정
	function setSearch() {
		
		var $search_M_CODE = $("#search_M_CODE");
		var $search_year1 = $("#search_year1");
		var $search_month1 = $("#search_month1");
		var $L_CODE = $("#L_CODE");
		
		
		var $search_btn_search = $("#search_btn_search");
			
		
		// 검색하기 버튼
		$search_btn_search.bind({
			click: function() {
				var mwv = $search_type_mw.find("option:selected").val();
				var sidov = $search_type_sido.find("option:selected").val();
				
				// 검색 조건 체크
				if(mwv == "none" && sidov == "none") {
					alert("중권역이나 시도를 선택하시기 바랍니다.");
					return;
				}
				
				// 차트, 테이블 관련 결과
				popup("/nakdong//resources/images/chart/db_status_chart.gif", 700, 700);
			}
		});
		
		// 초기화 버튼
		$search_btn_clear.bind({
			click: function() {
				
				// 검색 조건
				$("input[name='searchGroup'][value='1']").trigger("click");
				
				$search_type_mw.find("option:first").attr("selected", "selected");
				$search_type_sw.find("option:first").attr("selected", "selected");
				$search_type_sido.find("option:first").attr("selected", "selected");
				$search_type_sgg.find("option:first").attr("selected", "selected");
				
				$search_type_sw.find("option[value!='none']").remove();
				$search_type_sgg.find("option[value!='none']").remove();
			
				$search_type_mw.attr("disabled", false);
				$search_type_sw.attr("disabled", false);
				$search_type_sido.attr("disabled", true);
				$search_type_sgg.attr("disabled", true);

			}
		});
	};
	
	// 범례 설정
	function setLegend(url) {
		$.ajax({
			url: url + '?f=pjson'
			, dataType: 'jsonp'
			, success: function(d) {
				drawLegend(d, url);
			}
		});
	};
	
	function drawLegend(d, url) {
		var $div = $("#legendTreeview");
		var ul = "<ul class='treeview'></ul>";
		
		$div.empty();
		$div.append(ul);
				
		var $dialog = $div.parent();
		var $treeview = $div.find('.treeview');
		
		var html = "<li id='legend" + d.id + "'>"
					 + "	<span>" + d.name + "</span>"
					 + "	<ul>";
		
		var renderer = d.drawingInfo.renderer;
			
		if(renderer.type == "classBreaks") {
			var classBreakInfos = renderer.classBreakInfos;
			
			for (var i in classBreakInfos) {
				html += "<li>"
				  + "	<div class='legend_img'><img src='" + url + "/images/" + classBreakInfos[i].symbol.url + "' /></div>"
				  + "	<div class='legend_name'>" + classBreakInfos[i].label + "</div>"
				  + "</li>";
			}
		} else if(renderer.type == "simple") {
			if($dialog.dialog("isOpen")) {
				$dialog.dialog("close");
			}
			
			return;
		}
		
		$treeview.append(html);
		$treeview.treeview();
		
		if(!$dialog.dialog("isOpen")) {
			$("#legendMin").trigger("click");
		}
	};
	
	// 주제도 설정
	function setToc() {
		var $slider = $("#tocOpacitySlider");
		var $slider_bar = $slider.find('.bar');
		var $slider_value = $slider.find('.value');
		
		var $tocInfoBtn = $("#tocInfoBtn");
		
		var $tocAllCheck = $("#tocAllCheck");
		
		// 투명도 설정
		$slider_bar.slider({
			min: 0
			, max: 100
			, value: 100
			, change: function(evt, ui) {
				$slider_value.text($slider_bar.slider("value") + "%");
			}, create: function(evt, ui) {
				$slider_value.text($slider_bar.slider("value") + "%");
			}
		});
		
		// 전체선택 설정
		$tocAllCheck.bind({
			click: function(evt) {
				var $now = $(evt.currentTarget);
				
				var $check = $now.find('.icon_check');
				var $remove = $now.find('.icon_remove');
				
				if($now.attr("title") == "전체선택") {
					$check.css("display", "none");
					$remove.css("display", "block");
					$now.attr("title", "전체해제");
				} else {
					$check.css("display", "block");
					$remove.css("display", "none");
					$now.attr("title", "전체선택");
				}
			}	
		});
	};
	
	// 측정 dialog
	function setMeasurement() {
		var $div = $("#measurementDiv");
		
		$div.dialog({
			autoOpen: false
			, closeOnEscape: false
			, width: 250
			, height: 130
			, resizable: false
			, position: "right-40 top+65"
			, create: function(evt, ui) {
				var $content = $(evt.target);
				var $dialog = $content.parent();
				
				// title: title image, close button
				var title = "<div class='title'><img src='/nakdong/resources/images/map/measurement_title.png' /></div>"
							+ "<div class='btn'><img src='/nakdong/resources/images/map/dialog_title_btn_close.png' class='close' /></div>";
				
				$dialog.find(".ui-dialog-title").empty();
				$dialog.find(".ui-dialog-title").append(title);
				
				// close button click event
				$dialog.find(".ui-dialog-title .btn .close").bind({
					click: function() {
						$div.dialog("close");
					}
				});
			}
		});
	};
//}


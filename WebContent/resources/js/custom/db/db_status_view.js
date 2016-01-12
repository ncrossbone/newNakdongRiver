function dbStatusView() {
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
	
	// 검색 설정
	function setSearch() {
		var $searchGroup = $("input[name='searchGroup']");
		
		var $search_type_mw = $("#search_type_mw");
		var $search_type_sw = $("#search_type_sw");
		var $search_type_sido = $("#search_type_sido");
		var $search_type_sgg = $("#search_type_sgg");
		
		var $search_btn_search = $("#search_btn_search");
		var $search_btn_clear = $("#search_btn_clear");
		
		// 그룹 선택
		$searchGroup.ready(function() {
			$("input[name='searchGroup'][value='1']").trigger("click");
			
				$search_type_mw.attr("disabled", false);
				$search_type_sw.attr("disabled", false);
				
				$search_type_sido.attr("disabled", true);
				$search_type_sgg.attr("disabled", true);
		});
		
		$searchGroup.bind("change", function() {
			var tv = $("input[name='searchGroup']:checked").val();
			
			if(tv == "1") {
				$search_type_mw.attr("disabled", false);
				$search_type_sw.attr("disabled", false);
				
				$search_type_sido.attr("disabled", true);
				$search_type_sgg.attr("disabled", true);
			} else {
				$search_type_mw.attr("disabled", true);
				$search_type_sw.attr("disabled", true);
				
				$search_type_sido.attr("disabled", false);
				$search_type_sgg.attr("disabled", false);
			}
		});
		
		// 중권역 리스트 
		$search_type_mw.ready(function() {
			drawComboBox('/nakdong/db/common_mw.json', $search_type_mw, '중권역');
		});
		
		$search_type_mw.bind({
			change: function() {
				var mw = $search_type_mw.find("option:selected").val();
				
				drawComboBox('/nakdong/db/common_sw.json?mw=' + mw, $search_type_sw, '소권역');
			}
		});
		
		// 시도 리스트 
		$search_type_sido.ready(function() {
			drawComboBox('/nakdong/db/common_sido.json', $search_type_sido, '시도');
		});
		
		$search_type_sido.bind({
			change: function() {
				var sido = $search_type_sido.find("option:selected").val();
				
				drawComboBox('/nakdong/db/common_sgg.json?sido=' + sido, $search_type_sgg, '시군구');
			}
		});
		
		// 검색하기 버튼
		$search_btn_search.bind({
			click: function() {
				var mwv = $search_type_mw.find("option:selected").val();
				var swv = $search_type_sw.find("option:selected").val();
				var sidov = $search_type_sido.find("option:selected").val();
				var sggv = $search_type_sgg.find("option:selected").val();
				
				var groupv = $("input[name='searchGroup']:checked").val();
				groupv = parseInt(groupv);
				
				// 검색 조건 체크
				if (groupv == 1) {
					if (mwv == "none") {
						alert("중권역을 선택하시기 바랍니다.");
						return;
					}
				}
				else if (groupv == 2) {
					if (sidov == "none") {
						alert("시도를 선택하시기 바랍니다.");
						return;
					} 
					
					if (sggv == "none") {
						alert("시군구를 선택하시기 바랍니다.");
						return;
					}
				}

				
				// 해당 권역, 행정구역으로 map 이동
				if(groupv == 1) {
					// 소권역 이동
					if(swv != "none") {
						pageMap.moveForSearch('소권역', 7, swv);
					} 
					
					// 중권역 이동
					else {
						pageMap.moveForSearch('중권역', 9, mwv);
					}
				} else if(groupv == 2) {
					// 시군구 이동
					if(sggv != "none") {
						pageMap.moveForSearch('시군구', 22, sggv);
					} 
					
					// 시도 이동
					else {
						pageMap.moveForSearch('시도', 24, sidov);
					}
				}
				
				// 차트, 테이블 관련 결과
				if (groupv == 1) {
					popup("/nakdong/chartDbStatus1.do?mw=" + mwv + "&sw=" + swv, 602, 602, false);
				} else if(groupv == 2) {
					popup("/nakdong/chartDbStatus3.do?sgg=" + sggv, 602, 602, false);					
				}
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
				
				// 범례
//				var $legendDiv = $("#legendTreeview");
//				var $legendDialog = $legendDiv.parent();
//				
//				$legendDiv.empty();
//				
//				if($legendDialog.dialog("isOpen")) {
//					$legendDialog.parent().find(".ui-dialog-title .btn .min").trigger("click");
//				}
			}
		});
	};
	
	/* khLee 주석 20150427
	this.mapToChart = function(obj) {
		var layer = obj.layer;
		var data = obj.data;
		
		switch(layer) {
			case '중권역':
				alert(data);
				popup("/nakdong/chartDbStatus1.do?mw=" + data.MW_CODE + "&sw=", 602, 602, false);
				break;
//			case '시군구':
//					popup("/nakdong//chartDbStatus2.do?sgg=" + data['법정동코드'].substr(0, 4), 602, 602, false);				
//				break;
		}
	};
	*/
	
	// 범례 설정
//	function setLegend(url) {
//		$.ajax({
//			url: url + '?f=pjson'
//			, dataType: 'jsonp'
//			, success: function(d) {
//				drawLegend(d, url);
//			}
//		});
//	};
//	
//	function drawLegend(d, url) {
//		var $div = $("#legendTreeview");
//		var ul = "<ul class='treeview'></ul>";
//		
//		$div.empty();
//		$div.append(ul);
//				
//		var $dialog = $div.parent();
//		var $treeview = $div.find('.treeview');
//		
//		var html = "<li id='legend" + d.id + "'>"
//					 + "	<span>" + d.name + "</span>"
//					 + "	<ul>";
//		
//		var renderer = d.drawingInfo.renderer;
//			
//		if(renderer.type == "classBreaks") {
//			var classBreakInfos = renderer.classBreakInfos;
//			
//			for (var i in classBreakInfos) {
//				html += "<li>"
//				  + "	<div class='legend_img'><img src='" + url + "/images/" + classBreakInfos[i].symbol.url + "' /></div>"
//				  + "	<div class='legend_name'>" + classBreakInfos[i].label + "</div>"
//				  + "</li>";
//			}
//		} else if(renderer.type == "simple") {
//			if($dialog.dialog("isOpen")) {
//				$dialog.dialog("close");
//			}
//			
//			return;
//		}
//		
//		$treeview.append(html);
//		$treeview.treeview();
//		
//		if(!$dialog.dialog("isOpen")) {
//			$("#legendMin").trigger("click");
//		}
//	};
	
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
};

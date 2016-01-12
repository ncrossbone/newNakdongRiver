function wpsStatusView() {
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
				, maxHeight: 161
			}
			, 'toc': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 300
				, maxHeight: 284
			}
//			, 'timeLayer1': {
//				minCount: 0
//				, maxCount: 0
//				, maxWidth: 300
//				, maxHeight: 127
//			}
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
//		setTimeLayer1();
		
		setMeasurement();
	};
	
	// dialog min button 설정: 검색, 주제도, 월별수질오염도변화, 범례
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
	
	// dialog max 설정: 검색, 주제도, 월별수질오염도변화, 범례
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
		var $search_type_year = $("#search_type_year");
		var $search_type_mw = $("#search_type_mw");
		
		var $search_btn_search = $("#search_btn_search");
		var $search_btn_clear = $("#search_btn_clear");
		
		// 년도 리스트 
		$search_type_year.ready(function() {
			drawComboBox('/nakdong/wps/wpsStatus_year.json', $search_type_year, '년도');
		});
		
		// 중권역 리스트 
		$search_type_mw.ready(function() {
			drawComboBox('/nakdong/wps/common_mw.json', $search_type_mw, '중권역');
		});
		
		// 검색하기 버튼
		$search_btn_search.bind({
			click: function() {
				var yearv = $search_type_year.find("option:selected").val();
				var mwv = $search_type_mw.find("option:selected").val();
				
				// 검색 조건 체크
				if(yearv == "none" || mwv == "none") {
					alert("모든 조건을 선택하시기 바랍니다.");
					return;
				}
				
				// 해당 권역, 행정구역으로 map 이동
				pageMap.moveForSearch('중권역', 13, mwv);
						
				// 차트 팝업
				popup("/nakdong//chartWpsStatus.do?year=" + yearv + "&mw=" + mwv, 602, 602);
			}
		});
		
		// 초기화 버튼
		$search_btn_clear.bind({
			click: function() {
				// 검색 조건
				$search_type_year.find("option:first").attr("selected", "selected");
				$search_type_mw.find("option:first").attr("selected", "selected");
				
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
	
	// 범례 설정
//	function setLegend(url, type) {
//		$.ajax({
//			url: url + "/legend?f=pjson"
//			, dataType: 'jsonp'
//			, success: function(d) {
//				drawLegend(d.layers, url, type);
//			}
//		});
//	};
//	
//	function drawLegend(d, url, type) {
//		var $div = $("#legendTreeview");
//		var ul = "<ul class='treeview'></ul>";
//		
//		$div.empty();
//		$div.append(ul);
//				
//		var $dialog = $div.parent();
//		var $treeview = $div.find('.treeview');
//		
//		var newData = d[parseInt(type)-1];
//		var newLegend = newData.legend;
//		
//		var html = "<li id='legend" + newData.id + "'>"
//					 + "	<span>" + newData.layerName.split("_")[0] + "</span>"
//					 + "	<ul>";
//		
//		for(var i = 1; i < newLegend.length; i++) {
//			var nd = newLegend[i];
//			
//			html += "<li>"
//			  + "	<div class='legend_img'><img src='" + url + "/" + type + "/images/" + nd.url + "' /></div>"
//			  + "	<div class='legend_name'>" + nd.label + "</div>"
//			  + "</li>";
//		}
//        
//        html += "</ul></li>";
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
	
	// 월별 수질오염도 변화 설정
//	function setTimeLayer1() {
//		var $btnStart = $("#timeLayerBtnStart");
//		var $btnStop = $("#timeLayerBtnStop");
//		
//		var min = 1;
//		var max = 12;
//		
//		var $slider = $("#timeLayer1Slider");
//		var $slider_bar = $slider.find('.bar');
//		var $slider_value = $slider.find('.value');
//		var $slider_left = $slider.find('.left');
//		var $slider_right = $slider.find('.right');
//		
//		// 시작 버튼
//		$btnStart.bind({
//			click: function() {
//				
//			}
//		});
//		
//		// 정지 버튼
//		$btnStop.bind({
//			click: function() {
//				
//			}
//		});
//		
//		// 슬라이더
//		$slider_bar.slider({
//			min: min
//			, max: max
//			, value: min
//			, change: function(evt, ui) {
//				$slider_value.text($slider_bar.slider("value") + "월");
//			}
//		});
//		
//		// 이전 버튼
//		$slider_left.bind({
//			click: function() {
//				var now = $slider_bar.slider("value");
//				now = parseInt(now) - 1;
//				
//				$slider_bar.slider("value", (now < min) ? max : now);
//			}
//		});
//		
//		// 다음 버튼
//		$slider_right.bind({
//			click: function() {
//				var now = $slider_bar.slider("value");
//				now = parseInt(now) + 1;
//				
//				$slider_bar.slider("value", (now > max) ? min : now);
//			}
//		});
//	};
	
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
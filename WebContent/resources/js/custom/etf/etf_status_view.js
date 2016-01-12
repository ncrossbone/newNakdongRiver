function etfStatusView() {
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
				, maxHeight: 210
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
		
		var $search_type_type = $("#search_type_type");
		var $search_type_mw = $("#search_type_mw");
		var $search_type_sido = $("#search_type_sido");
		var $search_type_sgg = $("#search_type_sgg");
		
		var $search_btn_search = $("#search_btn_search");
		var $search_btn_clear = $("#search_btn_clear");
		
		// 그룹 선택
		$searchGroup.ready(function() {
			$("input[name='searchGroup'][value='1']").trigger("click");
			
				$search_type_mw.attr("disabled", false);
				
				$search_type_sido.attr("disabled", true);
				$search_type_sgg.attr("disabled", true);
		});
		
		$searchGroup.bind("change", function() {
			var tv = $("input[name='searchGroup']:checked").val();
			
			if(tv == "1") {
				$search_type_mw.attr("disabled", false);
				
				$search_type_sido.attr("disabled", true);
				$search_type_sgg.attr("disabled", true);
			} else {
				$search_type_mw.attr("disabled", true);
				
				$search_type_sido.attr("disabled", false);
				$search_type_sgg.attr("disabled", false);
			}
		});
		
		// 중권역 리스트 
		$search_type_mw.ready(function() {
			drawComboBox('/nakdong/etf/common_mw.json', $search_type_mw, '중권역');
		});
		
		// 시도 리스트 
		$search_type_sido.ready(function() {
			drawComboBox('/nakdong/etf/common_sido.json', $search_type_sido, '시도');
		});
		
		$search_type_sido.bind({
			change: function() {
				var sido = $search_type_sido.find("option:selected").val();
				
				drawComboBox('/nakdong/etf/common_sgg.json?sido=' + sido, $search_type_sgg, '시군구');
			}
		});
		
		// 검색하기 버튼
		$search_btn_search.bind({
			click: function() {
				var typev = $search_type_type.find("option:selected").val();
				var mwv = $search_type_mw.find("option:selected").val();
				var sidov = $search_type_sido.find("option:selected").val();
				var sggv = $search_type_sgg.find("option:selected").val();
				
				var groupv = $("input[name='searchGroup']:checked").val();
				
				// 검색 조건 체크
				if(typev == 'none') {
					alert("시설종류를 선택하시기 바랍니다.");
					return;
				}
				
				if (groupv == "1" || groupv == 1) {
					if (mwv == "none") {
						alert("중권역을 선택하시기 바랍니다.");
						return;
					}
				}
				else if (groupv == "2" || groupv == 2) {
					if (sidov == "none") {
						alert("시도를 선택하시기 바랍니다.");
						return;
					}
					
					if (sidov != "none" && sggv == "none") {
						alert("시군구를 선택하시기 바랍니다.");
						return;
					}
				}
				
				var layerIdInfo = {
					"S" : "1",//축산폐수공공처리시설
					"W" : "2",//하수종말처리시설
					"I" : "3",//산업폐수종말처리시설
					"F" : "4",//분뇨처리시설
					"V" : "6",//마울하수도
					"A" : "7",//농공단지처리시설
					"H" : "8"//기타공동처리시설
				}
				
				var searchCondition = {
					"url" : "/arcgis/rest/services/ndk3/MapServer",
					"id" : layerIdInfo[typev],
					"map" : pageMap.getMapObj(),
					"where" : {
						"법정동코드" : sggv != "none" ? " like '" + sggv + "%'" : sidov != "none" ? " like '" +  sidov + "%'" : "",
						"중권역_cd" : mwv != "none" ? " = '" + mwv + "'" : ""
					}
				};
				
				searchDynamicLayer(searchCondition);
				
				// 해당 권역, 행정구역으로 map 이동
				if(groupv == 1) {
					// 중권역 이동
					pageMap.moveForSearch('중권역', 18, mwv);
				} else if(groupv == 2) {
					// 시군구 이동
					if(sggv != "none") {
						pageMap.moveForSearch('시군구', 31, sggv);
					} 
					
					// 시도 이동
					else {
						pageMap.moveForSearch('시도', 33, sidov);
					}
				}
				
				// 지도 검색
//				pageMap.searchDynamicLayer({
//					mw: (mwv != 'none' && groupv == 1) ? mwv : ''
//					, sw: (swv != 'none' && groupv == 1) ? swv : ''
//					, sido: (sidov != 'none' && groupv == 2) ? sidov : ''
//					, sgg: (sggv != 'none' && groupv == 2) ? sggv : ''
//					, work: (workv != 'none') ? workv : ''
//					, num: (numv != 'none') ? numv : ''
//					, ani: (aniv != 'none') ? aniv : ''
//				});
				
				// 차트, 테이블 관련 결과
				//popup("/nakdong/http://118.37.180.152:9003/ext/menu311.html", 800, 600, false);
				popup("/nakdong//chartEtfStatus.do?search_type_type=" + typev + "&search_type_mw=" + mwv + "&search_type_sido=" + sidov + "&search_type_sgg=" + sggv, 452, 302, false);
			}
		});
		
		// 초기화 버튼
		$search_btn_clear.bind({
			click: function() {
				// 검색 조건
				$("input[name='searchGroup'][value='1']").trigger("click");
				
				$search_type_type.find("option:first").attr("selected", "selected");
				$search_type_mw.find("option:first").attr("selected", "selected");
				$search_type_sido.find("option:first").attr("selected", "selected");
				$search_type_sgg.find("option:first").attr("selected", "selected");
				
				$search_type_sgg.find("option[value!='none']").remove();
			
				$search_type_type.attr("disabled", false);
				$search_type_mw.attr("disabled", false);
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
	
	// 범례 설정
//	function setLegend(url) {
//		$.ajax({
//			url: url + '/layers?f=pjson'
//			, dataType: 'jsonp'
//			, success: function(d) {
//				drawLegend(d.layers, url);
//			}
//		});
//	};
//	
//	function drawLegend(d, url) {
//		var groupId = 0;
//		var useIds = [1,2,3,4,5,6,7,8];
//		var $div = $("#legendTreeview");
//		var ul = "<ul class='treeview'></ul>";
//		
//		$div.empty();
//		$div.append(ul);
//				
//		var $dialog = $div.parent();
//		var $treeview = $div.find('.treeview');
//			
//		var html = "<li id='legend" + d[groupId].id + "'>"
//					 + "	<span>" + d[groupId].name + "</span>"
//					 + "	<ul>";
//		
//		for(var i in useIds) {
//			var nu = useIds[i];
//			var td = d[nu];
//			var renderer = td.drawingInfo.renderer;
//						 
//			 if (renderer.type == "simple") {
//			 	html += "<li>"
//				  + "	<div class='legend_img'><img src='" + url + "/" + td.id + "/images/" + renderer.symbol.url + "' /></div>"
//				  + "	<div class='legend_name'>" + td.name + "</div>"
//				  + "</li>";
//			 }
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
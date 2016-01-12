function weStatusView() {
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
				, maxHeight: 181
			}
			, 'searchResult': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 680
				, maxHeight: 300
			}
			, 'toc': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 300
				, maxHeight: 284
			}
//			, 'legend': {
//				minCount: 0
//				, maxCount: 0
//				, maxWidth: 300
//				, maxHeight: 250
//			}
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
					var title = "";
					
					// title: title image, min button
					if(type == "searchResult") {
						title = type + "_max_title2.png";
					} else {
						title = type + "_max_title.png";
					}
					var title = "<div class='title'><img src='/nakdong/resources/images/map/" + title + "' /></div>"
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
		var $search_type_month = $("#search_type_month");
		var $search_type_mw = $("#search_type_mw");
		var $search_type_type = $("#search_type_type");
//		var $search_type_area = $("#search_type_area");
		
		var $search_btn_search = $("#search_btn_search");
		var $search_btn_clear = $("#search_btn_clear");
		
		// 년도 리스트 
		$search_type_year.ready(function() {
			$search_type_year.empty();
			$search_type_year.append("<option value='none'>년도 선택</option>");
			
			var date = new Date();
			year = parseInt(date.getFullYear());
			
			for(var i = year - 9; i <= year; i++) {
				$search_type_year.append("<option value='" + i + "'>" + i + "년</option>");
			}
		});
		
		// 월 리스트 
		$search_type_month.ready(function() {
			$search_type_month.empty();
			$search_type_month.append("<option value='none'>월 선택</option>");
			
			for(var i = 1; i <= 12; i++) {
				$search_type_month.append("<option value='" + ("00" + i).slice(-2) + "'>" + ("00" + i).slice(-2) + "월</option>");
			}
		});
		
		// 중권역 리스트
		$search_type_mw.ready(function() {
			drawComboBox('/nakdong/we/common_mw.json', $search_type_mw, '중권역');
		});
		
		// 측정지점 리스트
//		$search_type_mw.bind({
//			change: function(e) {
//				var code = $search_type_mw.find(":selected").val();
//				
//				var url = 'http://118.37.180.152:6080/arcgis/rest/services/ndk1/MapServer/1/';
//				
//				var qt = new esri.tasks.QueryTask(url);
//				var query = new esri.tasks.Query();
//				
//				query.returnGeometry = false;
//				query.where = "중권역코드='" + code + "'";
//				query.outFields = ['측정소명', '측정소코드', '중권역명', '중권역코드'];
//				query.orderByFields = ['측정소코드'];
//				
//				qt.execute(query
//					, function(results) {
//						var list = [];
//						
//						for(var i in results.features) {
//							var name = results.features[i].attributes['측정소명'];
//							var code = results.features[i].attributes['측정소코드'];
//							
//							list[name] = code;
//						}
//						
//						$search_type_area.empty();
//						$search_type_area.append("<option value='none'>측정지점</option>");
//						
//						for(var i in list) {
//							$search_type_area.append("<option value='" + list[i] + "'>" + i + "</option>");
//						}
//					}
//					, function(e) {
//						console.log(e);
//					}
//				);
//			}
//		});
		
		// 검색하기 버튼
		$search_btn_search.bind({
			click: function() {
				var yearv = $search_type_year.find("option:selected").val();
				var monthv = $search_type_month.find("option:selected").val();
				var mwv = $search_type_mw.find("option:selected").val();
				var typev = $search_type_type.find("option:selected").val();
				
				/* khLee 주석 20150423
				// 검색 조건 체크
				if(yearv == "none") {
					alert("년도를 선택하시기 바랍니다.");
					return;
				}
				if(monthv == "none") {
					alert("월을 선택하시기 바랍니다.");
					return;
				}
				
				if(mwv == "none") {
					alert("중권역을 선택하시기 바랍니다.");
					return;
				}
				
				if(typev == "none") {
					alert("구분을 선택하시기 바랍니다.");
					return;
				}
				*/
				
				/* khLee 추가 20150423 */
				var valCnt = 0;
				// 검색 조건 체크
				if(yearv == "none") {
					valCnt++;
				}
				if(monthv == "none") {
					valCnt++;
				}
				
				if(mwv == "none") {
					valCnt++;
				}
				//alert(valCnt);
				//return false;
				if(valCnt >= 2)
				{
					alert("검색 조건을 2가지 이상 선택하세요.");
					return;
				}
				/* khLee 추가 20150423 끝 */
				
				// 해당 권역, 행정구역으로 map 이동
				pageMap.moveForSearch('중권역', 16, mwv);
				
				// 자료 검색결과
				setSearchResult();
			}
		});
		
		// 초기화 버튼
		$search_btn_clear.bind({
			click: function() {
				// 검색 조건
				$search_type_year.find("option:first").attr("selected", "selected");
				$search_type_month.find("option:first").attr("selected", "selected");
				$search_type_mw.find("option:first").attr("selected", "selected");
				$search_type_type.find("option:first").attr("selected", "selected");
//				$search_type_area.find("option:first").attr("selected", "selected");
				
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
	
	// 자료 검색결과 설정
	function setSearchResult() {
		var yearv = $("#search_type_year").find("option:selected").val();
		var monthv = $("#search_type_month").find("option:selected").val();
		var mwv = $("#search_type_mw").find("option:selected").val();
		var typev = $("#search_type_type").find("option:selected").val();
//		var ptnov = $("#search_type_area").find("option:selected").val();
				
		yearv = (yearv == 'none') ? '' : yearv;
		monthv = (monthv == 'none') ? '' : monthv;
		mwv = (mwv == 'none') ? '' : mwv;
//		ptnov = (ptnov == 'none') ? '' : ptnov;
		
		var url = "";
		
		// 확정전
		if(typev == 'before')
			url = "/nakdong/we/weStatus_search1.json?year=" + yearv + "&month=" + monthv + "&mw=" + mwv;
		// 확정후
		else 
			url = "/nakdong/we/weStatus_search2.json?year=" + yearv + "&month=" + monthv + "&mw=" + mwv;
		
		$.ajax({
			url: url
			, dataType: 'json'
			, success: function(d) {
				drawSearchResult(d.result);
			}
		});
	};
	
	// 자료 검색결과 그리기
	function drawSearchResult(d) {
		var typev = $("#search_type_type").find("option:selected").val();
		
		var $resultMin = $("#searchResultMin");	
		var $resultMax = $("#searchResultMax");
		
		var $table = $resultMax.find("table");
		var $thead = $table.find("thead");
		var $tbody = $table.find("tbody");
		
		if(d.length == 0) {
			alert("검색결과가 없습니다");
			return;
		}
		
		// dialog open
		$resultMin.trigger("click");
		
		// table draw
		$thead.empty();
		$tbody.empty();
		
		// 확정 전
		if(typev == "before") {
			var hh = "<tr>" +
				"	<th style='width:60px;'>측정소명</th>" +
				"	<th>검사일자</th>" +
				"	<th>수온(℃)</th>" +
				"	<th>PH</th>" +
				"	<th>DO(mg/L)</th>" +
				"	<th>BOD(mg/L)</th>" +
				"	<th>COD(mg/L)</th>" +
				"	<th>SS(mg/L)</th>" +
				"	<th>총질소(mg/L)</th>" +
				"	<th>총인(mg/L)</th>" +
				"</th>";
				
			$thead.append(hh);
			
			for(var i in d) {
				var html = "<tr onmouseover=\"this.bgColor='#ffd4b8';this.style.cursor='pointer';\" onmouseout=\"this.bgColor='#ffffff';\" id='srr|" + d[i]['PT_NO'] + "|" + d[i]['MEASURE_DATE'] + "'>"
							+ "<td>" + d[i]['PT_NM'] + "</td>"
							+ "<td>" + d[i]['MEASURE_DATE'] + "</td>"
							+ "<td>" + d[i]['ITEM_TEMP'] + "</td>"
							+ "<td>" + d[i]['ITEM_PH'] + "</td>"
							+ "<td>" + d[i]['ITEM_DOC'] + "</td>"
							+ "<td>" + d[i]['ITEM_BOD'] + "</td>"
							+ "<td>" + d[i]['ITEM_COD'] + "</td>"
							+ "<td>" + d[i]['ITEM_SS'] + "</td>"
							+ "<td>" + d[i]['ITEM_TN'] + "</td>"
							+ "<td style='border-right: 0px;'>" + d[i]['ITEM_TP'] + "</td>"
							+ "</tr>";
				
				$tbody.append(html);
			}
		}
		
		// 확정 후
		else if(typev == "after") {
			var hh = "<tr>" +
				"	<th style=\"width:70px;\">측정소명</th>" +
				"	<th>년</th>" +
				"	<th>월</th>" +
				"	<th>회차</th>" +
				"	<th>수온<br /><span>(℃)</span></th>" +
				"	<th>PH</th>" +
				"	<th>DO<br /><span>(mg/L)</span></th>" +
				"	<th>BOD<br /><span>(mg/L)</span></th>" +
				"	<th>COD<br /><span>(mg/L)</span></th>" +
				"	<th>SS<br /><span>(mg/L)</span></th>" +
				"	<th>총질소<br /><span>(mg/L)</span></th>" +
				"	<th>총인<br /><span>(mg/L)</span></th>" +
				"</th>";
				
			$thead.append(hh);
			
			for(var i in d) {
				//var html = "<tr onmouseover=\"this.bgColor='#ffd4b8';this.style.cursor='pointer';\" onmouseout=\"this.bgColor='#ffffff';\" id='srr|" + d[i]['PT_NO'] + "|" + d[i]['WMWK'] + "'>"
				var html = "<tr onmouseover=\"this.bgColor='#ffd4b8';this.style.cursor='pointer';\" onmouseout=\"this.bgColor='#ffffff';\" id='srr|" + d[i]['PT_NO'] + "|" + d[i]['WMYR'] + "'>"
							+ "<td style=\"text-align: left;\">" + d[i]['PT_NM'] + "</td>"
							+ "<td>" + d[i]['WMYR'] + "</td>"
							+ "<td>" + d[i]['WMOD'] + "</td>"
							+ "<td style=\"text-align: left;\">" + d[i]['WMWK'] + "</td>"
							+ "<td style=\"text-align: right;\">" + d[i]['ITEM_TEMP'] + "</td>"
							+ "<td style=\"text-align: right;\">" + d[i]['ITEM_PH'] + "</td>"
							+ "<td style=\"text-align: right;\">" + d[i]['ITEM_DOC'] + "</td>"
							+ "<td style=\"text-align: right;\">" + d[i]['ITEM_BOD'] + "</td>"
							+ "<td style=\"text-align: right;\">" + d[i]['ITEM_COD'] + "</td>"
							+ "<td style=\"text-align: right;\">" + d[i]['ITEM_SS'] + "</td>"
							+ "<td style=\"text-align: right;\">" + d[i]['ITEM_TN'] + "</td>"
							+ "<td style=\"border-right: 0px; text-align: right;\">" + d[i]['ITEM_TP'] + "</td>"
							+ "</tr>";
				
				$tbody.append(html);
			}
		}
		
		// table row click event
		$("tr[id*='srr|']").bind("click", function(e) {
			var id = e.currentTarget.id;
			id = id.split("|");
			
			var ptno = id[1];
			var year = id[2];
			
			// popup
			if(typev == "before") 
				popup("/nakdong/chartWeStatus.do?ptno=" + ptno + "&year=" + year.substr(0, 4), 602, 602, false);
			else if(typev == "after") {							
//				popup("/nakdong/chartWeStatus.do?ptno=" + ptno + "&year=" + year.substr(0, 1), 502, 602, false);
				popup("/nakdong/chartWeStatus.do?ptno=" + ptno + "&year=" + year, 602, 602, false);				
			}
			
			// map move
			pageMap.moveForSearch('하천수', 1, ptno);
		});
	};
	
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
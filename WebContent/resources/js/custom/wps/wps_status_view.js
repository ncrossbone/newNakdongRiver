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
	
	// dialog min button ����: �˻�, ������, ����������������ȭ, ����
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
	
	// dialog max ����: �˻�, ������, ����������������ȭ, ����
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
	
	// �˻� ����
	function setSearch() {
		var $search_type_year = $("#search_type_year");
		var $search_type_mw = $("#search_type_mw");
		
		var $search_btn_search = $("#search_btn_search");
		var $search_btn_clear = $("#search_btn_clear");
		
		// �⵵ ����Ʈ 
		$search_type_year.ready(function() {
			drawComboBox('/nakdong/wps/wpsStatus_year.json', $search_type_year, '�⵵');
		});
		
		// �߱ǿ� ����Ʈ 
		$search_type_mw.ready(function() {
			drawComboBox('/nakdong/wps/common_mw.json', $search_type_mw, '�߱ǿ�');
		});
		
		// �˻��ϱ� ��ư
		$search_btn_search.bind({
			click: function() {
				var yearv = $search_type_year.find("option:selected").val();
				var mwv = $search_type_mw.find("option:selected").val();
				
				// �˻� ���� üũ
				if(yearv == "none" || mwv == "none") {
					alert("��� ������ �����Ͻñ� �ٶ��ϴ�.");
					return;
				}
				
				// �ش� �ǿ�, ������������ map �̵�
				pageMap.moveForSearch('�߱ǿ�', 13, mwv);
						
				// ��Ʈ �˾�
				popup("/nakdong//chartWpsStatus.do?year=" + yearv + "&mw=" + mwv, 602, 602);
			}
		});
		
		// �ʱ�ȭ ��ư
		$search_btn_clear.bind({
			click: function() {
				// �˻� ����
				$search_type_year.find("option:first").attr("selected", "selected");
				$search_type_mw.find("option:first").attr("selected", "selected");
				
				// ����
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
	
	// ���� ����
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
	
	// ������ ����
	function setToc() {
		var $slider = $("#tocOpacitySlider");
		var $slider_bar = $slider.find('.bar');
		var $slider_value = $slider.find('.value');
		
		var $tocInfoBtn = $("#tocInfoBtn");
		
		var $tocAllCheck = $("#tocAllCheck");
		
		// ���� ����
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
		
		// ��ü���� ����
		$tocAllCheck.bind({
			click: function(evt) {
				var $now = $(evt.currentTarget);
				
				var $check = $now.find('.icon_check');
				var $remove = $now.find('.icon_remove');
				
				if($now.attr("title") == "��ü����") {
					$check.css("display", "none");
					$remove.css("display", "block");
					$now.attr("title", "��ü����");
				} else {
					$check.css("display", "block");
					$remove.css("display", "none");
					$now.attr("title", "��ü����");
				}
			}	
		});
	};
	
	// ���� ���������� ��ȭ ����
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
//		// ���� ��ư
//		$btnStart.bind({
//			click: function() {
//				
//			}
//		});
//		
//		// ���� ��ư
//		$btnStop.bind({
//			click: function() {
//				
//			}
//		});
//		
//		// �����̴�
//		$slider_bar.slider({
//			min: min
//			, max: max
//			, value: min
//			, change: function(evt, ui) {
//				$slider_value.text($slider_bar.slider("value") + "��");
//			}
//		});
//		
//		// ���� ��ư
//		$slider_left.bind({
//			click: function() {
//				var now = $slider_bar.slider("value");
//				now = parseInt(now) - 1;
//				
//				$slider_bar.slider("value", (now < min) ? max : now);
//			}
//		});
//		
//		// ���� ��ư
//		$slider_right.bind({
//			click: function() {
//				var now = $slider_bar.slider("value");
//				now = parseInt(now) + 1;
//				
//				$slider_bar.slider("value", (now > max) ? min : now);
//			}
//		});
//	};
	
	// ���� dialog
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
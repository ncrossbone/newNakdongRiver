function plCompareView() {
	var $dialog_min_list = $("div[id*='Min']");
	var $dialog_max_list = $("div[id*='Max']");
	
	var dialog_info = {};
	
	// start
	this.init = function() {
		dialog_info = {
			'toc1': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 300
				, maxHeight: 284
			}
			, 'toc2': {
				minCount: 0
				, maxCount: 0
				, maxWidth: 300
				, maxHeight: 284
			}
		};
		
		setDialogMin();
		setDialogMax();
		
		setToc1();
		setToc2();
		
		setMeasurement();
	};
	
	// dialog min button 설정: 주제도
	function setDialogMin() {
		$dialog_min_list.draggable();
		
		$dialog_min_list.bind({
			click: function(evt) {
				var target = evt.currentTarget;
				var type = target.id.replace('Min', '');
				var type_name = type.substr(0, type.length-1);
				var type_num = type.replace(type_name, "");
				
				var count = dialog_info[type].minCount;
				
				var $min = $("#" + type_name + "Min" + type_num);
				var $max = $("#" + type_name + "Max" + type_num);
				
				$min.css({
					display: 'none'
				});
				
				if($min.css("left") != "auto")
					$max.dialog("option", "position", [parseInt($min.css("left")), parseInt($min.css("top"))]);
				else 
					$max.dialog("option", "position", ["right-" + parseInt($min.css("right")), parseInt($min.css("top"))]);

				dialog_info[type].minCount = count + 1;
				
				$max.dialog("open");
			}
		});
	};
	
	// dialog max 설정: 주제도
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
					
					var type2 = evt.target.id.replace('Max', '');
					var type_name = type2.substr(0, type.length-1);
					var type_num = type2.replace(type_name, "");
					
					var $min = $("#" + type_name + "Min" + type_num);
					var $max = $("#" + type_name + "Max" + type_num);
			
					// title: title image, min button
					var title = "<div class='title'><img src='/nakdong/resources/images/map/" + type.substr(0, type.length-1) + "_max_title.png' /></div>"
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
	
	// 주제도1 설정
	function setToc1() {
		var $slider = $("#tocOpacitySlider1");
		var $slider_bar = $slider.find('.bar');
		var $slider_value = $slider.find('.value');
		
		var $tocInfoBtn = $("#tocInfoBtn1");
		
		var $tocAllCheck = $("#tocAllCheck1");
		
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
	
	// 주제도2 설정
	function setToc2() {
		var $slider = $("#tocOpacitySlider2");
		var $slider_bar = $slider.find('.bar');
		var $slider_value = $slider.find('.value');
		
		var $tocInfoBtn = $("#tocInfoBtn2");
		
		var $tocAllCheck = $("#tocAllCheck2");
		
		// 투명도 설정
		$slider_bar.slider({
			min: 0
			, max: 100
			, value: 100
			, change: function(evt, ui) {
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
		var $div = $("div[id*='measurementDiv']");
		
		$div.each(function(i, obj) {
			var $nDiv = $(obj);
			var nDivId = obj.id;
		
			$nDiv.dialog({
				autoOpen: false
				, closeOnEscape: false
				, width: 250
				, height: 130
				, resizable: false
				, create: function(evt, ui) {
					var $content = $(evt.target);
					var $dialog = $content.parent();
					
					// title: title image, close button
					var title = "<div class='title'><img src='/nakdong/resources/images/map/measurement_title.png' /></div>"
								+ "<div class='btn'><img src='/nakdong/resources/images/map/dialog_title_btn_close.png' class='close' /></div>";
					
					$dialog.find(".ui-dialog-title").empty();
					$dialog.find(".ui-dialog-title").append(title);
					
					// postion
					if(nDivId == "measurementDiv2") {
						$nDiv.dialog("option", "position", ["center+100", 123]);
					}
					else {
						$nDiv.dialog("option", "position", ["center-100", 123]);
					}
					
					// close button click event
					$dialog.find(".ui-dialog-title .btn .close").bind({
						click: function() {
							$div.dialog("close");
						}
					});
				}
			});
		});
	};
};
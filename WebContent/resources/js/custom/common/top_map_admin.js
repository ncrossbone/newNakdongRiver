function topMap() {
	var $top_map = $("#top_map_admin");
	
	var navi_json;
	var $navi_list = $("div[id*='navi_'] .title");
	var $navi_sub_list = $("div[id*='navi_'] .sub");
	var $navi_sub_li = $navi_sub_list.find('li');
	
	var $mapType_input_list = $("input[id*='mapType_input_']");
	var $mapType_label_list = $("label[id*='mapType_label_']");
	
	var $rule = $("#rule");
	
	var $slide_show = $("#top_slide_show");
	var $slide_hide = $("#top_slide_hide");
	
	// start
	this.init = function() {
		getNavi();
		
		setNavi();
		setMapType();
		setRule();
		setSlide();
	};
	
	// 메뉴 url 가져오기
	function getNavi() {
		$.ajax({
			dataType: "json",
			url: "/nakdong/resources/json/navi_url.link",
			success: function(data) {
				navi_json = data;
			}
		});
	};
	
	// 메뉴 설정
	function setNavi() {
		// sub left 초기 설정: resize에 따라 위치 변경
		$(window).resize(function() {
			$navi_sub_list.each(function(i, obj) {
				var $now = $(obj);
				var $li = $now.find('li');
				var $parent = $now.parent();
				
				var width = parseInt($li.length) * parseInt($li.css('width'));
				var real_left = $parent.offset().left;
				var window_width = $(window).width();
	
				$now.width(width);
	
				if((real_left + width) > window_width) {
					$now.css('left', window_width - (real_left + width));
				}
			});
		}).resize();
		
		// navi mouseover -> sub 보임, zindex수정
		$navi_list.bind({
			mouseover: function() {
				var $now = $(this).parent();
				var $sub = $now.find("ul[class='sub']");
				var $asub = $navi_list.parent().find("ul[class='sub']");
				
				$asub.hide();
				$sub.show();
				
				$navi_list.parent().css('zIndex', '1');
				$now.css('zIndex', '2')
			}
			, click: function(obj) {
				var id = $(obj.currentTarget).parent().get(0).id;
				var url = navi_json[id].url;
				
				location.href = url;
			}
		});
		
		// sub li url 설정
		$navi_sub_li.bind({
			click: function(obj) {
				var id = obj.currentTarget.id;
				var url = navi_json[id].url;
				
				location.href = url;
			}
		})
	};
	
	// 배경맵 선택 설정
	function setMapType() {
		$mapType_label_list.bind({
			click: function(evt) {
				var $now = $(evt.currentTarget);
				
				var label_id = evt.currentTarget.id;
				var input_id = label_id.replace('label_', 'input_');
				
				var $now_input = $("input[id='" + input_id + "'][name='mapType']");
				var $not_input = $("input[id!='" + input_id + "'][name='mapType']");
				
				var $now_label = $("label[id='" + label_id + "'][for*='mapType_']");
				var $not_label = $("label[id!='" + label_id + "'][for*='mapType_']");
				
				$now_input.prop('checked', true);
				$not_input.prop('checked', false);
				
				$now_label.css({
					"background-image": $now_label.css("background-image").replace("out", "over")
					, "color": "white"
				});
				
				$not_label.css({
					"background-image": $not_label.css("background-image").replace("over", "out")
					, "color": "black"
				});
			}
		});
		
		$mapType_input_list.each(function(i, obj) {
			if($(obj).is(':checked') == true || $(obj).is(':checked') == "true") {
				$(obj).trigger("click");
			}
		});
	};
	
	// 규정 및 지침 설정
	function setRule() {
		$rule.bind({
			click: function() {
				popup("/nakdong/ruleInfo.do", 430, 250);
			}
		});
	};
	
	// top 부분 전체 슬라이드 설정
	function setSlide() {
		$slide_show.bind({
			click: function() {
				$slide_show.css({
					display: 'none'
				});
				
				$slide_hide.css({
					display: 'block'
				});
				
				$top_map_admin.animate({
					top: '0px'
				}, 'fast');
			}
		});
		
		$slide_hide.bind({
			click: function() {
				$slide_show.css({
					display: 'block'
				});
				
				$slide_hide.css({
					display: 'none'
				});
				
				$top_map_admin.animate({
					top: '-94px'
				}, 'fast');
			}
		});
	};
};
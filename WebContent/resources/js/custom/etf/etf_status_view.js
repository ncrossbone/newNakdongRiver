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
	
	// dialog min button ����: �˻�, ������, ����
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
	
	// dialog max ����: �˻�, ������, ����
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
		var $searchGroup = $("input[name='searchGroup']");
		
		var $search_type_type = $("#search_type_type");
		var $search_type_mw = $("#search_type_mw");
		var $search_type_sido = $("#search_type_sido");
		var $search_type_sgg = $("#search_type_sgg");
		
		var $search_btn_search = $("#search_btn_search");
		var $search_btn_clear = $("#search_btn_clear");
		
		// �׷� ����
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
		
		// �߱ǿ� ����Ʈ 
		$search_type_mw.ready(function() {
			drawComboBox('/nakdong/etf/common_mw.json', $search_type_mw, '�߱ǿ�');
		});
		
		// �õ� ����Ʈ 
		$search_type_sido.ready(function() {
			drawComboBox('/nakdong/etf/common_sido.json', $search_type_sido, '�õ�');
		});
		
		$search_type_sido.bind({
			change: function() {
				var sido = $search_type_sido.find("option:selected").val();
				
				drawComboBox('/nakdong/etf/common_sgg.json?sido=' + sido, $search_type_sgg, '�ñ���');
			}
		});
		
		// �˻��ϱ� ��ư
		$search_btn_search.bind({
			click: function() {
				var typev = $search_type_type.find("option:selected").val();
				var mwv = $search_type_mw.find("option:selected").val();
				var sidov = $search_type_sido.find("option:selected").val();
				var sggv = $search_type_sgg.find("option:selected").val();
				
				var groupv = $("input[name='searchGroup']:checked").val();
				
				// �˻� ���� üũ
				if(typev == 'none') {
					alert("�ü������� �����Ͻñ� �ٶ��ϴ�.");
					return;
				}
				
				if (groupv == "1" || groupv == 1) {
					if (mwv == "none") {
						alert("�߱ǿ��� �����Ͻñ� �ٶ��ϴ�.");
						return;
					}
				}
				else if (groupv == "2" || groupv == 2) {
					if (sidov == "none") {
						alert("�õ��� �����Ͻñ� �ٶ��ϴ�.");
						return;
					}
					
					if (sidov != "none" && sggv == "none") {
						alert("�ñ����� �����Ͻñ� �ٶ��ϴ�.");
						return;
					}
				}
				
				var layerIdInfo = {
					"S" : "1",//����������ó���ü�
					"W" : "2",//�ϼ�����ó���ü�
					"I" : "3",//����������ó���ü�
					"F" : "4",//�д�ó���ü�
					"V" : "6",//�����ϼ���
					"A" : "7",//�������ó���ü�
					"H" : "8"//��Ÿ����ó���ü�
				}
				
				var searchCondition = {
					"url" : "/arcgis/rest/services/ndk3/MapServer",
					"id" : layerIdInfo[typev],
					"map" : pageMap.getMapObj(),
					"where" : {
						"�������ڵ�" : sggv != "none" ? " like '" + sggv + "%'" : sidov != "none" ? " like '" +  sidov + "%'" : "",
						"�߱ǿ�_cd" : mwv != "none" ? " = '" + mwv + "'" : ""
					}
				};
				
				searchDynamicLayer(searchCondition);
				
				// �ش� �ǿ�, ������������ map �̵�
				if(groupv == 1) {
					// �߱ǿ� �̵�
					pageMap.moveForSearch('�߱ǿ�', 18, mwv);
				} else if(groupv == 2) {
					// �ñ��� �̵�
					if(sggv != "none") {
						pageMap.moveForSearch('�ñ���', 31, sggv);
					} 
					
					// �õ� �̵�
					else {
						pageMap.moveForSearch('�õ�', 33, sidov);
					}
				}
				
				// ���� �˻�
//				pageMap.searchDynamicLayer({
//					mw: (mwv != 'none' && groupv == 1) ? mwv : ''
//					, sw: (swv != 'none' && groupv == 1) ? swv : ''
//					, sido: (sidov != 'none' && groupv == 2) ? sidov : ''
//					, sgg: (sggv != 'none' && groupv == 2) ? sggv : ''
//					, work: (workv != 'none') ? workv : ''
//					, num: (numv != 'none') ? numv : ''
//					, ani: (aniv != 'none') ? aniv : ''
//				});
				
				// ��Ʈ, ���̺� ���� ���
				//popup("/nakdong/http://118.37.180.152:9003/ext/menu311.html", 800, 600, false);
				popup("/nakdong//chartEtfStatus.do?search_type_type=" + typev + "&search_type_mw=" + mwv + "&search_type_sido=" + sidov + "&search_type_sgg=" + sggv, 452, 302, false);
			}
		});
		
		// �ʱ�ȭ ��ư
		$search_btn_clear.bind({
			click: function() {
				// �˻� ����
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
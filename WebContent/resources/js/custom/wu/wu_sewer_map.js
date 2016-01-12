function wuSewerMap() {
	var config = {};
	
	var map;
	var dynamic = {};
	var toc = {};
	
	var loaded = {
		success: false
		, count: 0
		, length: 0
	};
	
	// start
	this.init = function() {
		config = {
			id: 'map'
			, div: 'map'
			, center: [128.2407, 35.2355]
			, zoom: 11
			, minZoom: 6
			, maxZoom: 17
			, basemap: 'satellite'
			, sliderStyle: 'large'
			, sliderPosition: 'top-right'
			, logo: false
			, dynamic: {
				'default': {
					url: mapUrl + '/arcgis/rest/services/ndk2/MapServer'
					, id: 'dynamic1'
					, opacity: 1.0
					, visible: true
					, use: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
					, visibleLayers: [5,12,13]
				}
				, 'search1': {
					url: mapUrl + '/arcgis/rest/services/ndk2/MapServer'
					, id: 'search1'
					, opacity: 1.0
					, visible: true
					, use: [12]
					, visibleLayers: []
				}
			}
			, toc: {
				div: 'tocTreeview'
				, all: 'tocAllCheck'
				, allOn: '전체선택'
				, allOff: '전체해제'
				, opacity: 'tocOpacitySlider'
				, info: 'tocInfoBtn'
			}
			, toggle: {
				'mapType_label_1': {
					type: 'base'
					, id: 'layer0'
					, name: '위성'
				}
				, 'mapType_label_2': {
					type: 'nobase'
					, name: '일반'
				}
			}
		};
		
		dojo.ready(create);
	};
	
	// ceate: map, dynamic layer 생성
	function create() {
		var imageParameters = new esri.layers.ImageParameters();
		imageParameters.format = "PNG24";
		
		loaded.length += parseInt(getObjectLength(config.dynamic));
		
		// map
		map = new esri.Map(config.div, {
			center: config.center
			, zoom: config.zoom
			, minZoom: config.minZoom
			, maxZoom: config.maxZoom
			, basemap: config.basemap
			, sliderStyle: config.sliderStyle
			, sliderPosition: config.sliderPosition
			, logo: config.logo
			, autoResize: true
			, showAttribution: false
		});
		
		// dynamic layer
		for(var i in config.dynamic) {
			var tc = config.dynamic[i];
			var tl = new esri.layers.ArcGISDynamicMapServiceLayer(tc.url, {
				id: tc.id
				, imageParameters: imageParameters
				, opacity: tc.opacity
				, visible: tc.visible
			});
			
			dynamic[i] = {};
			dynamic[i].config = tc;
			dynamic[i].layer = tl;
			
			map.addLayer(tl);
			
			if(tc.visibleLayers.length != 0) {
				tl.setVisibleLayers(tc.visibleLayers);
			}
			
			dojo.connect(tl, "onError", error);
			dojo.connect(tl, "onLoad", setMap); 
		}
	};
	
	// setMap: map 설정
	function setMap() {
		loaded.count++;
		
		if(loaded.length == loaded.count) {
			loaded.success = true;
			
			setToc();
			setTocOpacity();
			setToggle();
			setToolbar();
		
			window.setTimeout(drawOverview, 2000);
			window.setTimeout(drawScalebar, 2000);
			
			dojo.connect(map, "onExtentChange", showScale);
		}
	};
	
	// toggle basemap 설정
	function setToggle() {
		var btns = [];
		
		for(var i in config.toggle) {
			btns.push($("#" + i).get(0));
		}	
		
		$(btns).bind({
			click: function(o) {
				var bt = o.currentTarget;
				var btid = bt.id;
				
				var btlid = config.toggle[btid].id;
				var btltype = config.toggle[btid].type;
				
				var bmids = map.basemapLayerIds;
				
				for(var i in bmids) {
					var tid = bmids[i];
					var tl = map.getLayer(tid);
					
					if(btltype == 'base' && btlid == tid)
						tl.setOpacity(1);
					else
						tl.setOpacity(0);
				}
			}
		});
	};
	
	// scale bar
	function drawScalebar() {
		try {
			var temp = new esri.dijit.Scalebar({
				map: map,
				attachTo: 'bottom-left',
				scalebarUnit: 'metric'
			}); 
		} catch(e) {
			console.log(e);
		}
	};
	
	// scale number
	function showScale(extent, delta, outLevelChange, outLod) {
		var html = "1:" + setComma(outLod.scale.toFixed(0));
		
		$("#scaleView").empty();
		$("#scaleView").append(html);
	};
	
	// overview
	function drawOverview() {
		var overview = new esri.dijit.OverviewMap({
			map: map
			, attachTo: "bottom-right"
			, color:" #ffffff"
			, opacity: 0.5
			, visible: true
			, expandFactor: 1
			, width: 200
			, height: 200
		});
		
		overview.startup();
	};
	
	// setToc: toc 그리기를 위한 json 받아오기(default layer)
	function setToc() {
		$.ajax({
			url: config.dynamic['default'].url + '/layers?f=pjson'
			, dataType: 'jsonp'
			, success: function(d) {
				drawToc(d.layers);
			}
			, error: function(e, s, t) {
				console.log("setToc error");
				console.log(e);
				console.log(s);
				console.log(t);
			}
		});
	};
	
	// drawToc: toc 그리기(default layer)
	function drawToc(d) {
		var $div = $("#" + config.toc.div);
		var ul = "<ul class='treeview'></ul>";
		var layerInfo = config.dynamic['default'];
		var useIds = "," + layerInfo.use.toString() + ",";
		
		$div.append(ul);
		
		for(var i in d) {
			var l = d[i];
			var id = "," + l.id + ",";
			
			if(useIds.indexOf(id) > -1) {
				// group 
				if(l.parentLayer == null) {
					var li = "<li id='" + l.id + "'>"
							+ "	<span><input type='checkbox' id='" + l.id + "' name='" + l.name + "' />" + l.name + "</span>"
							+ "	<ul class='sub" + l.id + "'></ul>"
							+ "</li>";
							
					$div.find('.treeview').append(li);
				} 
				
				// sub
				else {
					var s = l.drawingInfo.renderer.symbol;
					var li = "<li id='" + l.id + "'><div class='check'><input type='checkbox' id='" + l.id + "' name='" + l.name + "' /></div>";
					
					if(s != undefined) {
						if(s.type == 'esriPMS') {
							li += "<div class='image'><img src='" + layerInfo.url + "/" + l.id + "/images/" + s.url + "' /></div>";
						} else if(s.type == 'esriSMS') {
							li += "<div class='image'><div class='box' style='background-color: rgb(" + s.color[0] + ", " + s.color[1] + ", " + s.color[2] + ");'></div></div>";
						} else if(s.type == "esriSFS") {
							li += "<div class='image'><div class='line' style='background-color: rgb(" + s.color[0] + ", " + s.color[1] + ", " + s.color[2] + ");'></div></div>";
						} else {
							li += "<div class='image'><div class='blank'></div></div>";
						}
					} else {
						li += "<div class='image'><div class='blank'></div></div>";
					}
					
					li += "<div class='name'>" + l.name + "</div></li>";
					
					$div.find('.treeview .sub' + l.parentLayer.id).append(li);
				}
			}
		}
		
		$div.find('.treeview').treeview();
		
		// default on layers
		var vls = layerInfo.visibleLayers;
		
		if(vls.length != 0) {
			var vls_inputs = [];
						
			for(var i in vls) {
				vls_inputs.push($div.find("input[id='" + vls[i] + "']"));
			}
			 
			$(vls_inputs).each(function(i, o) {
				var $target = $(o);
				var vls_parent = $target.parents();
				var $group = $(vls_parent[3]);
				var $sub = $(vls_parent[2]);
				
				$target.prop("checked", true);
				
				// sub input 모두 체크 됐을 경우 -> group 체크
				if($sub.find("input").length == $sub.find("input:checked").length) {
					$group.find("span input").prop('checked', true);
				}
			});
		}
		
		setTocEvt();
	};
	
	// setTocEvt: tree event 설정
	function setTocEvt() {
		var $div = $("#" + config.toc.div);
		
		var $name = $div.find(".name");
		
		var $check = $div.find(".check");
		var $checkbox = $check.find("input");
		
		var $group = $div.find("li span input");
		
		var $allBtn = $("#" + config.toc.all);
		var $infoBtn = $("#" + config.toc.info);
		
		// 명세서 버튼 클릭
		$infoBtn.bind({
			click: function() {
				var u = "/nakdong/layerInfo.do?"
						+ "url=" + config.dynamic['default'].url
						+ "&use=" + config.dynamic['default'].use.toString();
						
				
				popup(u, 490, 300);
			}
		});
		
		// 레이어명 클릭 -> input toggle
		$name.bind({
			click: function(e, o) {
				var $t = $(e.currentTarget);
				var $p = $t.parent();
				var $i = $p.find('input');
				
				$i.prop('checked', !$i.prop('checked'));
				$i.trigger("change");
			}
		});
		
		// input: change
		$checkbox.bind({
			change: function(e) {
				var ctid = e.currentTarget.id;
				var $t = $(e.currentTarget);
				var $pi = $($t.parents()[3]).find('span input'); // group input
				var $si = $($t.parents()[3]).find('ul'); // sub ul
				
				var cc = e.currentTarget.checked;
				
				var $checked = $check.find("input:checked"); // checked inputs
				var list = [];
				
				// group 체크 됐는데 sub 하나 off 할 경우 -> group 체크해제
				if(cc == false || cc.toString().toLowerCase() == 'false') {
					$pi.prop('checked', false);
				}
				
				// sub input 모두 체크 됐을 경우 -> group 체크
				if($si.find("input").length == $si.find("input:checked").length) {
					$pi.prop('checked', true);
				}

				// layer on
				$checked.each(function(i, o) {
					list.push(parseInt(o.id));	
				});
				
				var lid = config.dynamic['default'].id;
				var layer = map.getLayer(lid);
				
				layer.setVisibleLayers(list);
				
				// 정보창 popup: 보관측소, 댐관측소
				var popupKeys = getObjectKeys(config.toc.popup).toString();
				var popupKeysStr = "," + popupKeys + ",";
				
				if(popupKeysStr.indexOf("," + ctid + ",") > -1 && cc) {
					var tpi = config.toc.popup[ctid];
					
					popup(tpi.url, tpi.width, tpi.height);
				}
			}
		});
		
		// group change
		$group.bind({
			change: function(e) {
				var id = e.currentTarget.id;
				var checked = e.currentTarget.checked;
				
				if(checked || checked.toString().toLowerCase() == "true") {
					$div.find("ul.sub" + id).find("input").prop('checked', true);
				} else {
					$div.find("ul.sub" + id).find("input").prop('checked', false);
				}
				
                $div.find("ul.sub" + id).find("input").trigger("change");
			}
		});
		
		// 전체선택 설정
		$allBtn.bind({
			click: function(e) {
				var title = e.currentTarget.title;
				
				// on
				if(title == config.toc.allOff) $group.prop('checked', true);
				
				// off
				else if(title == config.toc.allOn) $group.prop('checked', false);
				
				$group.trigger("change");
			}
		});
	};
	
	// setTocOpacity: default layer opacity slider
	function setTocOpacity() {
		var $div = $("#" + config.toc.opacity);
		var $bar = $div.find(".bar");
		
		$bar.on("slide", function(e, ui) {
			var v = ui.value;
			var o = parseInt(v) / 100;
			
			var l = map.getLayer(config.dynamic['default'].id);
			l.setOpacity(o);
		});
	};
	
	// setToolbar: toolbar 기능 설정
	function setToolbar() {
		var tc = {
			zoomin: 'toolbar_1'
			, zoomout: 'toolbar_2'
			, move: 'toolbar_3'
			, fullextent: {
				btn: 'toolbar_4'
				, center: config.center
				, zoom: config.zoom
			}
			, measurement: {
				btn: 'toolbar_5'
				, dialog: 'measurementDiv'
				, widget: 'measurementWidget'
			}
			, reset: 'toolbar_7'
			, print: {
				btn: 'toolbar_8'
				, loading: 'loadingPrint'
			}
			, identify: {
				btn: 'toolbar_9'
				, list: [1,2,12]
				, layer: map.getLayer(config.dynamic['default'].id)
				, url: config.dynamic['default'].url
				, listDiv: 'identifyListDiv'
				, infoDiv: 'identifyInfoDiv'
			}
		};
		
		var toolbar = new mapToolbar();
		toolbar.init(tc, map);
	};
	
	// 해당 위치로 map 이동
	this.moveForSearch = function(name, id, val) {
		var url = config.dynamic['default'].url;
		var field = getFieldForSearch(name);
		
		var findTask = new esri.tasks.FindTask(url);

        var findParams = new esri.tasks.FindParameters();
        findParams.returnGeometry = true;
        findParams.layerIds = [id];
        findParams.searchFields = [field];
		findParams.searchText = val;
		
        findTask.execute(findParams, function(results) {
			if(results.length != 0) {
				var result = results[0];
				var geometry = result.feature.geometry;
				var extent = geometry.getExtent();
				var center = extent.getCenter();
				
				map.centerAndZoom(center, 11);
			}
		});
	};
	
	// 검색할 필드명
	function getFieldForSearch(name) {
		var result = "";
		
		switch(name) {
			case '중권역':
				result = "MW_CODE";
				break;
			case '시도':
			case '시군구':
				result = "법정동코드";
				break;
		}
		
		return result;	
	};
	
	// get map object
	this.getMapObj = function() {
		return map;	
	};
	
	// error
	function error(err) {
		console.log("map error");
		console.log(err);
	};
};
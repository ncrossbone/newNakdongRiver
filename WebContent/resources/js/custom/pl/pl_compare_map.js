function plCompareMap() {
	var config = {};
	
	var map;
	var dynamic = {};
	var toc = {};
	
	var loaded = {
		success: false
		, count: 0
		, length: 0
	};
	
	var num;
	
	// start
	this.init = function(n) {
		var toggle1 = 'mapToggle1_' + n;
		var toggle2 = 'mapToggle2_' + n;
		
		num = n;
		config = {
			id: 'map' + num
			, div: 'map' + num
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
					url: mapUrl + '/arcgis/rest/services/ndk6/MapServer'
					, id: 'dynamic1' + num
					, opacity: 0.7
					, visible: true
					, use: [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]
					, visibleLayers: [24,31,32]
				}
			}
			, toc: {
				div: 'tocTreeview' + num
				, all: 'tocAllCheck' + num
				, allOn: '��ü����'
				, allOff: '��ü����'
				, opacity: 'tocOpacitySlider' + num
				, info: 'tocInfoBtn' + num
			}
			, scale: 'scaleView' + num
			, toggle: {
				'mapToggle1_1': {
					type: 'base'
					, id: 'layer0'
					, name: '����'
				}
				, 'mapToggle2_1': {
					type: 'nobase'
					, name: '�Ϲ�'
				}
				, 'mapToggle1_2': {
					type: 'base'
					, id: 'layer1'
					, name: '����'
				}
				, 'mapToggle2_2': {
					type: 'nobase'
					, name: '�Ϲ�'
				}
			}
		};
		
		dojo.ready(create);
	};
	
	// ceate: map, dynamic layer ����
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
	
	// setMap: map ����
	function setMap() {
		loaded.count++;
		
		if(loaded.length == loaded.count) {
			loaded.success = true;
			
			setToc();
			setTocOpacity();
			setToggle();
			setToolbar();
		
			window.setTimeout(drawScalebar, 2000);
			
			dojo.connect(map, "onExtentChange", showScale);
		}
	};
	
	// toggle basemap ����
	function setToggle() {
		var btns = [];
		
		if(num == 2) {
			btns.push($("#mapToggle1_2").get(0));
			btns.push($("#mapToggle2_2").get(0));
		} else if(num ==1) {
			btns.push($("#mapToggle1_1").get(0));
			btns.push($("#mapToggle2_1").get(0));
		}
		
		$(btns).each(function(i, obj) {
			var $newObj = $(obj);
			
			$newObj.click(function(o) {
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
				
				$(btns).find("input").prop("checked", false);
				$(bt).find("input").prop("checked", true);
			});
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
		
		$("#" + config.scale).empty();
		$("#" + config.scale).append(html);
	};
	
	// setToc: toc �׸��⸦ ���� json �޾ƿ���(default layer)
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
	
	// drawToc: toc �׸���(default layer)
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
				
				// sub input ��� üũ ���� ��� -> group üũ
				if($sub.find("input").length == $sub.find("input:checked").length) {
					$group.find("span input").prop('checked', true);
				}
			});
		}
		
		setTocEvt();
	};
	
	// setTocEvt: tree event ����
	function setTocEvt() {
		var $div = $("#" + config.toc.div);
		
		var $name = $div.find(".name");
		
		var $check = $div.find(".check");
		var $checkbox = $check.find("input");
		
		var $group = $div.find("li span input");
		
		var $allBtn = $("#" + config.toc.all);
		var $infoBtn = $("#" + config.toc.info);
		
		// ������ ��ư Ŭ��
		$infoBtn.bind({
			click: function() {
				var u = "/nakdong/layerInfo.do?"
						+ "url=" + config.dynamic['default'].url
						+ "&use=" + config.dynamic['default'].use.toString();
						
				
				popup(u, 490, 300);
			}
		});
		
		// ���̾�� Ŭ�� -> input toggle
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
				
				// group üũ �ƴµ� sub �ϳ� off �� ��� -> group üũ����
				if(cc == false || cc.toString().toLowerCase() == 'false') {
					$pi.prop('checked', false);
				}
				
				// sub input ��� üũ ���� ��� -> group üũ
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
				
				// ����â popup: ��������, �������
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
		
		// ��ü���� ����
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
	
	// setToolbar: toolbar ��� ����
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
				, dialog: 'measurementDiv' + num
				, widget: 'measurementWidget' + num
			}
			, reset: 'toolbar_7'
			, print: {
				btn: 'toolbar_8'
				, loading: 'loadingPrint'
			}
			, identify: {
				btn: 'toolbar_9'
				, layer: ''
				, noread: ''
			}
		};
		
		var toolbar = new mapToolbar();
		toolbar.init(tc, map);
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
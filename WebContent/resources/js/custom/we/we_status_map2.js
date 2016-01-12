function weStatusMap() {
	var config = {};
	
	var map = null;
	var dynamic = {};
	var toc = {};
	
	var ndk8 = "http://112.217.167.123:16080/arcgis/rest/services/ndk8/MapServer/";
	
	var data = [];
	
	var waterLayerBOD = null;
	var waterLayerBODPoint = null;

	var queryTask1 = null;
	var query1 = null;

	var queryTask2 = null;
	var query2 = null;
	
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
					url: mapUrl + '/arcgis/rest/services/ndk4/MapServer'
					, id: 'dynamic1'
					, opacity: 0.7
					, visible: true
					, use: [0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
					, visibleLayers: [19,20]
				}
				, 'search1': {
					url: mapUrl + '/arcgis/rest/services/ndk4/MapServer'
					, id: 'search1'
					, opacity: 1.0
					, visible: true
					, use: [17]
					, visibleLayers: []
				}
			}
			, toc: {
				div: 'tocTreeview'
				, all: 'tocAllCheck'
				, allOn: '��ü����'
				, allOff: '��ü����'
				, opacity: 'tocOpacitySlider'
				, info: 'tocInfoBtn'
				, popup: {
					'6': {
						url: '/nakdong/weInfoTPMV.do'
						, width: '570'
						, height: '830'
					}
				}
			}
			, toggle: {
				'mapType_label_1': {
					type: 'base'
					, id: 'layer0'
					, name: '����'
				}
				, 'mapType_label_2': {
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
		
			getRiverData();
			
			window.setTimeout(drawOverview, 2000);
			window.setTimeout(drawScalebar, 2000);
			
			dojo.connect(map, "onExtentChange", showScale);
		}
	};
	
	// toggle basemap ����
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
//			var temp = new esri.dijit.Scalebar({
//				map: map,
//				attachTo: 'bottom-left',
//				scalebarUnit: 'metric'
//			}); 
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
		
		
		var str = "<li id='Wgl'>"
			+ "<span><input type='checkbox' id='Wgl' name='��Ȱȯ�����' />��Ȱȯ�����</span>"
			+ "<ul class='subWgl'>"
			+ "	<li>"
			+ "		<div class='check'><input type='checkbox' id='wglInput1' name='BOD'/></div>"
			+ "		<div class='image'><img src='' /></div>"
			+ "		<div class='name'>BOD</div>"
			+ "	</li>"
//			+ "	<li>"
//			+ "		<div class='check'><input type='checkbox' id='wglInput2' name='T-P'/></div>"
//			+ "		<div class='image'><img src='' /></div>"
//			+ "		<div class='name'>T-P</div>"
//			+ "	</li>"
			+ "</ul>"
			+ "</li>";

		$div.find('ul').append(str);
		
		$("#Wgl #Wgl").prop('checked', true);
		$("#Wgl #wglInput1").prop('checked', true);
		
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
		
		// ���� ��ư Ŭ��
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
				
				if(ctid != wglInput1) {
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
					
					// ����â popup: ������������
					var popupKeys = getObjectKeys(config.toc.popup).toString();
					var popupKeysStr = "," + popupKeys + ",";
					
					if(popupKeysStr.indexOf("," + ctid + ",") > -1 && cc) {
						var tpi = config.toc.popup[ctid];
						
						popup(tpi.url, tpi.width, tpi.height);
					}
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
		
		// ��Ȱȯ����� - BOD on/off
		var wglInput = $("#" + wglInput1);
		
		wglInput.bind({
			change: function(e) {
				var checked = e.currentTarget.checked;
				var groupInput = $("#Wgl #Wgl");
				
				if(checked || checked.toString().toLowerCase() == "true") {
					waterLayerBOD.show();
					 waterLayerBODPoint.show();
					 
					 groupInput.prop('checked', true);
				} else {
					waterLayerBOD.hide();
					 waterLayerBODPoint.hide();
					 
					 groupInput.prop('checked', false);
				}
			}
		});
		
		$("#tocMin").trigger("click");
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
				, list: [1]
				, layer: map.getLayer(config.dynamic['default'].id)
				, url: config.dynamic['default'].url
				, listDiv: 'identifyListDiv'
				, infoDiv: 'identifyInfoDiv'
				, isDBData: true
			}
		};
		
		var toolbar = new mapToolbar();
		toolbar.init(tc, map);
	};
	
	// �ش� ��ġ�� map �̵�
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
				var center = null;
				
				if(geometry.type == 'point') {
					center = geometry;
				} else if(geometry.type == 'polygon') {
					var extent = geometry.getExtent();
					center = extent.getCenter();	
				}
				
				map.centerAndZoom(center, 11);
			}
		});
	};
	
	// �˻��� �ʵ��
	function getFieldForSearch(name) {
		var result = "";
		
		switch(name) {
			case '��õ��':
				result = "�������ڵ�";
				break;
			case '�ұǿ�':
				result = "SW_CODE";
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
	
	// ��Ȱȯ����� BOD - ������ �ҷ�����
	function getRiverData() {
		$.ajax({
			url: './we/waterDataForMap.json'
			, type: 'get'
			, contentType: "charset=euc-kr"
			, async: false
			, dataType: 'json'
			, success: function(d) {
				setWaterDataBODMap(d.result);
			}
		});
	};
	
	// ��Ȱȯ����� BOD - �ɺ�, ���̾� ����
	function setWaterDataBODMap(d) {
		
		// DB���� ������ ������ ����
		for(var i in d) {
			var n = d[i];
			
			data[n.PT_NM] = {
				'PT_NO' : n.PT_NO
				, 'PT_NM' : n.PT_NM
				, 'WMYR': n.WMYR
				, 'VALUE' : n.BOD
				, 'ICON' : getSymbol(n.BOD).pictureSymbol
				, 'RIVER' : getSymbol(n.BOD).lineSymbol
				, 'TEXT': getSymbol(n.BOD).text
			};
		}

		var layerDefinition = {
			"geometryType": "esriGeometryPolygon",
			"fields": [{
				"name": "BUFF_DIST",
				"type": "esriFieldTypeInteger",
				"alias": "Buffer Distance"
				}]
		};
		
		var featureCollection = {
			layerDefinition: layerDefinition,
			featureSet: null
		};

		// ��õ ���̾� ����
    	waterLayerBOD =  new esri.layers.FeatureLayer(featureCollection, {
    		mode: esri.layers.FeatureLayer.MODE_SNAPSHOT
		});
    	
    	// �߱ǿ� ��ǥ���� ���̾� ����
    	waterLayerBODPoint =  new esri.layers.FeatureLayer(featureCollection, {
    		mode: esri.layers.FeatureLayer.MODE_SNAPSHOT
		});
    	
    	// ���̾� �߰� 
		map.addLayers([waterLayerBOD, waterLayerBODPoint]);
		
		// query
		setQueryTask1();
		setQueryTask2();
	};
	
	// ��õ���̾� - mapserver�� query ��û
	function setQueryTask1() {
		queryTask1 = new esri.tasks.QueryTask(ndk8 + '1');
		
		query1 = new esri.tasks.Query();
		query1.returnGeometry = true;
		query1.outFields = ["�����Ҹ�"];
		query1.where = "1=1";
		
		queryTask1.execute(query1, function(featureSet) {
        	var features = featureSet.features;
        	
        	for(var i in features) {
        		var f = features[i];
        		var a = f.attributes;
        		
        		var name = a['�����Ҹ�'];
        		var value = (typeof data[name] != "undefined") ? data[name].VALUE : '';

        		// graphic�� ������ ����
//        		f.setAttributes({
//        			'value': value
//        			, 'name': name
//        		});
        		
        		// graphic�� symbol ����
        		f.setSymbol(data[name].RIVER);

        		// ��õ ���̾ graphic �߰� 
        		waterLayerBOD.add(f);
        	}
        });
	};

	// �߱ǿ� ��ǥ���� ���̾� - mapserver�� query ��û
	function setQueryTask2() {
		queryTask2 = new esri.tasks.QueryTask(ndk8 + '0');
		
		query2 = new esri.tasks.Query();
		query2.returnGeometry = true;
		query2.outFields = ["*"];
		query2.where = "1=1";
		
		var font = new esri.symbol.Font();
        font.setSize(12);
        font.setFamily('����ü,Doutm,Verdana,Tahoma');
		
		queryTask2.execute(query2, function(featureSet) {
        	var features = featureSet.features;
        	
        	for(var i in features) {
        		var f = features[i];
        		var a = f.attributes;
        		
        		var name = a['�����Ҹ�'];
        		var value = (typeof data[name] != "undefined") ? data[name].VALUE : '';
        		var text = (typeof data[name] != "undefined") ? data[name].TEXT : '';

        		// graphic�� ������ ����
//        		f.setAttributes({
//        			'value': value
//        			, 'name': name
//        			, 'text': text
//        		});
        		
        		// grpahic�� �ɺ� �߰�
        		if(typeof data[name] != "undefined") {
        			// ������
        			f.setSymbol(data[name].ICON);
        			waterLayerBODPoint.add(f);
        			
        			// �ؽ�Ʈ
        			var textSymbol = new esri.symbol.TextSymbol(name + "\n" + value + "(" + text + ")");
        			textSymbol.setFont(font);
        			textSymbol.setColor(new esri.Color("#fff"));
        			textSymbol.setKerning(false);
        			textSymbol.setAlign(esri.symbol.TextSymbol.ALIGN_START);
        			textSymbol.setOffset(50, -4);
        			
        			var labelPointGraphic = new esri.Graphic(f.geometry, textSymbol);
        			waterLayerBODPoint.add(labelPointGraphic);
        		}
        	}
        });
	};
	
	// �����ͺ� �ɺ� ��������
	function getSymbol(value) {
		var pSymbol; // picture symbol
		var lSymbol; // line symbol
		var text; // text
		
		var num = 0; 
		
		// picture symbol�� ����� image
		var imgList = ['./resources/images/map/water0_2.png'
	               					  , './resources/images/map/water1_2.png' 
	               					  , './resources/images/map/water2_2.png' 
	               					  , './resources/images/map/water3_2.png' 
	               					  , './resources/images/map/water4_2.png' 
	               					  , './resources/images/map/water5_2.png' 
	               					  , './resources/images/map/water6_2.png'];
		
		// line symbol�� ����� color
		var colorList = [[2,158,217,1]
										,[0,181,173,1]
										, [151,203,89,1]
										, [149,176,190,1]
										, [253,185,19,1]
										, [246,139,31,1]
										, [239,66,35,1]
										, [180,180,180,1]];
		
		// ��ġ�� üũ
		if(value <= 1) {num = 0; text = '�ſ�����'; }
		else if(value > 1 && value <= 2) { num = 1; text = '����'; }
		else if(value > 2 && value <= 3) { num = 2; text = '�ణ����'; }
		else if(value > 3 && value <= 5) { num = 3; text = '����'; }
		else if(value > 5 && value <= 8) { num = 4; text = '�ణ����'; }
		else if(value > 8 && value <= 10) { num = 5; text = '����'; }
		else if(value > 10) { num = 6; text = '�ſ쳪��'; }
		else { num = 7; text = '������ ����'; }

		// picture marker symbol: ����� icon
		pSymbol = new esri.symbol.PictureMarkerSymbol({
			'url': imgList[num]
		});
		
		pSymbol.setWidth(150);
		pSymbol.setHeight(36);
		pSymbol.setOffset(150/2, 0);
		
		// simple fill symbol: ��õ ����
		lSymbol = new esri.symbol.SimpleFillSymbol(
			esri.symbol.SimpleFillSymbol.STYLE_SOLID, 
			new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color(colorList[num]), 2),
			new dojo.Color(colorList[num])
		);
		
		return {'pictureSymbol': pSymbol, 'lineSymbol': lSymbol, 'text': text};
	};
};
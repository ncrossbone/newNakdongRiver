$("#map").ready(function() {
	dsnMap.init();
});

var dsnMap = {
	map: null
	, vlayer: null // vworld layer
	, blayer: null // 배경 하천 layer
	, player: null // 중권역대표지점 layer
	, llayer: null // 중권역대표지점 label layer
	, rlayer: null // 하천 layer
	
	, url: 'http://112.217.167.123:16080/arcgis/rest/services/ndk8/MapServer/'
		
	, pointList: []

	, num: null
	, timeout: null
	, time: 5000
	
	// init
	, init: function() {
		esriConfig.defaults.io.proxyUrl = '/jsp/common/proxy.jsp';
			
		dojo.require("esri/map");
		
		dojo.require("esri.layers.FeatureLayer");
		dojo.require("esri.layers.LabelLayer");

		dojo.require("esri.symbols.SimpleFillSymbol");
		dojo.require("esri.symbols.SimpleLineSymbol");
		dojo.require("esri.symbols.PictureMarkerSymbol");
		dojo.require("esri.symbols.TextSymbol");
		dojo.require("esri.symbols.Font");
		dojo.require("esri.renderers.SimpleRenderer");
		
		dojo.require("esri/geometry/Extent");
		
		dojo.require("esri/SpatialReference");
		dojo.require("esri.Color");
		dojo.require("esri.graphic");
		
		dojo.require("dojo/domReady!");
		
		dojo.ready(function() {
			dsnMap.esriDeclare();
			dsnMap.create();
		});
	}

	// vworld -> tiledmap
	, esriDeclare: function() {
		dojo.declare("VworldLayer", esri.layers.TiledMapServiceLayer, {
			constructor: function () {
				this.tileInfo = new esri.layers.TileInfo({
					"rows": 256
					, "cols": 256
					, "dpi": 96
					, "format": "PNG"
					, "compressionQuality": 0
					, "origin": { "x" : 13462700, "y": 5322463 }
					, "spatialReference" : { "wkid": 102113 }
					, "lods": [
						{ "level": 0, "resolution": 1222.99245256249, "scale": 4622324.434309 },
						{ "level": 1, "resolution": 611.49622628138, "scale": 2311162.217155 },
						{ "level": 2, "resolution": 305.748113140558, "scale": 1155581.108577 },
						{ "level": 3, "resolution": 152.874056570411, "scale": 577790.554289 },
						{ "level": 4, "resolution": 76.4370282850732, "scale": 288895.277144 },
						{ "level": 5, "resolution": 38.2185141425366, "scale": 144447.638572 },
						{ "level": 6, "resolution": 19.1092570712683, "scale": 72223.819286 },
						{ "level": 7, "resolution": 9.55462853563415, "scale": 36111.909643 },
						{ "level": 8, "resolution": 4.77731426794937, "scale": 18055.954822 },
						{ "level": 9, "resolution": 2.38865713397468, "scale": 9027.977411 },
						{ "level": 10, "resolution": 1.19432856685505, "scale": 4513.988705 },
						{ "level": 11, "resolution": 0.597164283559817, "scale": 2256.994353 }
					]
				});
				
				this.fullExtent =new esri.geometry.Extent(13846870.019949863, 3884784.7837452833, 14698072.766933357, 4660161.998669902, {'wkid': 102113});
				
				this.loaded = true;
				this.onLoad(this);
			},
	
			getTileUrl: function (level, row, col) {
				var returnUrl = "";

	            var newrow = row + (Math.pow(2, level) * 47);
	            var newcol = col + (Math.pow(2, level) * 107);
	            
	            returnUrl = "http://xdworld.vworld.kr:8080/2d/Base/201310/" + (level + 7) + "/" + newcol + "/" + newrow + ".png";
	            
	            return returnUrl;
			}
		});
	}
	
	// map create
	, create: function() {
		// map
		this.map = new esri.Map("map", {
			basemap: 'satellite'
			, center: [128.85936760252812, 35.92656631015722]
			, zoom: 8
			, slider: false
			, logo: false
			, showAttribution: false
			, fadeOnZoom: false
			, autoResize: true
		});
		
		// vworld layer
//		this.setVworldLayer();
		
	    // 배경맵 숨기기
//	    var ids = this.map.basemapLayerIds[0];
//	    var bl = this.map.getLayer(ids);
//	    bl.hide();
	    
	    // 배경하천 layer
	    this.setBgLayer();
	    
	    // 중권역대표지점 layer - 데이터 불러오기
	    this.getRiverData();
	}
	
	// vworld layer 설정
	, setVworldLayer: function() {
		this.vlayer  = new VworldLayer();
	    this.map.addLayer(this.vlayer);
	}
	
	// 배경하천 layer 설정
	, setBgLayer: function() {
		var imageParameters = new esri.layers.ImageParameters();
		imageParameters.format = "PNG24";
		
		this.blayer = new esri.layers.ArcGISDynamicMapServiceLayer(this.url, {
			id: 'bgLayer'
			, imageParameters: imageParameters
			, visible: true
		});

		this.blayer.setVisibleLayers([2]); // 기본으로 보여질 레이어 ID
	    this.map.addLayer(this.blayer);
	}
	
	// 중권역대표지점 layer - 데이터 불러오기
	, getRiverData: function() {
		$.ajax({
			url: './db/dsnMapData1.json'
			, type: 'get'
			, contentType: "charset=euc-kr"
			, async: false
			, dataType: 'json'
			, success: function(d) {
				dsnMap.setPointLayer(d.result);
			}
		});
	}
	
	// 중권역대표지점 layer - 심볼, 레이어 설정
	, setPointLayer: function(d) {
		var bod = [];
		var tp = [];
		
		for(var i in d) {
			var n = d[i];
			
			bod.push({
				'PT_NO' : n.PT_NO,
				'PT_NM' : n.PT_NM,
				'WMYR': n.WMYR,
				'WMOD': n.WMOD,
				'TYPE' : 'BOD',
				'VALUE' : n.BOD,
				'ICON' : this.getSymbol('BOD', n.BOD).pictureSymbol,
				'RIVER' : this.getSymbol('BOD', n.BOD).lineSymbol,
				'DATA' : [ n.BOD, n.COD, n.TP, n.Chla ]
			});
			
			tp.push({
				'PT_NO' : n.PT_NO,
				'PT_NM' : n.PT_NM,
				'WMYR': n.WMYR,
				'WMOD': n.WMOD,
				'TYPE' : 'TP',
				'VALUE' : n.TP,
				'ICON' : this.getSymbol('TP', n.TP).pictureSymbol,
				'RIVER' : this.getSymbol('TP', n.TP).lineSymbol,
				'DATA' : [ n.BOD, n.COD, n.TP, n.Chla ]
			});
		}

		this.pointList = bod.concat(tp);

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
		
		// 하천 레이어 생성
		this.rlayer =  new esri.layers.FeatureLayer(featureCollection, {
    		mode: esri.layers.FeatureLayer.MODE_SNAPSHOT
		});

		// 중권역 대표지점 레이어 생성
		this.player =  new esri.layers.FeatureLayer(featureCollection, {
    		mode: esri.layers.FeatureLayer.MODE_SNAPSHOT
		});
		
		this.map.addLayers([this.rlayer, this.player]);
		
		// 애니메이션 start
		this.rlayer.hide();
		this.player.hide();
		
		this.num = 0;
		this.animateRiver();
	}
	
	//  애니메이션 start!!!!
	, animateRiver: function() {
		if(this.num == this.pointList.length) {
			this.num = 0;
		} 
		
		else {
			var now = this.pointList[this.num];
			
			var queryTask = new esri.tasks.QueryTask(this.url + "1");
			var queryTask2 = new esri.tasks.QueryTask(this.url + "0");
			
			var query = new esri.tasks.Query();
			query.returnGeometry = true;
			query.outFields = ["*"];
			query.where = "측정소명 = '" + now.PT_NM + "'";
			
			var that = this;
			
			// 하천 레이어 query
			queryTask.execute(query, function(featureSet) {
	        	var features = featureSet.features;
	        	
	        	if(features.length != 0) {
	        		var f = features[0];
	        		
	    			f.setSymbol(now.RIVER);
	    			
	    			that.rlayer.clear();
	    			that.rlayer.add(f);
	    			that.rlayer.show();
	        	}
			});
			
			// 중권역 대표지점 레이어 query
			queryTask2.execute(query, function(featureSet) {
	        	var features = featureSet.features;
	        	
	        	if(features.length != 0) {
	        		var f = features[0];

        			// 아이콘
	    			f.setSymbol(now.ICON);
        			
        			// 텍스트
	    			var font = new esri.symbol.Font();
	    	        font.setSize(12);
	    	        font.setFamily('돋움체,Doutm,Verdana,Tahoma');
	    	        
        			var textSymbol = new esri.symbol.TextSymbol(now.PT_NM + "(" + now.WMYR + "-" + now.WMOD + ")\n" + now.TYPE+ ": " + now.VALUE);
        			textSymbol.setFont(font);
        			textSymbol.setColor(new esri.Color("#fff"));
        			textSymbol.setKerning(false);
        			textSymbol.setAlign(esri.symbol.TextSymbol.ALIGN_START);
        			textSymbol.setOffset(40, -4);
        			
        			var labelPointGraphic = new esri.Graphic(f.geometry, textSymbol);
        			
        			that.player.clear();
        			that.player.add(f);
        			that.player.add(labelPointGraphic);
	    			that.player.show();
	        	}
			});
		        
			// table 설정
			$("#valName").html(now.PT_NM + "<br/>(" + now.WMYR + "-" + now.WMOD + ")");
			$("#valBOD").html(now.DATA[0]).attr("class", this.getSymbol('BOD', now.DATA[0]).tableClass);
			$("#valTP").html(now.DATA[2]).attr("class", this.getSymbol('TP', now.DATA[2]).tableClass);
			
			this.num++;
		}
		
		this.timeout = setTimeout(function() {
			dsnMap.animateRiver();
		}, this.time);	
	}
	
	// 수치별 image, color, class 가져오기
	, getSymbol: function(type, value) {
		var pSymbol; // picture symbol
		var lSymbol; // line symbol
		
		var num = 0; 
		
		// picture symbol에 사용할 image
		var imgList = ['./resources/images/map/water0_2.png'
	               					  , './resources/images/map/water1_2.png' 
	               					  , './resources/images/map/water2_2.png' 
	               					  , './resources/images/map/water3_2.png' 
	               					  , './resources/images/map/water4_2.png' 
	               					  , './resources/images/map/water5_2.png' 
	               					  , './resources/images/map/water6_2.png'];
		
		// line symbol에 사용할 color
		var colorList = [[2,158,217,1]
										,[0,181,173,1]
										, [151,203,89,1]
										, [149,176,190,1]
										, [253,185,19,1]
										, [246,139,31,1]
										, [239,66,35,1]];
		
		// table class에 사용할 class명
		var classList = ['color1'
		                 			, 'color2'
		                 			, 'color3'
		                 			, 'color4'
		                 			, 'color5'
		                 			, 'color6'
		                 			, 'color7'];
		
		switch(type) {
			case 'BOD':
				if(value <= 1) num = 0;
				else if(value > 1 && value <= 2) num = 1;
				else if(value > 2 && value <= 3) num = 2;
				else if(value > 3 && value <= 5) num = 3;
				else if(value > 5 && value <= 8) num = 4;
				else if(value > 8 && value <= 10) num = 5;
				else if(value > 10) num = 6;
				
				break;
				
			case 'TP':
				if(value <= 0.02) num = 0;
				else if(value > 0.02 && value <= 0.04) num = 1;
				else if(value > 0.04 && value <= 0.1) num = 2;
				else if(value > 0.1 && value <= 0.2) num = 3;
				else if(value > 0.2 && value <= 0.3) num = 4;
				else if(value > 0.3 && value <= 0.5) num = 5;
				else if(value > 0.5) num = 6;
				
				break;
		}

		// picture marker symbol: 물방울 icon
		pSymbol = new esri.symbol.PictureMarkerSymbol({
			'url': imgList[num]
		});
		
		pSymbol.setWidth(180);
		pSymbol.setHeight(36);
		pSymbol.setOffset(150/2, 0);
		
		// simple fill symbol: 하천 색깔
		lSymbol = new esri.symbol.SimpleFillSymbol(
			esri.symbol.SimpleFillSymbol.STYLE_SOLID, 
			new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color(colorList[num]), 2),
			new esri.Color(colorList[num])
		);
		
		return {'pictureSymbol': pSymbol, 'lineSymbol': lSymbol, 'tableClass': classList[num] };	
	}
};
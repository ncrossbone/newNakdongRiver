function Identify() {
	var map = null;
	var list = null;
	var layer = null;
	var url = null;
	var identifyEvt = null;
	var listDiv = null;
	var infoDiv = null;
	var isDBData = null;
	
	var list2 = null;
	var layer2 = null;
	var url2 = null;
	
	// identify init
	this.init = function(config) {
		if(config.map != undefined) map = config.map;
		if(config.list != undefined) list = config.list;
		if(config.layer != undefined) layer = config.layer;
		if(config.url != undefined) url = config.url;
		
		if(config.list2 != undefined) list2 = config.list2;
		if(config.layer2 != undefined) layer2 = config.layer2;
		if(config.url2 != undefined) url2 = config.url2;
		
		if(config.listDiv != undefined) listDiv = config.listDiv;
		if(config.infoDiv != undefined) infoDiv = config.infoDiv;
		if(config.isDBData != undefined) isDBData = config.isDBData;
		
		setMapClick();
	};
	
	// return identify event
	this.getEvt = function() {
		return identifyEvt;
	};
	
	// setting: map click event
	function setMapClick() {
		identifyEvt = dojo.connect(map, "onClick", function(evt) {
			if(layer.id == "searchResultLayer") {
				layer = map.getLayer("searchResultLayer");				
			}
			
			getIdentifyTask(layer, url, list, evt);
			
//			if(layer2 != null && url2 != null && list2 != null) {
//				getIdentifyTask(layer2, url2, list2, evt);
//			}
		});
	};
	
	function getIdentifyTask(iLayer, iUrl, iList, evt) {
		var visibleLayers = iLayer.visibleLayers;
		var identifyTask = new esri.tasks.IdentifyTask(iUrl);
		var identifyParams = new esri.tasks.IdentifyParameters();
		
	    identifyParams.tolerance = 10;
		identifyParams.layerIds = [visibleLayers];
	    identifyParams.returnGeometry = true;
	    identifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
	    identifyParams.width  = map.width;
	    identifyParams.height = map.height;
	    identifyParams.geometry = evt.mapPoint;
	    identifyParams.mapExtent = map.extent;
		
		var deferred = identifyTask.execute(identifyParams);
		
		deferred.addCallback(function(response){
			var newResponse = [];
			
			for(var i in response) {
				var ls = "," + iList.toString() + ",";
				var is = "," + response[i].layerId + ",";
				
				if(ls.indexOf(is) > -1) {
					newResponse.push(response[i]);
				}	
			}
			
			// points 
			if(newResponse != null && newResponse.length > 1) {
				drawPointList(newResponse);
	            return;
	        }
			
			// one point
			else if(newResponse != null && newResponse.length == 1) {
				if(isDBData != null) {
					var str_isDBData = isDBData.toString();
					str_isDBData = "," + str_isDBData + ",";
					
					if(str_isDBData.indexOf(newResponse[0].layerId) > -1)
						setPointInfoDB(newResponse[0]);
					else
						setPointInfoFeature(newResponse[0]);
				}
				else
					setPointInfoFeature(newResponse[0]);
					
				return;
	        }
		});
	};
	
	// draw point list box
	function drawPointList(response) {
		var $listDiv = $("#" + listDiv);
		var ids = [];
		
		// html draw
		var html = "<div>"
					+ "	<table border='0' cellpadding='0' cellspacing='0'>"
					+ "		<thead>"
					+ "			<th class='layer'>레이어명</th>"
					+ "			<th class='name'>지점명</th>"
					+ "		</thead>"
					+ "		<tbody>";
					
		for(var i in response) {
			var point = response[i];
			var layerName = point.layerName;
			var attrName = getAttrName(layerName);
			var pointName = point.feature.attributes[attrName];
			var id = listDiv + "_row_" + i;
			
			ids[id] = point;
			
			if(layerName == 'NAKDONG_GIS_AIR') layerName = '대기';
			else if(layerName == 'NAKDONG_GIS_ANIMAL') layerName = '수질';
			else if(layerName == 'NAKDONG_GIS_WATER') layerName = '축산폐수';
			
			html += "<tr id='" + id + "'>"
					  + "		<td class='layer'>" + layerName.replace('(', '<br>(') + "</td>"
					  + "		<td class='name'>" + pointName + "</td>"
					  + "</tr>";
		}
			
		html += "</tbody></table></div>";
		
		$listDiv.empty();
		$listDiv.append(html);
		
		$listDiv.dialog({
			autoOpen: true
			, closeOnEscape: false
			, resizable: false
			, maxHeight: 200
			, create: function(evt, ui) {
				var $content = $(evt.target);
				var $dialog = $content.parent();
				
				// title: title image, min button
				var title = "<div class='title'><img src='/nakdong/resources/images/map/identifyList_title.png' /></div>"
							+ "<div class='btn'><img src='/nakdong/resources/images/map/dialog_title_btn_close.png' class='close' /></div>";
				
				$dialog.find(".ui-dialog-title").empty();
				$dialog.find(".ui-dialog-title").append(title);
				
				// close button click event
				$dialog.find(".ui-dialog-title .btn .close").bind({
					click: function() {
						$listDiv.dialog("close");
					}
				});
			}
		});

		// row click event
		for(var i in ids) {
			var $row = $("#" + i);
			
			$row.bind("click", function() {
				var rowID = this.id;
				var tempIds = ids[rowID];

				if(isDBData != null) {
					var str_isDBData = isDBData.toString();
					str_isDBData = "," + str_isDBData + ",";
					
					if(str_isDBData.indexOf(tempIds.layerId) > -1)
						setPointInfoDB(tempIds);
					else
						setPointInfoFeature(tempIds);
				}
				else
					setPointInfoFeature(tempIds);
				
				$listDiv.dialog("close");
			});
		}
	};
	
	// set point info: DB
	function setPointInfoDB(response) {
		var layerName = response.layerName;
		var url = "";
		
		drawGraphic(layerName, response.feature);
		
		if(layerName == "하천수") {
			url = "/nakdong/we/weStatus_search3.json?ptno=" + response.feature.attributes['측정소코드'];
			
			$.ajax({
				url: url
				, success: function(d) {
					var result = d.result;
					
					drawPointInfoDb(result, layerName);
				}
			});
		}
	};
	
	function drawPointInfoDb(data, layerName) {
		var list = [];
		
		if (layerName == "하천수") {
			list['PT_NM'] = '측정소명';
			list['WMYR'] = '년';
			list['WMOD'] = '월';
			list['WMWK'] = '회차';
			list['ITEM_TEMP'] = '수온';
			list['ITEM_PH'] = 'PH';
			list['ITEM_DOC'] = 'DO';
			list['ITEM_BOD'] = 'BOD';
			list['ITEM_COD'] = 'COD';
			list['ITEM_SS'] = 'SS';
			list['ITEM_TN'] = '총질소';
			list['ITEM_TP'] = '총인';
		}
		
		var $infoDiv = $("#" + infoDiv);
		
		var html = "<div class='content'>"
					+ "	<table border='0' cellpadding='0' cellspacing='0'>"
					+ "		<thead>"
					+ "			<tr>";
					
		for(var i in list) {
			html += "<th class='value'>" + list[i] + "</th>";
		}
		
		html += "</tr></thead><tbody>";
		
		for(var i in data) {
			html += "<tr>";
			
			for(var j in list) {
				html += "	<td class='value'>" + data[i][j] + "</td>";
			}
			
			html += "</tr>";
		}
		
		html += "</tbody>";
		html += "</table>";
		html += "</div>";
		
		$infoDiv.empty();
		$infoDiv.append(html);
		
		$infoDiv.dialog({
			autoOpen: true
			, closeOnEscape: false
			, resizable: false
			, width: 550
			, maxHeight: 300
			, create: function(evt, ui) {
				var $content = $(evt.target);
				var $dialog = $content.parent();
				
				// title: title image, min button
				var title = "<div class='title'><img src='/nakdong/resources/images/map/identifyInfo_title.png' /></div>"
							+ "<div class='btn'><img src='/nakdong/resources/images/map/dialog_title_btn_close.png' class='close' /></div>";
				
				$dialog.find(".ui-dialog-title").empty();
				$dialog.find(".ui-dialog-title").append(title);
				
				// min button click event
				$dialog.find(".ui-dialog-title .btn .close").bind({
					click: function() {
						$infoDiv.dialog("close");
						map.graphics.clear();
					}
				});
			}
		});
	};
	
	// set point info: feature
	function setPointInfoFeature(response) {
		var layerName = response.layerName;
		var attr = response.feature.attributes;
		
		var tempData = [];
		
		var list = getInfoList(layerName);
		
		for(var i in list) {
			tempData[list[i].TEXT] = attr[i];
		}
		
		drawGraphic(layerName, response.feature);
		drawPointInfo(tempData, layerName);

		if(typeof pageView.mapToChart != "undefined") {
			pageView.mapToChart({
				layer: layerName
				, data: attr
			});
		}
	};
	
	// draw line or symbol
	function drawGraphic(layerName, feature) {
		var sys;
		
		switch(layerName) {
			case '중권역':
			case '시군구':
				sys = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0, 0.5]), 3);		
				break;
			case '하천수':
			case '취수장':
			case '정수장':
			case 'NAKDONG_GIS_AIR':
			case 'NAKDONG_GIS_ANIMAL':
			case 'NAKDONG_GIS_WATER':
				sys = new esri.symbol.PictureMarkerSymbol('/nakdong/resources/images/map/point_selected.png', 51, 51);
				sys.setOffset(-15, 30);
				break;
		}
		
		var graphic = new esri.Graphic(feature.geometry, sys);
		
		map.graphics.clear();
        map.graphics.add(graphic);
	};
	
	// draw point info: feature
	function drawPointInfo(data, layerName) {
		if(data == undefined || data == typeof(undefined) || data == null) {
			alert('해당 지점의 데이터가 없습니다');
			return;
		}
		
		var $infoDiv = $("#" + infoDiv);
		
		var html = "<div class='content'>"
					+ "	<table border='0' cellpadding='0' cellspacing='0'>"
					+ "		<tbody>";
		
		for(var i in data) {
			if(i.indexOf("(none)") > -1) continue;
			
			html += "<tr>"
					  + "	<td class='type'>" + i + "</td>"
					  + "	<td class='value'>" + data[i] + "</td>"
					  + "</tr>";
		}
		
		html += "</tbody></table></div>";
		
		$infoDiv.empty();
		$infoDiv.append(html);
		
		$infoDiv.dialog({
			autoOpen: true
			, closeOnEscape: false
			, resizable: false
			, maxHeight: 300
			, create: function(evt, ui) {
				var $content = $(evt.target);
				var $dialog = $content.parent();
				
				// title: title image, min button
				var title = "<div class='title'><img src='/nakdong/resources/images/map/identifyInfo_title.png' /></div>"
							+ "<div class='btn'><img src='/nakdong/resources/images/map/dialog_title_btn_close.png' class='close' /></div>";
				
				$dialog.find(".ui-dialog-title").empty();
				$dialog.find(".ui-dialog-title").append(title);
				
				// min button click event
				$dialog.find(".ui-dialog-title .btn .close").bind({
					click: function() {
						$infoDiv.dialog("close");
						map.graphics.clear();
					}
				});
			}
		});
	};
	
	// 레이어명 가져오기
	function getAttrName(name) {
		var result = "";
		
		switch(name) {
			case '중권역':
				result = "MW_NAME";
				break;
			case '하천수':
				result = "측정소명";
				break;
			case '시군구':
				result = "CTY_NM";
				break;
			case '취수장':
				result = "취수장명";
				break;
			case '정수장':
				result = "정수장명";
				break;
			case 'NAKDONG_GIS_AIR':
			case 'NAKDONG_GIS_ANIMAL':
			case 'NAKDONG_GIS_WATER ':
				result = "BIZ_NAME";
				break;
		}
		
		return result;
	};
	
	// 출력할 정보 리스트 가져오기
	function getInfoList(name) {
		var result = {};
		
		switch(name) {
			case '중권역':
				result = {
					'MW_NAME': { TEXT: '중권역명' }
					, '중권역면적': { TEXT: '중권역면적' }
					, '대표지점명': { TEXT: '대표지점명' }
					, 'BOD_15년': { TEXT: '목표수질 BOD' }
					, 'TP_15년': { TEXT: '목표수질 TP' }
					/*
					, 'STR_NAME': { TEXT: '하천명' }
					, 'STR_LEVEL': { TEXT: '하천등급' }
					, 'DIVLOC': { TEXT: '분할지점' }
					, 'MW_PERI': { TEXT: '표준유역둘레길이' }
					, 'MW_AREA': { TEXT: '표준유역면적' }
					, 'UPWS_AREA': { TEXT: '상류유역면적' }
					*/
				};
				break;
			case '시군구':
				result = {
					'DO_NM': { TEXT: '시도명' }
					, 'CTY_NM': { TEXT: '시군구명' }
				};
				break;
			case '하천수':
				result = {
					'측정소명': { TEXT: '측정소명' }
					, '권역': { TEXT: '권역' }
					, '수계': { TEXT: '수계' }
					, '중권역명': { TEXT: '중권역명' }
					, '채수지점': { TEXT: '채수지점' }
					, '유량조사지': { TEXT: '유량조사지' }
					, '조사기관': { TEXT: '조사기관' }
				};
				break;
			case '취수장':
				result = {
					'취수장명': { TEXT: '취수장명' }
					, '주소': { TEXT: '주소' }
					, '나머지주소': { TEXT: '나머지주소' }
					, '대책수계': { TEXT: '수계' }
					, '대책권역': { TEXT: '권역' }
					, '대책유역': { TEXT: '유역' }
					, '시설용량': { TEXT: '시설용량' }
					, '수원_표류': { TEXT: '표류' }
					, '수원_복류': { TEXT: '복류' }
					, '수원_댐': { TEXT: '댐' }
					, '수원_기타': { TEXT: '기타' }
					, '수원_지하': { TEXT: '지하' }
					, '일평균취수': { TEXT: '일평균취수' }
					, '공급량': { TEXT: '공급량' }
					, '정수장': { TEXT: '정수장' }
					, '비고': { TEXT: '비고' }
				};
				break;
			case '정수장':
				result = {
					'정수장명': { TEXT: '정수장명' }
					, '주소': { TEXT: '주소' }
					, '나머지주소': { TEXT: '나머지주소' }
					, '대책수계': { TEXT: '대책수계' }
					, '대책권역': { TEXT: '대책권역' }
					, '대책유역': { TEXT: '대책유역' }
					, '시설용량': { TEXT: '시설용량' }
					, '비고': { TEXT: '비고' }
					, '배수코드': { TEXT: '배수코드' }
					, '배수구역': { TEXT: '배수구역' }
					, '간이처리': { TEXT: '간이처리' }
					, '완속여과': { TEXT: '완속여과' }
					, '급속여과': { TEXT: '급속여과' }
					, '고도처리': { TEXT: '고도처리' }
					, '일최대급수': { TEXT: '일최대급수' }
					, '일평균급수': { TEXT: '일평균급수' }
					, '급수구역': { TEXT: '급수구역' }
					, '급수인구': { TEXT: '급수인구' }
					, '직원총수': { TEXT: '직원총수' }
					, '행정직': { TEXT: '행정직' }
					, '기술직': { TEXT: '기술직' }
					, '전문고용': { TEXT: '전문고용' }
					, '연구직': { TEXT: '연구직' }
					, '기능직': { TEXT: '기능직' }
					, '기타': { TEXT: '기타' }
				};
				break;
			case 'NAKDONG_GIS_ANIMAL':
				result = {
					'BIZ_NAME': { TEXT: '업소명' }
					, 'NAME': { TEXT: '사업자명' }
					, 'ADDRESS': { TEXT: '주소' }
					, 'TEL': { TEXT: '전화번호' }
					, 'ANIMAL_TYP': { TEXT: '업소종류' }
					, 'ANIMAL_NUM': { TEXT: '종수' }
					, 'ANIMAL_ARE': { TEXT: '등급' }
					, 'AUTH': { TEXT: '신고여부' }
					, 'AM_NM': { TEXT: '중권역' }
					, 'AS_NM': { TEXT: '소권역' }
					, 'WATER_SYS': { TEXT: '수계' }
				};
				break;
			case 'NAKDONG_GIS_AIR':
				result = {
					'BIZ_NAME': { TEXT: '업소명' }
					, 'NAME': { TEXT: '사업자명' }
					, 'ADDRESS': { TEXT: '주소' }
					, 'TEL': { TEXT: '전화번호' }
					, 'BIZ_TYPE': { TEXT: '업소종류' }
					, 'AIR_TYPE': { TEXT: '종수' }
					, 'AIR_LEVEL': { TEXT: '등급' }
					, 'AIR_AUTH': { TEXT: '신고여부' }
					, 'AM_NM': { TEXT: '중권역' }
					, 'AS_NM': { TEXT: '소권역' }
					, 'WATER_SYS': { TEXT: '수계' }
				};
				break;
			case 'NAKDONG_GIS_WATER':
				result = {
					'BIZ_NAME': { TEXT: '업소명' }
					, 'NAME': { TEXT: '사업자명' }
					, 'ADDRESS': { TEXT: '주소' }
					, 'TEL': { TEXT: '전화번호' }
					, 'BIZ_TYPE': { TEXT: '업소종류' }
					, 'WATER_TYPE': { TEXT: '종수' }
					, 'WATER_LEVE': { TEXT: '등급' }
					, 'WATER_AUTH': { TEXT: '신고여부' }
					, 'AM_NM': { TEXT: '중권역' }
					, 'AS_NM': { TEXT: '소권역' }
					, 'WATER_SYS': { TEXT: '수계' }
				};
				break;
		}
		
		return result;
	};
};
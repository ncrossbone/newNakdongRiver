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
					+ "			<th class='layer'>���̾��</th>"
					+ "			<th class='name'>������</th>"
					+ "		</thead>"
					+ "		<tbody>";
					
		for(var i in response) {
			var point = response[i];
			var layerName = point.layerName;
			var attrName = getAttrName(layerName);
			var pointName = point.feature.attributes[attrName];
			var id = listDiv + "_row_" + i;
			
			ids[id] = point;
			
			if(layerName == 'NAKDONG_GIS_AIR') layerName = '���';
			else if(layerName == 'NAKDONG_GIS_ANIMAL') layerName = '����';
			else if(layerName == 'NAKDONG_GIS_WATER') layerName = '������';
			
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
		
		if(layerName == "��õ��") {
			url = "/nakdong/we/weStatus_search3.json?ptno=" + response.feature.attributes['�������ڵ�'];
			
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
		
		if (layerName == "��õ��") {
			list['PT_NM'] = '�����Ҹ�';
			list['WMYR'] = '��';
			list['WMOD'] = '��';
			list['WMWK'] = 'ȸ��';
			list['ITEM_TEMP'] = '����';
			list['ITEM_PH'] = 'PH';
			list['ITEM_DOC'] = 'DO';
			list['ITEM_BOD'] = 'BOD';
			list['ITEM_COD'] = 'COD';
			list['ITEM_SS'] = 'SS';
			list['ITEM_TN'] = '������';
			list['ITEM_TP'] = '����';
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
			case '�߱ǿ�':
			case '�ñ���':
				sys = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0, 0.5]), 3);		
				break;
			case '��õ��':
			case '�����':
			case '������':
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
			alert('�ش� ������ �����Ͱ� �����ϴ�');
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
	
	// ���̾�� ��������
	function getAttrName(name) {
		var result = "";
		
		switch(name) {
			case '�߱ǿ�':
				result = "MW_NAME";
				break;
			case '��õ��':
				result = "�����Ҹ�";
				break;
			case '�ñ���':
				result = "CTY_NM";
				break;
			case '�����':
				result = "������";
				break;
			case '������':
				result = "�������";
				break;
			case 'NAKDONG_GIS_AIR':
			case 'NAKDONG_GIS_ANIMAL':
			case 'NAKDONG_GIS_WATER ':
				result = "BIZ_NAME";
				break;
		}
		
		return result;
	};
	
	// ����� ���� ����Ʈ ��������
	function getInfoList(name) {
		var result = {};
		
		switch(name) {
			case '�߱ǿ�':
				result = {
					'MW_NAME': { TEXT: '�߱ǿ���' }
					, '�߱ǿ�����': { TEXT: '�߱ǿ�����' }
					, '��ǥ������': { TEXT: '��ǥ������' }
					, 'BOD_15��': { TEXT: '��ǥ���� BOD' }
					, 'TP_15��': { TEXT: '��ǥ���� TP' }
					/*
					, 'STR_NAME': { TEXT: '��õ��' }
					, 'STR_LEVEL': { TEXT: '��õ���' }
					, 'DIVLOC': { TEXT: '��������' }
					, 'MW_PERI': { TEXT: 'ǥ�������ѷ�����' }
					, 'MW_AREA': { TEXT: 'ǥ����������' }
					, 'UPWS_AREA': { TEXT: '�����������' }
					*/
				};
				break;
			case '�ñ���':
				result = {
					'DO_NM': { TEXT: '�õ���' }
					, 'CTY_NM': { TEXT: '�ñ�����' }
				};
				break;
			case '��õ��':
				result = {
					'�����Ҹ�': { TEXT: '�����Ҹ�' }
					, '�ǿ�': { TEXT: '�ǿ�' }
					, '����': { TEXT: '����' }
					, '�߱ǿ���': { TEXT: '�߱ǿ���' }
					, 'ä������': { TEXT: 'ä������' }
					, '����������': { TEXT: '����������' }
					, '������': { TEXT: '������' }
				};
				break;
			case '�����':
				result = {
					'������': { TEXT: '������' }
					, '�ּ�': { TEXT: '�ּ�' }
					, '�������ּ�': { TEXT: '�������ּ�' }
					, '��å����': { TEXT: '����' }
					, '��å�ǿ�': { TEXT: '�ǿ�' }
					, '��å����': { TEXT: '����' }
					, '�ü��뷮': { TEXT: '�ü��뷮' }
					, '����_ǥ��': { TEXT: 'ǥ��' }
					, '����_����': { TEXT: '����' }
					, '����_��': { TEXT: '��' }
					, '����_��Ÿ': { TEXT: '��Ÿ' }
					, '����_����': { TEXT: '����' }
					, '��������': { TEXT: '��������' }
					, '���޷�': { TEXT: '���޷�' }
					, '������': { TEXT: '������' }
					, '���': { TEXT: '���' }
				};
				break;
			case '������':
				result = {
					'�������': { TEXT: '�������' }
					, '�ּ�': { TEXT: '�ּ�' }
					, '�������ּ�': { TEXT: '�������ּ�' }
					, '��å����': { TEXT: '��å����' }
					, '��å�ǿ�': { TEXT: '��å�ǿ�' }
					, '��å����': { TEXT: '��å����' }
					, '�ü��뷮': { TEXT: '�ü��뷮' }
					, '���': { TEXT: '���' }
					, '����ڵ�': { TEXT: '����ڵ�' }
					, '�������': { TEXT: '�������' }
					, '����ó��': { TEXT: '����ó��' }
					, '�ϼӿ���': { TEXT: '�ϼӿ���' }
					, '�޼ӿ���': { TEXT: '�޼ӿ���' }
					, '��ó��': { TEXT: '��ó��' }
					, '���ִ�޼�': { TEXT: '���ִ�޼�' }
					, '����ձ޼�': { TEXT: '����ձ޼�' }
					, '�޼�����': { TEXT: '�޼�����' }
					, '�޼��α�': { TEXT: '�޼��α�' }
					, '�����Ѽ�': { TEXT: '�����Ѽ�' }
					, '������': { TEXT: '������' }
					, '�����': { TEXT: '�����' }
					, '�������': { TEXT: '�������' }
					, '������': { TEXT: '������' }
					, '�����': { TEXT: '�����' }
					, '��Ÿ': { TEXT: '��Ÿ' }
				};
				break;
			case 'NAKDONG_GIS_ANIMAL':
				result = {
					'BIZ_NAME': { TEXT: '���Ҹ�' }
					, 'NAME': { TEXT: '����ڸ�' }
					, 'ADDRESS': { TEXT: '�ּ�' }
					, 'TEL': { TEXT: '��ȭ��ȣ' }
					, 'ANIMAL_TYP': { TEXT: '��������' }
					, 'ANIMAL_NUM': { TEXT: '����' }
					, 'ANIMAL_ARE': { TEXT: '���' }
					, 'AUTH': { TEXT: '�Ű���' }
					, 'AM_NM': { TEXT: '�߱ǿ�' }
					, 'AS_NM': { TEXT: '�ұǿ�' }
					, 'WATER_SYS': { TEXT: '����' }
				};
				break;
			case 'NAKDONG_GIS_AIR':
				result = {
					'BIZ_NAME': { TEXT: '���Ҹ�' }
					, 'NAME': { TEXT: '����ڸ�' }
					, 'ADDRESS': { TEXT: '�ּ�' }
					, 'TEL': { TEXT: '��ȭ��ȣ' }
					, 'BIZ_TYPE': { TEXT: '��������' }
					, 'AIR_TYPE': { TEXT: '����' }
					, 'AIR_LEVEL': { TEXT: '���' }
					, 'AIR_AUTH': { TEXT: '�Ű���' }
					, 'AM_NM': { TEXT: '�߱ǿ�' }
					, 'AS_NM': { TEXT: '�ұǿ�' }
					, 'WATER_SYS': { TEXT: '����' }
				};
				break;
			case 'NAKDONG_GIS_WATER':
				result = {
					'BIZ_NAME': { TEXT: '���Ҹ�' }
					, 'NAME': { TEXT: '����ڸ�' }
					, 'ADDRESS': { TEXT: '�ּ�' }
					, 'TEL': { TEXT: '��ȭ��ȣ' }
					, 'BIZ_TYPE': { TEXT: '��������' }
					, 'WATER_TYPE': { TEXT: '����' }
					, 'WATER_LEVE': { TEXT: '���' }
					, 'WATER_AUTH': { TEXT: '�Ű���' }
					, 'AM_NM': { TEXT: '�߱ǿ�' }
					, 'AS_NM': { TEXT: '�ұǿ�' }
					, 'WATER_SYS': { TEXT: '����' }
				};
				break;
		}
		
		return result;
	};
};
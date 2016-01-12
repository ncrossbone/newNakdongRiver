function mapToolbar() {
	var map;
	var config;
	var status = "3";
	//1 : zoomIn
	//2 : zoomOut
	//3 : default
	
	var navigation;
	
	var measurementObj;
	
	this.init = function(c, m) {
		map = m;
		config = c;
		navigation = new esri.toolbars.Navigation(map);
		
		dojo.connect(map, 'onClick', clinckZoom);
		
		setZoomIn();
		setZoomOut();
		setMove();
		setFullExtent();
		setMeasurement();
		setReset();
		setPrint();
		setIdentify();
	};
	
	function clinckZoom(){
		var level = map.getLevel();
		
		if(status == "1"){
			map.setLevel(level + 1);
		}else if(status == "2"){
			map.setLevel(level - 1);
		}
	}
	
	// setZoomIn: 확대
	function setZoomIn() {
		var $btn = $("#" + config.zoomin);
		
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/zoomin.cur), auto");
			navigation.activate(esri.toolbars.Navigation.ZOOM_IN);
			status = "1";
		});
	};
	
	// setZoomOut: 축소
	function setZoomOut() {
		var $btn = $("#" + config.zoomout);
		
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/zoomout.cur), auto");
			navigation.activate(esri.toolbars.Navigation.ZOOM_OUT);
			status = "2";
		});
	};
	
	// setMove: 이동
	function setMove() {
		var $btn = $("#" + config.move);
		
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/pan.cur), auto");
			navigation.activate(esri.toolbars.Navigation.PAN);
			status = "3";
		});
	};
	
	// setFullExtent: 전체
	function setFullExtent() {
		var $btn = $("#" + config.fullextent.btn);
		
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/pan.cur), auto");
			map.centerAndZoom(config.fullextent.center, config.fullextent.zoom);
			status = "3";
		});
		
	};
	
	// setMeasurement: 측정
	function setMeasurement() {
		var $btn = $("#" + config.measurement.btn);
		var $dialog = $("#" + config.measurement.dialog);
		
		measurementObj = new esri.dijit.Measurement({
			map: map
			, defaultAreaUnit: esri.Units.SQUARE_KILOMETERS
			, defaultLengthUnit: esri.Units.KILOMETERS
		}, dojo.byId(config.measurement.widget));
			
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/measure.cur), auto");
			
			measurementObj.startup();
			measurementObj.setTool("area", true);
			
			$dialog.dialog("open");
			$dialog.bind("dialogclose", removeMeasurement);
			status = "3";
		});
	};
	
	function removeMeasurement() {
		var $moveBtn = $("#" + config.move);
		$moveBtn.trigger('click');
		
		var $dialog = $("#" + config.measurement.dialog);
		
		if($dialog.dialog("isOpen")) {
			$dialog.dialog("close");
		}
		
		if(measurementObj != null) {
			if(measurementObj.result != null) {
				measurementObj.clearResult();
			}
			
			measurementObj.setTool('area', false);
			measurementObj.setTool('distance', false);
			measurementObj.setTool('location', false);
		}
	};
	
	// setReset: 삭제
	function setReset() {
		var $btn = $("#" + config.reset);
		
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/pan.cur), auto");
			
			// graphics 지우기
			if(map.graphics.graphics.length != 0) {
				map.graphics.clear();zzz
			}
			status = "3";
		});
	};
	
	// setPrint: 인쇄
	function setPrint() {
		var $btn = $("#" + config.print.btn);
		
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/pan.cur), auto");
			
			var $loading = $("#" + config.print.loading);
			$loading.css("display", "block");
			
			var template = new esri.tasks.PrintTemplate();
			template.exportOptions = {
				width: map.width,
				height: map.height,
				dpi: 96
			};
			template.format = "PNG32";
			template.layout = "MAP_ONLY";
			template.preserveScale = false;
  
			var params = new esri.tasks.PrintParameters();
			params.map = map;
			params.template = template;
			
			var task = new esri.tasks.PrintTask(mapUrl + "/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task");
			task.execute(params, printResult);
			status = "3";
		});
	};
	
	// print: remove print evt, box
	function printResult(result) {
		var msg = "인쇄를 실패하였습니다.<br>다시 시도하여 주시기 바랍니다.";
		
		if(result == null) {
			alert(msg);
			return;			
		}
		
		if (result.url == null || result.url == "") {
			alert(msg);
			return;
		}
		
		var $loading = $("#" + config.print.loading);
		$loading.css("display", "none");
			
		var printdoc = window.open("","낙동강 물환경 통합관리시스템","toolbar=no,location=no,directories=no,menubar=no,scrollbars=no,left=0, top=0");
		
		printdoc.document.write('<html>');
		printdoc.document.write('<head>');
		printdoc.document.write('<title>낙동강 물환경 통합관리시스템</title>');
		printdoc.document.write('<body style="margin: 0; padding: 0;">');
		printdoc.document.write("<img src='" + result.url + "'>");
		printdoc.document.write('</body>');
		printdoc.document.write('</html>');
		
		printdoc.document.close();  
		printdoc.focus();  
		printdoc.window.print();  
	};
	
	// setIdentify: 정보
	function setIdentify() {
		var $btn = $("#" + config.identify.btn);
		
		$btn.click(function() {
			map.setMapCursor("url(/nakdong/resources/images/map/identify.cur), auto");
			
			config.identify.map = map;
			
			var io = new Identify();
			io.init(config.identify);
//			io.init({
//				map: map
//				, list: config.identify.list
//				, layer: config.identify.layer
//				, url: config.identify.url
//				, listDiv : config.identify.listDiv
//				, infoDiv: config.identify.infoDiv
//				, isDBData: config.identify.isDBData
//			});
			status = "3";
		});
	};
};

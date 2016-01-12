<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>낙동강 물환경 통합관리시스템</title>
	
    <link rel="stylesheet" type="text/css" href="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/dojo/dijit/themes/claro/claro.css">
    <link rel="stylesheet" type="text/css" href="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/css/esri.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery-ui-1.10.3.custom.css">
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery.treeview.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/db_land.css">
    
    <script>var dojoConfig = { parseOnLoad: true };</script>
	
    <script type="text/javascript" src="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/"></script>
    <!--script type="text/javascript" src="http://maps.google.com/maps/api/js?v=3&sensor=false"></script-->
    <script type="text/javascript" src="/nakdong/resources/js/custom/common/map.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
    
    <script type="text/javascript">
    	var pageTop;
    	var pageView;
    	var pageMap;
    	
		$LAB
			.script('/nakdong/resources/js/lib/jquery-ui-1.10.3.custom.js')
			.script('/nakdong/resources/js/lib/jquery.treeview.js')
			.script('/nakdong/resources/js/custom/common/common.js')
			.script('/nakdong/resources/js/custom/common/identify.js')
			.script('/nakdong/resources/js/custom/common/toolbar.js')
			.script('/nakdong/resources/js/custom/common/top_map.js').wait(function() {
				pageTop = new topMap();
				pageTop.init();
			})
			.script('/nakdong/resources/js/custom/db/db_land_view.js').wait(function() {
				pageView = new dbLandView();
				pageView.init();
			})
			.script('/nakdong/resources/js/custom/db/db_land_map.js').wait(function() {
				pageMap = new dbLandMap();
				pageMap.init();
			});
    </script>
</head>

<body class="claro">
	
	<!-- loading start -->
	<div id="loadingPrint">
		<table border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td><img src="/nakdong/resources/images/map/printLoading.gif"></td>
			</tr>
		</table>
	</div>
	<!-- loading end -->
	
	<!-- top start: menu, toolbar -->
	<jsp:include page="topMap.do" flush="false"></jsp:include>
	<!-- top end -->
	
	<!-- search start -->
	<div id="searchMin"></div>
	<div id="searchMax">
		<table border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td class="type">중권역</td>
				<td class="value">
					<select id="search_type_mw">
						<option value="none" selected="selected">중권역 선택</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">기준년도</td>
				<td class="value">
					<select id="search_type_year1">
						<option value="none" selected="selected">기준년도 선택</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">비교년도</td>
				<td class="value">
					<select id="search_type_year2">
						<option value="none" selected="selected">비교년도 선택</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2" class="btn">
					<button id="search_btn_search"></button>
					<button id="search_btn_clear"></button>
				</td>
			</tr>
		</table>
	</div>
	<!-- search end -->
	
	<!-- toc start -->
	<div id="tocMin"></div>
	<div id="tocMax">
		<div class="toolbar">
			<!-- 레이어 투명도 -->
			<div class="opacity">
				<div class="title">투명도</div>
				<div class="slider" id="tocOpacitySlider">
					<div class="bar"></div>
					<div class="value"></div>
				</div>
			</div>
			
			<!-- 레이어 명세서 -->
			<div class="info" id="tocInfoBtn">
				<div class="title">명세서</div>
			</div>
			
			<!-- 전체선택/해제 -->
			<div class="all" id="tocAllCheck" title="전체선택">
				<div class="icon_check">전체선택</div>
				<div class="icon_remove">전체해제</div>
			</div>
		</div>
		
		<div class="tree">
			<!-- toc treeview -->
			<div id="tocTreeview"></div>
		</div>
	</div>
	<!-- toc end -->
	
	<!-- legend start -->
	<!--div id="legendMin"></div>
	<div id="legendMax">
		<div id="legendTreeview"></div>
	</div-->
	<!-- legend end -->
		
	<!-- measurement start -->
	<div id="measurementDiv">
		<div id="measurementWidget"></div>
	</div>
	<!-- measurement end -->
		
	<!-- identify list start -->
	<div id="identifyListDiv">
	</div>
	<!-- identify list end -->
		
	<!-- identify info start -->
	<div id="identifyInfoDiv">
	</div>
	<!-- identify info end -->
		
	<!-- map container start: map -->
	<div id="mapCon">
		
		<!-- scaleView start -->
		<div id="scaleView"></div>
		<!-- scaleView end -->
		
		<!-- map start-->
		<div id="map"></div>
		<!-- map end-->
		
	</div>
	<!-- map end -->
	
</body>

</html>
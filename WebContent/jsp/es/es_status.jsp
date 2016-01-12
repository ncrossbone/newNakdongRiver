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
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/es_status.css">
    
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
			.script('/nakdong/resources/js/custom/common/toolbar.js')
			.script('/nakdong/resources/js/custom/common/top_map.js').wait(function() {
				pageTop = new topMap();
				pageTop.init();
			})
			.script('/nakdong/resources/js/custom/es/es_status_view.js').wait(function() {
				pageView = new esStatusView();
				pageView.init();
			})
			.script('/nakdong/resources/js/custom/es/es_status_map.js').wait(function() {
				pageMap = new esStatusMap();
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
				<td class="type">수질측정지점</td>
				<td class="value">
					<select id="search_type_type">
						<option value="none" selected="selected">수질측정지점 선택</option>
						<option value="1">하천수</option>
						<option value="2">지류모니터링</option>
						<option value="3">중권역대표지점</option>
						<option value="4">총량측정망</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">년도</td>
				<td class="value">
					<select id="search_type_year">
						<option value="none" selected="selected">년도 선택</option>
						<option value='2013'>2013년</option>
						<option value='2012'>2012년</option>
						<option value='2011'>2011년</option>
						<option value='2010'>2010년</option>
						<option value='2009'>2009년</option>
						<option value='2008'>2008년</option>
						<option value='2007'>2007년</option>
						<option value='2006'>2006년</option>
						<option value='2005'>2005년</option>
						<option value='2004'>2004년</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">중권역</td>
				<td class="value">
					<select id="search_type_mw">
						<option value="none" selected="selected">중권역 선택</option>
						<option value='감천'>감천</option>
						<option value='금호강'>금호강</option>
						<option value='낙동강하구언'>낙동강하구언</option>
						<option value='낙동고령'>낙동고령</option>
						<option value='낙동구미'>낙동구미</option>
						<option value='낙동밀양'>낙동밀양</option>
						<option value='낙동상주'>낙동상주</option>
						<option value='낙동왜관'>낙동왜관</option>
						<option value='낙동창녕'>낙동창녕</option>
						<option value='남강'>남강</option>
						<option value='남강댐'>남강댐</option>
						<option value='내성천'>내성천</option>
						<option value='밀양강'>밀양강</option>
						<option value='병성천'>병성천</option>
						<option value='안동댐'>안동댐</option>
						<option value='안동댐하류'>안동댐하류</option>
						<option value='영강'>영강</option>
						<option value='위천'>위천</option>
						<option value='임하댐'>임하댐</option>
						<option value='합천댐'>합천댐</option>
						<option value='형산강'>형산강</option>
						<option value='황강'>황강</option>
						<option value='회천'>회천</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">시도</td>
				<td class="value">
					<select id="search_type_sido">
						<option value="none" selected="selected">시도 선택</option>
						<option value="11">서울특별시</option>
						<option value="26">부산광역시</option>
						<option value="27">대구광역시</option>
						<option value="28">인천광역시</option>
						<option value="29">광주광역시</option>
						<option value="30">대전광역시</option>
						<option value="31">울산광역시</option>
						<option value="41">경기도</option>
						<option value="42">강원도</option>
						<option value="43">충청북도</option>
						<option value="44">충청남도</option>
						<option value="45">전라북도</option>
						<option value="46">전라남도</option>
						<option value="47">경상북도</option>
						<option value="48">경상남도</option>
						<option value="50">제주특별자치도</option>
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
	<div id="legendMin"></div>
	<div id="legendMax">
		<!-- legend treeview -->
		<div id="legendTreeview"></div>
	</div>
	<!-- legend end -->
		
	<!-- measurement start -->
	<div id="measurementDiv">
		<div id="measurementWidget"></div>
	</div>
	<!-- measurement end -->
		
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
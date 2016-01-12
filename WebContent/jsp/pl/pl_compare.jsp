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
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/pl_compare.css">
    
    <script>var dojoConfig = { parseOnLoad: true };</script>
	
    <script type="text/javascript" src="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/"></script>
    <!--script type="text/javascript" src="http://maps.google.com/maps/api/js?v=3&sensor=false"></script-->
    <script type="text/javascript" src="/nakdong/resources/js/custom/common/map.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
    
    <script type="text/javascript">
    	var pageTop;
    	var pageView;
    	var pageMap1;
    	var pageMap2;
    	
		$LAB
			.script('/nakdong/resources/js/lib/jquery-ui-1.10.3.custom.js')
			.script('/nakdong/resources/js/lib/jquery.treeview.js')
			.script('/nakdong/resources/js/custom/common/common.js')
			.script('/nakdong/resources/js/custom/common/toolbar.js')
			.script('/nakdong/resources/js/custom/common/top_map.js').wait(function() {
				pageTop = new topMap();
				pageTop.init();
			})
			.script('/nakdong/resources/js/custom/pl/pl_compare_view.js').wait(function() {
				pageView = new plCompareView();
				pageView.init();
			})
			.script('/nakdong/resources/js/custom/pl/pl_compare_map.js').wait(function() {
				pageMap1 = new plCompareMap();
				pageMap1.init(1);
				
				pageMap2 = new plCompareMap();
				pageMap2.init(2);
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
	
	<!-- measurement1 start -->
	<div id="measurementDiv1">
		<div id="measurementWidget1"></div>
	</div>
	<!-- measurement1 end -->
	
	<!-- measurement2 start -->
	<div id="measurementDiv2">
		<div id="measurementWidget2"></div>
	</div>
	<!-- measurement2 end -->
		
	<!-- mapLine start -->
	<div id="mapLine"></div>
	<!-- mapLine end -->
	
	<!-- toc1 start -->
	<div id="tocMin1"></div>
	<div id="tocMax1">
		<div class="toolbar">
			<!-- 레이어 투명도 -->
			<div class="opacity">
				<div class="title">투명도</div>
				<div class="slider" id="tocOpacitySlider1">
					<div class="bar"></div>
					<div class="value"></div>
				</div>
			</div>
			
			<!-- 레이어 명세서 -->
			<div class="info" id="tocInfoBtn1">
				<div class="title">명세서</div>
			</div>
			
			<!-- 전체선택/해제 -->
			<div class="all" id="tocAllCheck1" title="전체선택">
				<div class="icon_check">전체선택</div>
				<div class="icon_remove">전체해제</div>
			</div>
		</div>
		
		<div class="tree">
			<!-- toc treeview -->
			<div id="tocTreeview1"></div>
		</div>
		
		<div class="toggle">
			<div class='title'>배경맵</div>
			<label for="mapToggle1_1" id="mapToggle1_1"><input type="radio" id="mapToggle1_1Input" name="mapToggle1" checked="checked">위성</label>
			<label for="mapToggle2_1" id="mapToggle2_1"><input type="radio" id="mapToggle1_1Input" name="mapToggle1">일반</label>
		</div>
	</div>
	<!-- toc1 end -->
	
	<!-- toc2 start -->
	<div id="tocMin2"></div>
	<div id="tocMax2">
		<div class="toolbar">
			<!-- 레이어 투명도 -->
			<div class="opacity">
				<div class="title">투명도</div>
				<div class="slider" id="tocOpacitySlider2">
					<div class="bar"></div>
					<div class="value">100%</div>
				</div>
			</div>
			
			<!-- 레이어 명세서 -->
			<div class="info" id="tocInfoBtn2">
				<div class="title">명세서</div>
			</div>
			
			<!-- 전체선택/해제 -->
			<div class="all" id="tocAllCheck2" title="전체선택">
				<div class="icon_check">전체선택</div>
				<div class="icon_remove">전체해제</div>
			</div>
		</div>
		
		<div class="tree">
			<!-- toc treeview -->
			<div id="tocTreeview2"></div>
		</div>
		
		<div class="toggle">
			<div class='title'>배경맵</div>
			<label for="mapToggle1_2" id="mapToggle1_2"><input type="radio" id="mapToggle1_2Input" name="mapToggle2" checked="checked">위성</label>
			<label for="mapToggle2_2" id="mapToggle2_2"><input type="radio" id="mapToggle1_2Input" name="mapToggle2">일반</label>
		</div>
	</div>
	<!-- toc2 end -->
	
	<!-- left start -->
	<div id="left">
		<!-- map container start: map -->
		<div id="mapCon1">
			
			<!-- scaleView start -->
			<div id="scaleView1"></div>
			<!-- scaleView end -->
			
			<!-- map start-->
			<div id="map1"></div>
			<!-- map end-->
			
		</div>
		<!-- map end -->
	</div>
	<!-- left end -->
	
	<!-- right start -->
	<div id="right">
		<!-- map container start: map -->
		<div id="mapCon2">
			
			<!-- scaleView start -->
			<div id="scaleView2"></div>
			<!-- scaleView end -->
			
			<!-- map start-->
			<div id="map2"></div>
			<!-- map end-->
			
		</div>
		<!-- map end -->
	</div>
	<!-- right end -->
	
</body>

</html>
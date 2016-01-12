<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=8,edge">
	
	<title>������ ��ȯ�� ���հ����ý���</title>
	
    <link rel="stylesheet" type="text/css" href="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/dojo/dijit/themes/claro/claro.css">
    <link rel="stylesheet" type="text/css" href="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/css/esri.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery-ui-1.10.3.custom.css">
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery.treeview.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/we_status.css">
    
    <script>var dojoConfig = { parseOnLoad: true };</script>
	
	<script type="text/javascript" src="http://js.arcgis.com/3.10/"></script> 
<!--     <script type="text/javascript" src="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/"></script> -->
	<script type="text/javascript" src="/nakdong/resources/js/esri.symbol.MultiLineTextSymbol.js"></script>
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
			.script('/nakdong/resources/js/custom/we/we_status_view.js').wait(function() {
				pageView = new weStatusView();
				pageView.init();
			})
			.script('/nakdong/resources/js/custom/we/we_status_map.js').wait(function() {
				pageMap = new weStatusMap();
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
				<td class="type">�⵵</td>
				<td class="value">
					<select id="search_type_year">
						<option value="none" selected="selected">�⵵ ����</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">��</td>
				<td class="value">
					<select id="search_type_month">
						<option value="none" selected="selected">�� ����</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">�߱ǿ�</td>
				<td class="value">
					<select id="search_type_mw">
						<option value="none" selected="selected">�߱ǿ� ����</option>
					</select>
				</td>
			</tr>
			<!-- khLee ���� 20150423 style="display:none;" �߰� -->
			<tr style="display:none;">
				<td class="type">����</td>
				<td class="value">
					<select id="search_type_type">
						<option value="none">���� ����</option>
					<!--	<option value="before">Ȯ�� �� ���� �������</option>	-->
						<option value="after" selected="selected">Ȯ�� �� ���� �������</option>
					</select>
				</td>
			</tr>
			<!--tr>
				<td class="type">��������</td>
				<td class="value">
					<select id="search_type_area">
						<option value="none" selected="selected">�������� ����</option>
					</select>
				</td>
			</tr-->
			<tr>
				<td colspan="2" class="btn">
					<button id="search_btn_search"></button>
					<button id="search_btn_clear"></button>
				</td>
			</tr>
		</table>
	</div>
	<!-- search end -->
	
	<!-- searchResult start -->
	<div id="searchResultMin"></div>
	<div id="searchResultMax">
		<table border="0" cellpadding="0" cellspacing="0">
			<thead></thead>
			<tbody></tbody>
		</table>
	</div>
	<!-- searchResult end -->
	
	<!-- toc start -->
	<div id="tocMin"></div>
	<div id="tocMax">
		<div class="toolbar">
			<!-- ���̾� ���� -->
			<div class="opacity">
				<div class="title">����</div>
				<div class="slider" id="tocOpacitySlider">
					<div class="bar"></div>
					<div class="value"></div>
				</div>
			</div>
			
			<!-- ���̾� ���� -->
			<div class="info" id="tocInfoBtn">
				<div class="title">����</div>
			</div>
			
			<!-- ��ü����/���� -->
			<div class="all" id="tocAllCheck" title="��ü����">
				<div class="icon_check">��ü����</div>
				<div class="icon_remove">��ü����</div>
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
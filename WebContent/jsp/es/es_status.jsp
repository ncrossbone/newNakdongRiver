<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>������ ��ȯ�� ���հ����ý���</title>
	
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
				<td class="type">������������</td>
				<td class="value">
					<select id="search_type_type">
						<option value="none" selected="selected">������������ ����</option>
						<option value="1">��õ��</option>
						<option value="2">��������͸�</option>
						<option value="3">�߱ǿ���ǥ����</option>
						<option value="4">�ѷ�������</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">�⵵</td>
				<td class="value">
					<select id="search_type_year">
						<option value="none" selected="selected">�⵵ ����</option>
						<option value='2013'>2013��</option>
						<option value='2012'>2012��</option>
						<option value='2011'>2011��</option>
						<option value='2010'>2010��</option>
						<option value='2009'>2009��</option>
						<option value='2008'>2008��</option>
						<option value='2007'>2007��</option>
						<option value='2006'>2006��</option>
						<option value='2005'>2005��</option>
						<option value='2004'>2004��</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">�߱ǿ�</td>
				<td class="value">
					<select id="search_type_mw">
						<option value="none" selected="selected">�߱ǿ� ����</option>
						<option value='��õ'>��õ</option>
						<option value='��ȣ��'>��ȣ��</option>
						<option value='�������ϱ���'>�������ϱ���</option>
						<option value='�������'>�������</option>
						<option value='��������'>��������</option>
						<option value='�����о�'>�����о�</option>
						<option value='��������'>��������</option>
						<option value='�����ְ�'>�����ְ�</option>
						<option value='����â��'>����â��</option>
						<option value='����'>����</option>
						<option value='������'>������</option>
						<option value='����õ'>����õ</option>
						<option value='�о簭'>�о簭</option>
						<option value='����õ'>����õ</option>
						<option value='�ȵ���'>�ȵ���</option>
						<option value='�ȵ����Ϸ�'>�ȵ����Ϸ�</option>
						<option value='����'>����</option>
						<option value='��õ'>��õ</option>
						<option value='���ϴ�'>���ϴ�</option>
						<option value='��õ��'>��õ��</option>
						<option value='���갭'>���갭</option>
						<option value='Ȳ��'>Ȳ��</option>
						<option value='ȸõ'>ȸõ</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="type">�õ�</td>
				<td class="value">
					<select id="search_type_sido">
						<option value="none" selected="selected">�õ� ����</option>
						<option value="11">����Ư����</option>
						<option value="26">�λ걤����</option>
						<option value="27">�뱸������</option>
						<option value="28">��õ������</option>
						<option value="29">���ֱ�����</option>
						<option value="30">����������</option>
						<option value="31">��걤����</option>
						<option value="41">��⵵</option>
						<option value="42">������</option>
						<option value="43">��û�ϵ�</option>
						<option value="44">��û����</option>
						<option value="45">����ϵ�</option>
						<option value="46">���󳲵�</option>
						<option value="47">���ϵ�</option>
						<option value="48">��󳲵�</option>
						<option value="50">����Ư����ġ��</option>
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
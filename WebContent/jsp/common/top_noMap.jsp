<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="com.login.model.TuserVO"%>
<%@ page import="com.login.web.*" %>
<%@ page import="com.util.*" %>
<%
	String url = request.getRequestURL().toString();
	String urlArray[] = url.split("/");
	String urlLast = urlArray[urlArray.length - 1];
	
	urlLast = urlLast.replace(".do", "");
  	TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
	
	if(tuserVO == null){
	
%>
		<script type="text/javascript">
		
			alert('������ ���� �Ǿ����ϴ�. �ٽ� �α��� �Ͽ� �ֽñ� �ٶ��ϴ�.');
			location.href = '/nakdong/login.do';
		</script>
<%
	}
%>

<!-- top_map start: logo, navi, toolbar, mapType -->
<ul id="sub_01">
	<li><a href="/nakdong/dbStatus.do">��Ȳ</a></li>
	<li><a href="/nakdong/dbLand.do">�����̿���Ȳ</a></li>
	<li><a href="/nakdong/dbRiver.do">��õ��Ȳ</a></li>
</ul>

<ul id="sub_02">
	<li><a href="/nakdong/wuStatus.do">��Ȳ</a></li>
	<li><a href="/nakdong/wuSewer.do">�ϼ��� ���޷�</a></li>
</ul>

<ul id="sub_03">
	<li><a href="/nakdong/weStatus.do">��Ȳ</a></li>
	<li><a href="/nakdong/weWater.do">��������Ȳ</a></li>
</ul>

<ul id="sub_04">
	<li><a href="/nakdong/etfStatus.do">��Ȳ</a></li>
</ul>

<ul id="sub_05">
	<li><a href="/nakdong/wpsStatus.do">��Ȳ</a></li>
	<li><a href="/nakdong/wpsDischarge.do">���������Ȳ</a></li>
</ul>

<ul id="sub_06">
	<li><a href="/nakdong/plLoad.do">�߻�/���� ���Ϸ�</a></li>
</ul>

<ul id="sub_07">
	<li><a href="javascript:popup('/nakdong/esDown.do', 460, 270);">2012</a></li>
</ul>

<ul id="sub_08">
	<li><a href="/nakdong/admin.do">�����ڷ�</a></li>
	<li><a href="/nakdong/admin2.do">��Ȳ�ڷ�</a></li>
	<li><a href="/nakdong/admin3.do">������/�������Ϸ�</a></li>
	<li><a href="/nakdong/admin4.do">��Ÿ</a></li>
</ul>

<ul id="sub_09">
	<li><a href="javascript:popup('/nakdong/notice.do', 685, 500);">��������</a></li>
</ul>

<div id="top_map_admin">
	<div class="row1">
		<div id="logo"></div>
			<div id="navi">
				<div id="navi_01"><a href="/nakdong/dbStatus.do" onMouseOver="MM_showHideLayers('sub_01','','show','sub_02','','hide','sub_03','','hide','sub_04','','hide','sub_05','','hide','sub_06','','hide','sub_07','','hide','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title1.png" width="100" height="35" border="0"></a></div>
				<div id="navi_02"><a href="/nakdong/wuStatus.do" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','show','sub_03','','hide','sub_04','','hide','sub_05','','hide','sub_06','','hide','sub_07','','hide','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title2.png" width="100" height="35" border="0"></a></div>
				<div id="navi_03"><a href="/nakdong/weStatus.do" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','show','sub_04','','hide','sub_05','','hide','sub_06','','hide','sub_07','','hide','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title3.png" width="100" height="35" border="0"></a></div>
				<div id="navi_04"><a href="/nakdong/etfStatus.do" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','hide','sub_04','','show','sub_05','','hide','sub_06','','hide','sub_07','','hide','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title4.png" width="100" height="35" border="0"></a></div>
				<div id="navi_05"><a href="/nakdong/wpsStatus.do" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','hide','sub_04','','hide','sub_05','','show','sub_06','','hide','sub_07','','hide','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title5.png" width="100" height="35" border="0"></a></div>
				<div id="navi_06"><a href="/nakdong/plLoad.do" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','hide','sub_04','','hide','sub_05','','hide','sub_06','','show','sub_07','','hide','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title6.png" width="100" height="35" border="0"></a></div>
<!-- 				<div id="navi_07"><a href="/nakdong/esStatus.do" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','hide','sub_04','','hide','sub_05','','hide','sub_06','','hide','sub_07','','show','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title7.png" width="100" height="35" border="0"></a></div> -->
				<div id="navi_07"><a href="javascript:popup('/nakdong/esDown.do', 460, 270);" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','hide','sub_04','','hide','sub_05','','hide','sub_06','','hide','sub_07','','show','sub_08','','hide','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title7.png" width="100" height="35" border="0"></a></div>				
				<div id="navi_08"><a href="/nakdong/admin.do" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','hide','sub_04','','hide','sub_05','','hide','sub_06','','hide','sub_07','','hide','sub_08','','show','sub_09','','hide')"><img src="/nakdong/resources/images/common/top_navi_title8.png" width="100" height="35" border="0"></a></div>
				<div id="navi_09"><a href="javascript:popup('/nakdong/notice.do', 685, 500);" onMouseOver="MM_showHideLayers('sub_01','','hide','sub_02','','hide','sub_03','','hide','sub_04','','hide','sub_05','','hide','sub_06','','hide','sub_07','','hide','sub_08','','hide','sub_09','','show')"><img src="/nakdong/resources/images/common/top_navi_title9.png" width="100" height="35" border="0"></a></div>
			</div>
	</div>
</div>
<!-- top_map end -->
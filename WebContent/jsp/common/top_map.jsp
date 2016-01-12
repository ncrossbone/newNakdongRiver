<%@page import="com.login.model.TuserVO"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="com.login.web.*" %>
<%@ page import="com.util.*" %>
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/reset.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/common.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/main.css" />
<script language="javascript">
function allChange() { 
	document.getElementById("sub1").style.display = "none";
	document.getElementById("sub2").style.display = "none";
	document.getElementById("sub3").style.display = "none";
	document.getElementById("sub4").style.display = "none";
	document.getElementById("sub5").style.display = "none";
	document.getElementById("sub6").style.display = "none";
	document.getElementById("sub7").style.display = "none";
	document.getElementById("sub8").style.display = "none";
	
	} 
function fncOver(pos){
	allChange();
	document.getElementById("sub"+pos).style.display = "block";	
} 

function newWinOpen(type) {
	var url = "";
	var title = "";
	
	if(type == 1) {
		url = "/nakdong/dbInfoDam.do";
		title = "���ڷ�";
	}
	else if(type == 2) {
		url = "/nakdong/dbInfoBo.do";
		title = "���ڷ�";
	}
	else if(type == 3) {
		url = "/nakdong/dbInfoWeather.do";
		title = "�����ڷ�";
	}
/*
 * �ۼ��� : 2014.12.30
 * �ۼ��� : ������
 * ���� : �췮�ڷ� �ּ�ó��

	else if(type == 4) {
		url = "/nakdong/dbInfoRain.do";
		title = "�췮�ڷ�";
	}
 */
	window.open(url, title, 'width=750, height=600');
}
</script>
<%
String url = request.getRequestURL().toString();
String urlArray[] = url.split("/");
String urlLast = urlArray[urlArray.length - 1];

urlLast = urlLast.replace(".do", "");
%>
<%	
	
	TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
	String USER_NM = ""; 
	
%>
<%	
if(tuserVO == null){
	
%>
<script type="text/javascript">

	alert("������ ���� �Ǿ����ϴ�. �ٽ� �α��� �Ͽ� �ֽñ� �ٶ��ϴ�.");
	location.href = "/nakdong/login.do";
</script>
<%
}
if(tuserVO !=null ){
	USER_NM = tuserVO.getUSER_NM();
	}
%>


<!-- top_map start: logo, navi, toolbar, mapType -->
<div id="top_map">
	
	<!-- row1 start: logo, navi -->
	<div class="row1">
		
		<!-- logo start -->
<!-- 		<div id="logo"> -->
<!-- 		</div> -->
		<!-- logo end -->
		
		<!-- navi start -->
		<!--head-->
	<div id="head">
    	<h1><a href="/nakdong/dbStatusNew.do"><img src="/nakdong/resources/images/common/logo.jpg" alt="" /></a></h1>
        <ul id="gnb">
        	<li onmouseover='fncOver(1);'><a href="/nakdong/dbStatus.do">������Ȳ</a></li>
            <li onmouseover='fncOver(2);'><a href="/nakdong/wuStatus.do" style="background-color:#2b649b; border:1px #69a0c7 solid; border-top:0">���̿���Ȳ</a></li>
            <li onmouseover='fncOver(3);'><a href="/nakdong/weStatus.do" style="background-color:#215586; border:1px #3a709c solid; border-top:0">����</a></li>
            <li onmouseover='fncOver(4);'><a href="/nakdong/dbRainRiver.do" style="background-color:#1d4d79; border:1px #4b83a8 solid; border-top:0">����/���</a></li>
            <li onmouseover='fncOver(5);'><a href="/nakdong/wpsStatus.do" style="background-color:#194772; border:1px #447ea1 solid; border-top:0">�����������Ϸ�</a></li>
            <li onmouseover='fncOver(6);'><a href="/nakdong/etfStatus.do" style="background-color:#0c3256; border:1px #276b8e solid; border-top:0">ȯ����ʽü�</a></li>
            <li onmouseover='fncOver(7);'><a href="/nakdong/waterBrd.do" style="background-color:#37328f; border:1px #746ebc solid; border-top:0">�ڷ��</a></li>
            <li onmouseover='fncOver(8);'><a href="/nakdong/admin.do" style="background-color:#323232; border:1px #717171 solid; border-top:0">�����ڸ��</a></li>
        </ul>
        <div id="gnb_2depth">
        	<ul  id='sub1'   style='display:none'>
            	<li><a href="/nakdong/dbStatus.do">�ǿ�����Ȳ</a></li>
                <li><a href="/nakdong/dbRiver.do">��õ����</a></li>
            </ul>
            <ul  id='sub2'  style='display:none; margin-left:110px' >
            	<li><a href="/nakdong/wuStatus.do">���̿���Ȳ</a></li>
                <li><a href="/nakdong/wuSewer.do">�ϼ�������ڷ�</a></li>
            </ul>
            <ul  id='sub3'   style='display:none; margin-left:220px'>
            	<li><a href="/nakdong/weStatus.do">��Ȳ</a></li>
                
            </ul>
            <ul  id='sub4'   style='display:none; margin-left:330px'>
            	<li><a href="javascript:newWinOpen(1); ">���ڷ�</a></li>
            	<li><a href="javascript:newWinOpen(2); ">���ڷ�</a></li>
            	<li><a href="javascript:newWinOpen(3); ">�����ڷ�</a></li>
            	<!--li><a href="javascript:newWinOpen(4); ">�췮�ڷ�</a></li-->
            </ul>
            <ul  id='sub5'   style='display:none; margin-left:440px'>
            	<li><a href="/nakdong/wpsStatus.do">��Ȳ</a></li>
                <li><a href="/nakdong/wpsDischarge.do">���������Ȳ</a></li>
                <li><a href="javascript:alert('���� �غ����Դϴ�');">�߻�/���� ���Ϸ�</a></li>
            </ul>
            <ul  id='sub6'   style='display:none; margin-left:550px'>
            	<li><a href="/nakdong/etfStatus.do">��Ȳ</a></li>
            </ul>
            <ul  id='sub7'   style='display:none; margin-left:450px'>
            	<li><a href="/nakdong/waterBrd.do">��ȯ�溸��</a></li>
                <li><a href="/nakdong/hydroBrd.do">�����°躸��</a></li>
                <li><a href="/nakdong/envBrd.do">ȯ�����������</a></li>
                <li><a href="/nakdong/relOrgBrd.do">���ñ���Ұ�</a></li>
            </ul>
            <ul  id='sub8'   style='display:none; margin-left:500px'>
            <%if("������".equals(USER_NM)){ %>
            	<li><a href="/nakdong/admin.do">�����ڷ�</a></li>
                <li><a href="/nakdong/admin2.do">��Ȳ�ڷ�</a></li>
                <li><a href="/nakdong/admin3.do">�����������Ϸ��ڷ�</a></li>
                <li><a href="/nakdong/admin4.do">��Ÿ</a></li>
            <%}%>
            </ul>
        </div>
        
    </div>
    <!--head-->
		<!-- navi end -->
		
	</div>
	<!-- row1 end -->
	
	<!-- row2 start: toolbar, mapType -->
	<div class="row2">
		
		<!-- toolbar start -->
		<div id="toolbar">
			<div class='bg'><div id="toolbar_1" title="����Ȯ��" alt="����Ȯ��"></div></div>
			<div class='bg'><div id="toolbar_2" title="�������" alt="�������"></div></div>
			<div class='bg'><div id="toolbar_3" title="�����̵�" alt="�����̵�"></div></div>
			<div class='bg'><div id="toolbar_4" title="�⺻��ġ" alt="�⺻��ġ"></div></div>
			<div class='bg'><div id="toolbar_5" title="����" alt="����"></div></div>
			<div class='bg'><div id="toolbar_7" title="����" alt="����"></div></div>
			<div class='bg'><div id="toolbar_8" title="�μ�" alt="�μ�"></div></div>
			<div class='bg'><div id="toolbar_9" title="��������" alt="��������"></div></div>
		</div>
		<!-- toolbar end -->
		
		<% if(!urlLast.equals("plCompare")) { %>
		<!-- mapType start -->
		<div id="mapType">
			<label for="mapType_1" id="mapType_label_1"><input type="radio" id="mapType_input_1" name="mapType" checked />����</label>
			<label for="mapType_2" id="mapType_label_2"><input type="radio" id="mapType_input_2" name="mapType" />�Ϲ�</label>
		</div>
		<!-- mapType end -->
		<% } %>
		
		<!-- pointSearch start -->
		<div id="pointSearch">
			<select id="pointSearch_select">
				<option selected="selected">�߱ǿ� ����</option>
			</select>
			<button id="pointSearch_btn"></button>
		</div>
		<!-- pointSearch end -->
		
		<!-- rule start -->
		<div id="rule">
			<div class="title"></div>
			<div class="text">���� �� ��ħ</div>
		</div>
		<!-- rule end -->
		
		<!-- menuName start -->
		<div id="menuName">
			<jsp:include page="menuName.do" flush="false"></jsp:include>
		</div>
		<!-- menuName end -->
	</div>
	<!-- row2 end -->
	
	<!-- row3 start -->
	<div class="row3">
		<div id="top_slide">
			<div class="show" id="top_slide_show">���̱�</div>
			<div class="hide" id="top_slide_hide">���߱�</div>
		</div>
	</div>
	<!-- row3 end -->

</div>
<!-- top_map end -->
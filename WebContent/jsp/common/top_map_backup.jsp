<%@page import="com.login.model.TuserVO"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="com.login.web.*" %>
<%@ page import="com.util.*" %>
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
		<div id="logo">
		</div>
		<!-- logo end -->
		
		<!-- navi start -->
		<div id="navi">
			<div id="navi_01">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_01_01">��Ȳ</li>
					<li class="sub_title" id="sub_01_02">�����̿���Ȳ</li>
					<li class="sub_title" id="sub_01_03">��õ��Ȳ</li>
				</ul>
			</div>
			<div id="navi_02">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_02_01">��Ȳ</li>
					<li class="sub_title" id="sub_02_02">�ϼ��� ���޷�</li>
					<!--li class="sub_title" id="sub_02_03">���̿����Ȳ</li-->
				</ul>
			</div>
			<div id="navi_03">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_03_01">��Ȳ</li>
					<li class="sub_title" id="sub_03_02">��������Ȳ</li>
				</ul>
			</div>
			<div id="navi_04">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_04_01">��Ȳ</li>
				</ul>
			</div>
			<div id="navi_05">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_05_01">��Ȳ</li>
					<li class="sub_title" id="sub_05_02">���������Ȳ</li>
				</ul>
			</div>
			<div id="navi_06">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_06_01">�߻�/���� ���Ϸ�</li>
					<!--li class="sub_title" id="sub_06_02">�����⿩��</li-->
					<!--li class="sub_title" id="sub_06_03">������</li-->
					<!--li class="sub_title" id="sub_06_04">�������ߺ��Ϸ�</li-->
				</ul>
			</div>
			<div id="navi_07">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_07_01">2012</li>
				</ul>
			</div>
			<%if("������".equals(USER_NM)){ %>
			<div id="navi_08">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_08_01">�����ڷ�</li>
					<li class="sub_title" id="sub_08_02">��Ȳ�ڷ�</li>
					<li class="sub_title" id="sub_08_03">������/�������Ϸ� �ڷ�</li>
					<li class="sub_title" id="sub_08_04">��Ÿ</li>
				</ul>
			</div>
			<%} %>
			<div id="navi_09">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_09_01">��������</li>
				</ul>
			</div>
		</div>
		<!-- navi end -->
		
	</div>
	<!-- row1 end -->
	
	<!-- row2 start: toolbar, mapType -->
	<div class="row2">
		
		<!-- toolbar start -->
		<div id="toolbar">
			<div class='bg'><div id="toolbar_1"></div></div>
			<div class='bg'><div id="toolbar_2"></div></div>
			<div class='bg'><div id="toolbar_3"></div></div>
			<div class='bg'><div id="toolbar_4"></div></div>
			<div class='bg'><div id="toolbar_5"></div></div>
			<!--div class='bg'><div id="toolbar_6"></div></div-->
			<div class='bg'><div id="toolbar_7"></div></div>
			<div class='bg'><div id="toolbar_8"></div></div>
			<div class='bg'><div id="toolbar_9"></div></div>
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
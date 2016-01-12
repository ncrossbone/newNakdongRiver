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

	alert("세션이 종료 되었습니다. 다시 로그인 하여 주시기 바랍니다.");
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
					<li class="sub_title" id="sub_01_01">현황</li>
					<li class="sub_title" id="sub_01_02">토지이용현황</li>
					<li class="sub_title" id="sub_01_03">하천유황</li>
				</ul>
			</div>
			<div id="navi_02">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_02_01">현황</li>
					<li class="sub_title" id="sub_02_02">하수도 보급률</li>
					<!--li class="sub_title" id="sub_02_03">농촌용수현황</li-->
				</ul>
			</div>
			<div id="navi_03">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_03_01">현황</li>
					<li class="sub_title" id="sub_03_02">좋은물현황</li>
				</ul>
			</div>
			<div id="navi_04">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_04_01">현황</li>
				</ul>
			</div>
			<div id="navi_05">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_05_01">현황</li>
					<li class="sub_title" id="sub_05_02">배출업소현황</li>
				</ul>
			</div>
			<div id="navi_06">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_06_01">발생/배출 부하량</li>
					<!--li class="sub_title" id="sub_06_02">오염기여율</li-->
					<!--li class="sub_title" id="sub_06_03">지역비교</li-->
					<!--li class="sub_title" id="sub_06_04">지역개발부하량</li-->
				</ul>
			</div>
			<div id="navi_07">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_07_01">2012</li>
				</ul>
			</div>
			<%if("관리자".equals(USER_NM)){ %>
			<div id="navi_08">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_08_01">측정자료</li>
					<li class="sub_title" id="sub_08_02">현황자료</li>
					<li class="sub_title" id="sub_08_03">오염원/오염부하량 자료</li>
					<li class="sub_title" id="sub_08_04">기타</li>
				</ul>
			</div>
			<%} %>
			<div id="navi_09">
				<div class="title"></div>
				<ul class="sub">
					<li class="sub_title" id="sub_09_01">공지사항</li>
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
			<label for="mapType_1" id="mapType_label_1"><input type="radio" id="mapType_input_1" name="mapType" checked />위성</label>
			<label for="mapType_2" id="mapType_label_2"><input type="radio" id="mapType_input_2" name="mapType" />일반</label>
		</div>
		<!-- mapType end -->
		<% } %>
		
		<!-- pointSearch start -->
		<div id="pointSearch">
			<select id="pointSearch_select">
				<option selected="selected">중권역 선택</option>
			</select>
			<button id="pointSearch_btn"></button>
		</div>
		<!-- pointSearch end -->
		
		<!-- rule start -->
		<div id="rule">
			<div class="title"></div>
			<div class="text">규정 및 지침</div>
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
			<div class="show" id="top_slide_show">보이기</div>
			<div class="hide" id="top_slide_hide">감추기</div>
		</div>
	</div>
	<!-- row3 end -->

</div>
<!-- top_map end -->
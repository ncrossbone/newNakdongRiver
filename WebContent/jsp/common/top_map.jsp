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
		title = "댐자료";
	}
	else if(type == 2) {
		url = "/nakdong/dbInfoBo.do";
		title = "보자료";
	}
	else if(type == 3) {
		url = "/nakdong/dbInfoWeather.do";
		title = "강우자료";
	}
/*
 * 작성일 : 2014.12.30
 * 작성자 : 정혜원
 * 내용 : 우량자료 주석처리

	else if(type == 4) {
		url = "/nakdong/dbInfoRain.do";
		title = "우량자료";
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
<!-- 		<div id="logo"> -->
<!-- 		</div> -->
		<!-- logo end -->
		
		<!-- navi start -->
		<!--head-->
	<div id="head">
    	<h1><a href="/nakdong/dbStatusNew.do"><img src="/nakdong/resources/images/common/logo.jpg" alt="" /></a></h1>
        <ul id="gnb">
        	<li onmouseover='fncOver(1);'><a href="/nakdong/dbStatus.do">유역현황</a></li>
            <li onmouseover='fncOver(2);'><a href="/nakdong/wuStatus.do" style="background-color:#2b649b; border:1px #69a0c7 solid; border-top:0">물이용현황</a></li>
            <li onmouseover='fncOver(3);'><a href="/nakdong/weStatus.do" style="background-color:#215586; border:1px #3a709c solid; border-top:0">수질</a></li>
            <li onmouseover='fncOver(4);'><a href="/nakdong/dbRainRiver.do" style="background-color:#1d4d79; border:1px #4b83a8 solid; border-top:0">수문/기상</a></li>
            <li onmouseover='fncOver(5);'><a href="/nakdong/wpsStatus.do" style="background-color:#194772; border:1px #447ea1 solid; border-top:0">수질오염부하량</a></li>
            <li onmouseover='fncOver(6);'><a href="/nakdong/etfStatus.do" style="background-color:#0c3256; border:1px #276b8e solid; border-top:0">환경기초시설</a></li>
            <li onmouseover='fncOver(7);'><a href="/nakdong/waterBrd.do" style="background-color:#37328f; border:1px #746ebc solid; border-top:0">자료실</a></li>
            <li onmouseover='fncOver(8);'><a href="/nakdong/admin.do" style="background-color:#323232; border:1px #717171 solid; border-top:0">관리자모드</a></li>
        </ul>
        <div id="gnb_2depth">
        	<ul  id='sub1'   style='display:none'>
            	<li><a href="/nakdong/dbStatus.do">권역별현황</a></li>
                <li><a href="/nakdong/dbRiver.do">하천유량</a></li>
            </ul>
            <ul  id='sub2'  style='display:none; margin-left:110px' >
            	<li><a href="/nakdong/wuStatus.do">물이용현황</a></li>
                <li><a href="/nakdong/wuSewer.do">하수도통계자료</a></li>
            </ul>
            <ul  id='sub3'   style='display:none; margin-left:220px'>
            	<li><a href="/nakdong/weStatus.do">현황</a></li>
                
            </ul>
            <ul  id='sub4'   style='display:none; margin-left:330px'>
            	<li><a href="javascript:newWinOpen(1); ">댐자료</a></li>
            	<li><a href="javascript:newWinOpen(2); ">보자료</a></li>
            	<li><a href="javascript:newWinOpen(3); ">강우자료</a></li>
            	<!--li><a href="javascript:newWinOpen(4); ">우량자료</a></li-->
            </ul>
            <ul  id='sub5'   style='display:none; margin-left:440px'>
            	<li><a href="/nakdong/wpsStatus.do">현황</a></li>
                <li><a href="/nakdong/wpsDischarge.do">배출업소현황</a></li>
                <li><a href="javascript:alert('서비스 준비중입니다');">발생/배출 부하량</a></li>
            </ul>
            <ul  id='sub6'   style='display:none; margin-left:550px'>
            	<li><a href="/nakdong/etfStatus.do">현황</a></li>
            </ul>
            <ul  id='sub7'   style='display:none; margin-left:450px'>
            	<li><a href="/nakdong/waterBrd.do">물환경보고서</a></li>
                <li><a href="/nakdong/hydroBrd.do">수생태계보고서</a></li>
                <li><a href="/nakdong/envBrd.do">환경기초조사사업</a></li>
                <li><a href="/nakdong/relOrgBrd.do">관련기관소개</a></li>
            </ul>
            <ul  id='sub8'   style='display:none; margin-left:500px'>
            <%if("관리자".equals(USER_NM)){ %>
            	<li><a href="/nakdong/admin.do">측정자료</a></li>
                <li><a href="/nakdong/admin2.do">현황자료</a></li>
                <li><a href="/nakdong/admin3.do">수질오염부하량자료</a></li>
                <li><a href="/nakdong/admin4.do">기타</a></li>
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
			<div class='bg'><div id="toolbar_1" title="지도확대" alt="지도확대"></div></div>
			<div class='bg'><div id="toolbar_2" title="지도축소" alt="지도축소"></div></div>
			<div class='bg'><div id="toolbar_3" title="지도이동" alt="지도이동"></div></div>
			<div class='bg'><div id="toolbar_4" title="기본위치" alt="기본위치"></div></div>
			<div class='bg'><div id="toolbar_5" title="측정" alt="측정"></div></div>
			<div class='bg'><div id="toolbar_7" title="삭제" alt="삭제"></div></div>
			<div class='bg'><div id="toolbar_8" title="인쇄" alt="인쇄"></div></div>
			<div class='bg'><div id="toolbar_9" title="정보보기" alt="정보보기"></div></div>
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
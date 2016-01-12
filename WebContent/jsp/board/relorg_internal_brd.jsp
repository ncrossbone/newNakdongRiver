<%@page import="com.login.model.TuserVO"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="com.login.web.*" %>
<%@ page import="com.util.*" %>
<%	
	
	TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
	String USER_NM = ""; 
	if(tuserVO !=null ){
		USER_NM = tuserVO.getUSER_NM();
	}
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/reset.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/common.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/sub.css" />
<style type="text/css">
body,td,th {
	font-family: "돋움", dotum, Helvetica, sans-serif;
}
</style>
<script language="javascript">
function allChangeBoard() { 
	document.getElementById("tap1").style.display = "none";
	document.getElementById("tap2").style.display = "none";
	document.getElementById("tap3").style.display = "none";
	
	document.getElementById("tapTitle1").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	document.getElementById("tapTitle2").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	document.getElementById("tapTitle3").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	} 
function fncBoardOver(pos){
	allChangeBoard();
	document.getElementById("tap"+pos).style.display = "block";
	document.getElementById("tapTitle"+pos).style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_on.gif)';
}  

</script>


	<!-- top start: menu, toolbar -->
	<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->
		
    <div id="cont_wall">
        <div id="sub_contents">
       	  <div class="left_Menu">
            	<H3>자료실<span></span></H3>
            <ul class="list">
                	<li><a href="/nakdong/waterBrd.do">물환경 보고서</a></li>
                    <li><a href="/nakdong/hydroBrd.do">수생태계 보고서</a></li>
                    <li><a href="/nakdong/envBrd.do">환경기초조사사업</a></li>
                    <li class="on"><a href="/nakdong/relOrgBrd.do">관련기관 소개</a></li>
               
            </ul>
        </div>
        
        <div id="page">
        	<ul class="PageLocation">
            	<li><img src="/nakdong/resources/images/sub/location_home.gif"></li>
                <li>> 자료실</li>
                <li>> 관련기관 소개</li>
        	</ul>
            <h2>관련기</a>관 소개</h2>
            <h4>국내 관련 기관의 홈페이지를 확인하실 수 있습니다.</h4>
        	<div class="board_form">
            	<ul class="organ">
                	<!--환경부-->
                	<li>
                    	<p><a href="http://www.me.go.kr" class="logo1" target="blank"></a></p>
                        <p class="WebLink1"><a href="http://www.me.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 환경부</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://www.me.go.kr" target="blank">http://www.me.go.kr</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 정보공개, 국민소통, 법령/정책 발행물,알림/홍보, 기관소개</dd>
                        </dl>
                    </li>
                    <!--낙동강유역환경청-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://me.go.kr/ndg" class="logo2" target="blank"></a></p>
                        <p class="WebLink2"><a href="http://me.go.kr/ndg" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 낙동강유역환경청</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://me.go.kr/ndg" target="blank">http://me.go.kr/ndg</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 전자민원, 국민마당, 정보마당, 알림마당, 지역마당, 기관소개</dd>
                        </dl>
                    </li>
                    <!--낙동강물환경연구소-->
                    <li>
                    	<p><a href="http://www.nier.go.kr/NIER/egovNakDongIndex.jsp" class="logo3" target="blank"></a></p>
                        <p class="WebLink3"><a href="http://www.nier.go.kr/NIER/egovNakDongIndex.jsp" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 낙동강물환경연구소</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://www.nier.go.kr/NIER/egovNakDongIndex.jsp" target="blank">www.nier.go.kr/NIER/egovNakDongIndex.jsp</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 주요사업, 알림마당, 자료마당, 국민마당, 민원마당, 기관소개, 낙동강유역관리센터</dd>
                        </dl>
                    </li>
                    <!--국토교통부-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://www.molit.go.kr" class="logo4" target="blank"></a></p>
                        <p class="WebLink4"><a href="http://www.molit.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 국토교통부</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://www.molit.go.kr" target="blank">http://www.molit.go.kr</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 전자민원, 국민마당, 정보마당, 알림마당, 지역마당, 기관소개</dd>
                        </dl>
                    </li>
                    <!--한국농어촌공사-->
                    <li>
                    	<p><a href="http://www.ekr.or.kr" class="logo5" target="blank"></a></p>
                        <p class="WebLink5"><a href="http://www.ekr.or.kr" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 한국농어촌공사</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://www.ekr.or.kr" target="blank">http://www.ekr.or.kr</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 정부3.0정보공개, 고객서비스, 주요사업, 공사소개, 입찰정보, 알림마당, 사이버홍보</dd>
                        </dl>
                    </li>
                    <!--기상청-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://www.kma.go.kr" class="logo6" target="blank"></a></p>
                        <p class="WebLink6"><a href="http://www.kma.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 기상청</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://www.kma.go.kr" target="blank">http://www.kma.go.kr</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 정부3.0정보공개, 날씨, 참여와소통, 지식 배움, 행정과 정책, 기상청소개</dd>
                        </dl>
                    </li>
                    <!--낙동강홍수통제소-->
                    <li>
                    	<p><a href="http://www.nakdongriver.go.kr" class="logo7" target="blank"></a></p>
                        <p class="WebLink7"><a href="http://www.nakdongriver.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 낙동강홍수통제소</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://www.nakdongriver.go.kr" target="blank">http://www.nakdongriver.go.kr</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 정부3.0정보공개, 전자민원실, 알림마당, 수문정보, 홍수정보, 하천행정, 정보마당, 통제소소개</dd>
                        </dl>
                    </li>
                    <!--물관리정보유통시스템-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://www.wins.go.kr" class="logo8" target="blank"></a></p>
                        <p class="WebLink8"><a href="http://www.wins.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>기관명</dt>
                            <dd>: 물관리정보유통시스템</dd>
                            <dt>홈페이지</dt>
                            <dd>: <span><a href="http://www.wins.go.kr" target="blank">http://www.wins.go.kr</a></span></dd>
                            <dt>주요정보</dt>
                            <dd>: 국가수자원관리정합정보시스템, 하천관리지리정보시스템, 국가지하수정보센터, 국가상수도정보시스템, 농촌용수 종합정보시스템, 물환경정보시스템, 한국수자원학회, 농촌진흥청</dd>
                        </dl>
                    </li>
                </ul>   	
            </div>
        </div>
    </div>
    <!--본문-->
</div>
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->

	
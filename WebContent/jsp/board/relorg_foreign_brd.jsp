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
	
	document.getElementById("tapTitle1").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	document.getElementById("tapTitle2").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
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
                    <ul class="dep2">
                            <li><a href="/nakdong/relOrgBrd.do">- 국내 관련기관</a></li>
                            <li class="dep_on">- 국외 관련기관</a></li>
					</ul>
            </ul>
        </div>
        
        <div id="page">
        	<ul class="PageLocation">
            	<li><img src="/nakdong/resources/images/sub/location_home.gif"></li>
                <li>> 자료실</li>
                <li>> 관련기관 소개</li>
                <li>> 국외 관련기관</li>
        	</ul>
            <h2>관련기관 소개</h2>
            <h4>국외 관련기관의 데이터를 확인하실 수 있습니다.</h4>
           <div class="board_form">
       		<ul class="sub_tab">
              <li id="tapTitle1" class="tap_on" onmouseover='fncBoardOver(1);'>환경관련 정부기관</li>
              <li id="tapTitle2" onmouseover='fncBoardOver(2);'><a href="#">환경사이트</a></li>
              <!-- <li id="tapTitle3" onmouseover='fncBoardOver(3);'><a href="#">시스템</a></li> -->
       		</ul>
       			<!--  정부기관 -->
                <div class="info" id="tap1" style="overflow-y:auto;overflow-x:hidden;height:600px;" >
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <th><div class="imgBox"><a href="http://www.epa.gov/" target="new">
                        <img src="/nakdong/resources/images/sub/img_04_02.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.epa.gov/" target="new">USA - EPA</a>
                        	</dl>
                            <dt>- 주요정보</dt>
                        	<dd> </dd>
                            <dt>- 소속인물</dt>
                            <dd> </dd>
                            <dt>- 소속기관</dt>
                            <dd> </dd>
                            <dt>- 이용안내</dt>
                            <dd> </dd>
                            <dt>- 관련정보</dt>
                            <dd> </dd>
                            <dt>- 소개</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      <tr>
                        <th><div class="imgBox"><a href="#" target="new">
                        <img src="/nakdong/resources/images/sub/img_04_01.jpg"></a></div></th>
                        <td>
                        	<dl><a href="#" target="new">
                        	  ENVFOR-INDIA</a>
                        	</dl>
                            <dt>- 주요정보</dt>
                        	<dd> </dd>
                            <dt>- 소속인물</dt>
                            <dd> </dd>
                            <dt>- 소속기관</dt>
                            <dd> </dd>
                            <dt>- 이용안내</dt>
                            <dd> </dd>
                            <dt>- 관련정보</dt>
                            <dd> </dd>
                            <dt>- 소개</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      
                    </table>
                </div>

                <!--  연구기관 -->
                <div class="info" id="tap2" style="overflow-y:auto;overflow-x:hidden;height:600px;display:none;" >
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <th><div class="imgBox"><a href="http://www.oecd.org/" target="new">
                        <img src="/nakdong/resources/images/sub/img_05_01.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.oecd.org/" target="new">경제개발협력기구(OECD)</a>                         	
                        	</dl>
                           <dt>- 주요정보</dt>
                        	<dd> </dd>
                            <dt>- 소속인물</dt>
                            <dd> </dd>
                            <dt>- 소속기관</dt>
                            <dd> </dd>
                            <dt>- 이용안내</dt>
                            <dd> </dd>
                            <dt>- 관련정보</dt>
                            <dd> </dd>
                            <dt>- 소개</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      <tr>
                        <th><div class="imgBox"><a href="http://www.fao.org/" target="new">
                        <img src="/nakdong/resources/images/sub/img_05_02.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.fao.org/" target="new">
                        	  국제식량농업기구(FAO)</a>
                        	</dl>
                            <dt>- 주요정보</dt>
                        	<dd> </dd>
                            <dt>- 소속인물</dt>
                            <dd> </dd>
                            <dt>- 소속기관</dt>
                            <dd> </dd>
                            <dt>- 이용안내</dt>
                            <dd> </dd>
                            <dt>- 관련정보</dt>
                            <dd> </dd>
                            <dt>- 소개</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      <tr>
                        <th><div class="imgBox"><a href="http://www.iso.ch/" target="new">
                        <img src="/nakdong/resources/images/sub/img_05_03.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.iso.ch/" target="new">
                        	  국제표준화기구(ISO)</a>
                        	</dl>
                            <dt>- 주요정보</dt>
                        	<dd> </dd>
                            <dt>- 소속인물</dt>
                            <dd> </dd>
                            <dt>- 소속기관</dt>
                            <dd> </dd>
                            <dt>- 이용안내</dt>
                            <dd> </dd>
                            <dt>- 관련정보</dt>
                            <dd> </dd>
                            <dt>- 소개</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      
                    </table>
                </div>
            	
            	

                
            	
                
            <!-- div class="pagination">
                	<div class="bt_wr">
                    	<a href="sub_5_write.html">글쓰기</a>
                  </div>
                  <div class="paging">
                    	<span><a href="#"><<</a></span>
                        <span><a href="#"><</a></span>
                        <span><a href="#" class="num_on">1</a></span>
                        <span><a href="#">2</a></span>
                        <span><a href="#">3</a></span>
                        <span><a href="#">4</a></span>
                        <span><a href="#">5</a></span>
                        <span><a href="#">6</a></span>
                        <span><a href="#">7</a></span>
                        <span><a href="#">8</a></span>
                        <span><a href="#">9</a></span>
                        <span><a href="#">></a></span>
                        <span><a href="#">>></a></span>
                  </div>
                  <div class="sch">
                    	<select class="fie_st1">
                    	  <option selected="selected">제목</option>
                    	  <option>내용</option>
                    	  <option>글쓴이</option>
                    	</select>
                        <input type="text" class="fie_st2" />
                        <p class="fie_st3"><a href="#">검색</a></p>
                  </div>
            </div-->
                
            </div>
        </div>
    </div>
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->

	
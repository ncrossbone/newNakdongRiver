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
	String BOARD_SEQ = request.getParameter("BOARD_SEQ");
	if(BOARD_SEQ== null )BOARD_SEQ="";
%>
<script type="text/javascript">

function board_insert() {


}
function go_submit(){
	 var BOARD_TITLE = document.getElementById("BOARD_TITLE").value;
	 var BOARD_CONTENT = document.getElementById("BOARD_CONTENT").value;
	 var BOARD_NO = document.getElementById("BOARD_NO").value;
	 var USER_YN;
	 
	 	if(BOARD_TITLE == ''){
			alert("과제명을 입력해주세요");
			form1.BOARD_TITLE.focus();
			return; 
		}
	 	
	 	if(BOARD_CONTENT == ''){
		 	alert("내용을 입력해주세요");
			form1.BOARD_CONTENT.focus();
			return; 
		}
	 	
	 	form1.submit();
	form1.submit();
}
</script>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/reset.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/common.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/sub.css" />
<script type="text/javascript" src="/nakdong/ckeditor/ckeditor.js"></script>
<style type="text/css">
body,td,th {
	font-family: "돋움", dotum, Helvetica, sans-serif;
}
</style>
</script>
	<!-- top start: menu, toolbar -->
	<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->
<!-- form name="form1" method="post" -->
<form name="form1" method="post" enctype="multipart/form-data" action="/nakdong/board/board_insert1.json">		
  		
    <div id="cont_wall">
        <div id="sub_contents">
       	  <div class="left_Menu">
            	<H3>자료실<span></span></H3>
            <ul class="list">
                	<li><a href="/nakdong/waterBrd.do">물환경 보고서</a></li>
                    <li><a href="/nakdong/hydroBrd.do">수생태계 보고서</a></li>
                    <li class="on"><a href="/nakdong/envBrd.do">환경기초조사사업</a></li>
                      <ul class="dep2">
                            <li class="dep_on">- 1단계 보고서</li>
                            <li><a href="/nakdong/envBrd2.do">- 2단계 보고서</a></li>
						  </ul>
                    <li><a href="/nakdong/relOrgBrd.do">관련기관 소개</a></li>
            </ul>
        </div>
        
        <div id="page">
        	<ul class="PageLocation">
            	<li><img src="/nakdong/resources/images/sub/location_home.gif"></li>
                <li>> 자료실</li>
                <li>> 환경기초조사사업</li>
                <li>> 1단계 보고서</li>
        	</ul>
            <h2>환경기초조사사업</h2>
            <h4>환경기초조사사업 1단계 보고서 관련된 데이터를 확인하실 수 있습니다.</h4>
          <div class="board_form">

            	<table cellpadding="0" cellspacing="0" class="view_3">
                  <tr>
                    <th height="116" class="view_top">과제명<td colspan="3" class="view_top"><input name="BOARD_TITLE" maxlength=50  type="text" class="enter_title" id="BOARD_TITLE" />
                    <input name="BOARD_NO" type="hidden"  id="BOARD_NO" value="3"/>
                    <input name="BOARD_SEQ" type="hidden"  id="BOARD_SEQ" value="<%=BOARD_SEQ%>"/></th>
                  </tr>
                  <tr>
                    <th>연구책임자</th>
                    <td><input name="RES_OWNER" id="RES_OWNER" type="text" max length=10 class="basic_form" id="textfield" /></td>
                    <!--th>연구기간</th-->
                    <!--td><input name="RES_START_DATE"  id="RES_START_DATE" maxlength=12 type="text" class="enter_date2" id="textfield" />
                    ~ <input name="RES_END_DATE" id="RES_END_DATE" maxlength=12 type="text" class="enter_date2" id="textfield" /></td-->
                  </tr>
                  <tr>
                    <!--th>연구비</th-->
                    <!--td><input name="RES_COST" id ="RES_COST" type="text" maxlength=20  class="basic_form" id="textfield" /></td-->
                    <th>연구기관</th>
                    <td><input name="RES_ORG" id="RES_ORG" type="text" maxlength=10 class="basic_form" id="textfield" /></td>
                  </tr>
                  <tr>
                    <!--th>분야</th-->
                    <!--td>
                      <input name="RES_AREA" id="RES_AREA" maxlength=20 type="text" class="basic_form" id="textfield" />
                    </td-->
                    <th>년도</th>
                    <td><input name="RES_YEAR" id="RES_YEAR" maxlength=4 type="text" class="basic_form" id="textfield" />
                    </td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td colspan="3"><input name="FILE_NAME1" type="file" class="enter_title" id="FILE_NAME1" /></td>
                  </tr>
                  <tr>
                    <td colspan="4" class="inclu_cont"><textarea id="BOARD_CONTENT" name ="BOARD_CONTENT" cols="" rows="" class="ckeditor"></textarea></td>
                  </tr>
            	</table>

                
                <div class="pagination">
               	  	<div class="bt_wr"><a href="javascript:go_submit()">등록</a></div>
                </div>
                
            </div>
        </div>
    </div>
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->
<script language="javascript">
	function showView(){
	
	var BOARD_SEQ = document.getElementById("BOARD_SEQ").value;
	$.ajax({ 
		type     : "POST"
	,   url      : "/nakdong/board/board_view.json"
	,   dataType : "json"
	,	data : "BOARD_SEQ="+BOARD_SEQ
	,   success  : function(data) {
		set_data(data.result);
		
		  },error:function(request,status,error){
			  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			  }
	
	
	}); 
}


function set_data(dataList){

	var resultHtml ="";
	var title="";
	var cont="";
	var regDate ="";
	var fileCont ="";
	var RES_OWNER           ="";     
	var RES_START_DATE      ="";     
	var RES_END_DATE        ="";     
	var RES_COST            ="";     
	var RES_ORG             ="";     
	var RES_AREA            ="";     
	var RES_YEAR            ="";     
	var BOARD_CONTENT       ="";     
	var FILE_NAME           ="";     
	var REAL_FILE_PATH      ="";     
	var CREATE_DATE         ="";     
	var MODIFY_DATE         ="";     
	var READ_CNT            ="";     
	var USE_YN              ="";     
	$.each(dataList, function(index, json) {
		title = json.BOARD_TITLE;
		cont = json.BOARD_CONTENT;
		regDate = json.CREATE_DATE;
		
		RES_OWNER           = json.RES_OWNER;
		RES_START_DATE      = json.RES_START_DATE;
		RES_END_DATE        = json.RES_END_DATE;
		RES_COST            = json.RES_COST;
		RES_ORG             = json.RES_ORG;
		RES_AREA            = json.RES_AREA;
		RES_YEAR            = json.RES_YEAR;
		BOARD_CONTENT       = json.BOARD_CONTENT;
		FILE_NAME           = json.FILE_NAME;
		REAL_FILE_PATH      = json.REAL_FILE_PATH;
		CREATE_DATE         = json.CREATE_DATE;
		MODIFY_DATE         = json.MODIFY_DATE;
		READ_CNT            = json.READ_CNT;
		USE_YN              = json.USE_YN;
		
		
	});
	document.getElementById("BOARD_TITLE").value=title;
	document.getElementById("BOARD_CONTENT").value=cont;

	document.getElementById("RES_OWNER").value = RES_OWNER           ;
	document.getElementById("RES_START_DATE").value = RES_START_DATE;
	document.getElementById("RES_END_DATE").value = RES_END_DATE        ;
	document.getElementById("RES_COST").value = RES_COST            ;
	document.getElementById("RES_ORG").value = RES_ORG             ;
	document.getElementById("RES_AREA").value = RES_AREA            ;
	document.getElementById("RES_YEAR").value = RES_YEAR            ;
		//$("board_result").html(resultHtml);
	
		
	
}
<% if(BOARD_SEQ!=null && BOARD_SEQ!=""){%>
showView();
<%}%>
</script>
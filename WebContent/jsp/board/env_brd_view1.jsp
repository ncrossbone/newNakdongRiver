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
</script>
	<!-- top start: menu, toolbar -->
	<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->
<form name="form1" method=post>				
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

                <form id="attFrm" name="attFrm">
            	<table cellpadding="0" cellspacing="0" class="view_3">
                  <tr>
                    <th class="view_top">과제명<td colspan="3" class="view_top">
                    <div id=BOARD_TITLE></div></th>
                  </tr>
                  <tr>
                    <th>연구책임자</th>
                    <td><div id=RES_OWNER></div></td>
                    <!--th>연구기간</th-->
                    <!--td><div id=RES_START_DATE></div></td-->
                  </tr>
                  <tr>
                    <!--th>연구비</th-->
                    <!--td><div id=RES_COST></div></td-->
                    <th>연구기관</th>
                    <td><div id=RES_ORG></div></td>
                  </tr>
                  <tr>
                    <!--th>분야</th-->
                    <!--td><div id=RES_AREA></div></td-->
                    <th>년도</th>
                    <td><div id=RES_YEAR></div></td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td colspan="3">
	                    <div id="FILE_CONT"></div>
	                    <input type="hidden" id="filePath" name="filePath" />
	                    <input type="hidden" id="fileNm" name="fileNm" />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="inclu_cont">
                     <div id="CONT"></div></td>
                  </tr>
            	</table>
                <input type=hidden name="BOARD_SEQ" id="BOARD_SEQ" value="<%=BOARD_SEQ%>">
                </form>
                <div class="pagination">
               	  <div class="bt_wr"><a href="/nakdong/envBrd.do">목록</a></div>
               	  <%if("관리자".equals(USER_NM)){ %>
                    <div class="bt_wr"><a href="javascript:deleteBoard()">삭제</a></div>
                    <div class="bt_wr"><a href="/nakdong/envBrdWrite.do?BOARD_SEQ=<%=BOARD_SEQ%>">수정</a></div>
                  <%}%>
                </div>
                
            </div>
        </div>
    </div>
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->
<script type="text/javascript">
//추가.2015-01-13
//추가.2015-01-13
$(document).ready(function(){
	$("#FILE_CONT").on({
		click : function(){
			fn_suerveyPopup();
		}
	});
});
function fn_suerveyPopup(){
	var url = "/nakdong/survey_popup.do";
	var param = "BOARD_SEQ=<%=BOARD_SEQ%>";
		param += "&fileNm=" + $("#fileNm").val().toString();
		param += "&filePath=" + $("#filePath").val().toString();
	var link = url +"?"+ param;
	gfn_popup(link,540,540,"survey_popup");
}

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
	try{ <%-- 널값에 대한 script 오류창 뜨지 않도록 방지 --%>
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
			
			if(json.FILE_NAME != null && "" != json.FILE_NAME){
				resultHtml+="<a href='/nakdong/upload/"+json.REAL_FILE_PATH+"'><span class='file_"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"'></span></a>";
				
				fileCont="<span class='file_"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"'></span><a style='cursor:pointer'>"+json.FILE_NAME+"</a>";
				// 추가작업, 2015-01-13
				$("#fileNm").val(json.FILE_NAME);
				$("#filePath").val(json.REAL_FILE_PATH);
			}
		});
		document.getElementById("BOARD_TITLE").innerHTML=title;
		document.getElementById("CONT").innerHTML=cont;
		document.getElementById("FILE_CONT").innerHTML=fileCont;
		document.getElementById("RES_OWNER").innerHTML = RES_OWNER           ;
		document.getElementById("RES_START_DATE").innerHTML = RES_START_DATE+" ~ "+  RES_END_DATE    ;
		//document.getElementById("RES_END_DATE").innerHTML = RES_END_DATE        ;
		document.getElementById("RES_COST").innerHTML = RES_COST            ;
		document.getElementById("RES_ORG").innerHTML = RES_ORG             ;
		document.getElementById("RES_AREA").innerHTML = RES_AREA            ;
		document.getElementById("RES_YEAR").innerHTML = RES_YEAR            ;
			//$("board_result").html(resultHtml);
	
	}catch(e){  }
	
}

function deleteBoard(){

var bAnswer = confirm("삭제하시겠습니까?");
if (bAnswer == true) {    
	$.ajax({
		type: "POST",
		url: "/nakdong/board/deleteBoard.json",
		data: "BOARD_SEQ="+"<%= BOARD_SEQ%>",				  
			  
		success: function(msg){
		
			if (msg == 'success') {
				alert("삭제되었습니다.")				
				document.form1.action = "/nakdong/envBrd.do";
				document.form1.submit();
			} else {
			alert("삭제에 실패했습니다.");
			return;
			}
	
		}
	 
	});

}

}
showView();
</script>
	
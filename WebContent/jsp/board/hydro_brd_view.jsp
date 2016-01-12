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
                    <li class="on"><a href="/nakdong/hydroBrd.do">수생태계 보고서</a></li>
                    <li><a href="/nakdong/envBrd.do">환경기초조사사업</a></li>
                    <li><a href="/nakdong/relOrgBrd.do">관련기관 소개</a></li>
            </ul>
        </div>
        
        <div id="page">
        	<ul class="PageLocation">
            	<li><img src="/nakdong/resources/images/sub/location_home.gif"></li>
                <li>> 자료실</li>
                <li>> 수생태계 보고서</li>
          </ul>
            <h2>수생태계 보고서</h2>
            <h4>수생태계 보고서 관련된 데이터를 확인하실 수 있습니다.</h4>
         <div class="board_form">

            	<table cellpadding="0" cellspacing="0" class="view_3">
                  <tr>
                    <th class="view_top">제목</th>
                    <td colspan="3" class="view_top"><div id="TITLE"></div></td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td><div id=FILE_CONT></div></td>
                    <th>등록일</th>
                    <td><div id="REG_DATE"></div></td>
                  </tr>
                  <tr>
                    <td colspan="4" class="inclu_cont"><div id="CONT"></div></td>
                  </tr>
            	</table>

                <input type=hidden name="BOARD_SEQ" id="BOARD_SEQ" value="<%=BOARD_SEQ%>">
                <div class="pagination">
                	<div class="bt_wr"><a href="/nakdong/hydroBrd.do">목록</a></div>
                	  <%if("관리자".equals(USER_NM)){ %>
	                    <div class="bt_wr"><a href="javascript:deleteBoard()">삭제</a></div>
	                    <div class="bt_wr"><a href="/nakdong/hydroBrdWrite.do?BOARD_SEQ=<%=BOARD_SEQ%>">수정</a></div>
                    <%}%>
                </div>
                
            </div>
        </div>
    </div>
	</form>
	
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->
<script type="text/javascript">
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
	$.each(dataList, function(index, json) {
		title = json.BOARD_TITLE;
		cont = json.BOARD_CONTENT;
		regDate = json.CREATE_DATE;
		if(json.FILE_NAME != null && "" != json.FILE_NAME){
			resultHtml+="<a href='/nakdong/upload/"+json.REAL_FILE_PATH+"'><span class='file_"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"'></span></a>";
			
			fileCont="<span class='file_"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"'></span><a href='/nakdong/upload/"+json.REAL_FILE_PATH+"'>"+json.FILE_NAME+"</a>";
		}
	});
	document.getElementById("TITLE").innerHTML=title;
	document.getElementById("CONT").innerHTML=cont;
	document.getElementById("REG_DATE").innerHTML=regDate;
	document.getElementById("FILE_CONT").innerHTML=fileCont;
	
		//$("board_result").html(resultHtml);
	
		
	
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
	document.form1.action = "/nakdong/hydroBrd.do";
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
	
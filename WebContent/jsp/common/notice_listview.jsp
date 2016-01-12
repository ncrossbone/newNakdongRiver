<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<%@ page import="com.login.model.TuserVO"%>
<%@ page import="com.login.web.*" %>
<%@ page import="com.util.*" %>

<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> --%>
<%-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> --%>
<%-- <%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%> --%>
<%-- <%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>   --%>

<%

	TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);

	String SESSION_USER_ID = ""; 
	String SESSION_USER_NM = ""; 

	if(tuserVO == null){
	
		out.print("<script type='text/javascript'>");
		out.print("alert('세션이 종료 되었습니다. 다시 로그인 하여 주시기 바랍니다.');");
		out.print("try{opener.location.href='/nakdong/login.do';}catch(e){}");
		out.print("self.close();");
		out.print("</script>");
	}
	else {
		SESSION_USER_ID = tuserVO.getUSER_ID();
		SESSION_USER_NM = tuserVO.getUSER_NM();
	}
	
	// request
	String NOTICE_CODE = request.getParameter("NOTICE_CODE");
%>


<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
	
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<!--     <meta http-equiv="X-UA-Compatible" content="IE=7"> -->
<!--     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> -->
	<title>낙동강 물환경 통합관리시스템</title>
	
<!-- 	 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/style.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/board.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/cont.css"> -->
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/board.css">
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
	    <script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
	    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
	
	 <script type="text/javascript">
		var NOTICE_CODE = "";
		$(document).ready(function(){
 		 testAjax();

		 
});

function testAjax(){
	
		$.ajax({
				type: "POST",
				url: "/nakdong/notice/selectsublist.json",
				data: "NOTICE_CODE="+"<%= NOTICE_CODE%>",
					  
				success: function(data){

					set_List(data.result);
				}
			 
			});
}

function set_List(dataList){

					var resultHtml ="";
					
					$.each(dataList, function(index, json) {
						var row = "";

						row +='<tr>';
						
						row +='<td class="view_top_title">제목</td>';
						row +='<td class="view_top_subject">'+json.NOTICE_TITLE+'</td>';
						row +='<td class="view_top_write">작성자</td>';
						row +='<td class="view_top_name">'+json.USER_NM+'</td>';
						row +='<td class="view_top_date_1">작성일</td>';
						row +='<td class="view_top_date_2">'+json.UPDATE_DATE+'</td>';
						row +='</tr>';
						
						row +='<tr>';						
						row +='<td class="view_top_hit_1">사용여부</td>';
						row +='<td class="view_top_hit_2">'+json.USER_YN_DISP+'</td>';
						row +='<td class="view_top_hit_1">조회수</td>';
						row +='<td class="view_top_hit_3" colspan="3">'+json.HIT_COUNT+'</td>';
						row +='</tr>';
						
// 						row +='<tr>';
// 						row +='<td class="bbs_w_list">작성일</td>';
// 						row +='<td bgcolor="FFFFFF" style="text-align:left;">'+json.UPDATE_DATE+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';
// 						row +='<td class="bbs_w_list">최종등록 아이디</td>';
// 						row +='<td  bgcolor="FFFFFF" style="text-align:left;">'+json.UPDATE_USER_ID+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';
// 						row +='<td class="bbs_w_list">조회수</td>';
// 						row +='<td bgcolor="FFFFFF" style="text-align:left;">'+json.HIT_COUNT+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';					
// 						row +='<td class="bbs_w_list">파일 타입</td>';
// 						row +='<td bgcolor="FFFFFF" style="text-align:left;">'+json.FILE_PATH+'</td>';
// 						row +='</tr>';
						
						row +='<tr>';
						row +='<td colspan="6">';
						row +='<div id="view_cont">'+json.NOTICE_CONTENTS+'</div>';
						row +='</td>';
						row +='</tr>';
						resultHtml += row;
						
					});
					
					$("#adressList thead").html(resultHtml);

			}

			function modify(){

				document.form1.action = "/nakdong/Notice_modify.do?NOTICE_CODE=<%=NOTICE_CODE%>";
				document.form1.submit();

					
			}

			function deleteNotice(){
	
    var bAnswer = confirm("삭제하시겠습니까?");
    if (bAnswer == true) {    
		$.ajax({
				type: "POST",
				url: "/nakdong/notice/deleteNotice.json",
				data: "NOTICE_CODE="+"<%= NOTICE_CODE%>",				  
					  
				success: function(msg){
				
				if (msg == 'success') {
				alert("삭제되었습니다.")				
				document.form1.action = "/nakdong/notice.do";
				document.form1.submit();
			} else {
				alert("삭제에 실패했습니다.");
				return;
			}

				}
			 
			});

		}
	
	}

		
	</script>
</head>

<body>

<form name="form1" method="post">

<table id="adressList" width="658" border="0" cellspacing="0" cellpadding="0">
<thead>
</thead>
<tbody>
  <tr>
    <td colspan="6">
	    <div id="view_bt_left">
	     	<a href="/nakdong/notice.do"><img src="/nakdong/resources/images/common/list.gif" width="45" height="20"></a> 
	    </div>
	  	<div id="view_bt_right">
	  	<%if("관리자".equals(SESSION_USER_NM)){ %>
	  		<a href="#" onclick="javascript:modify();"><img src="/nakdong/resources/images/common/modify.gif" width="45" height="20"></a>
	  		<a href="#" onclick="javascript:deleteNotice();"><img src="/nakdong/resources/images/common/delete.gif" width="45" height="20"></a>
	  	<%} %>	
	  	</div>
  	</td>
    </tr>
</tbody>
</table>

</form>
	
</body>
</html>

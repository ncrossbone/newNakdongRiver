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

	// REQUEST
	String NOTICE_CODE = request.getParameter("NOTICE_CODE");
%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
	
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<!--     <meta http-equiv="X-UA-Compatible" content="IE=7"> -->
<!--     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> -->
	
	<title>낙동강 물환경 통합관리시스템</title>

    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery-ui-1.10.3.custom.css">
<!--     <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common_admin.css"> -->
<!--  	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/style.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/cont.css"> -->
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/board.css">
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
	    <script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>

	 <script type="text/javascript">
		var USER_PW = "";
		var USER_NM = "";
		var CONFIRM_YN = "";
		var DN_STR = "";
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
						row +='<td class="modify_top_title">제목</td>';
						row +='<td class="modify_top_bg"><label><input type="text" id="NOTICE_TITLE" name="NOTICE_TITLE" class="modify_title_field" value="' + json.NOTICE_TITLE + '"></label></td>';
						row +='</tr>';
						row +='<tr>';
						
						row +='<td class="modify_top_1">사용여부</td>';
						row +='<td class="modify_text">';
						row +='<label> ';
						
						if(json.USER_YN="Y"){
							row +='<input type="radio" name="USER_YN" id="USER_YN" value="Y" checked>사용</label>';
						}
						else {
							row +='<input type="radio" name="USER_YN" id="USER_YN" value="Y">사용</label>';
						}
						
						row +='<label>';
						
						if(json.USER_YN="N"){
							row +='<input type="radio" name="USER_YN" id="USER_YN" value="N" checked>미사용</label>';
						}
						else {
							row +='<input type="radio" name="USER_YN" id="USER_YN" value="N">미사용</label>';
						}
						
						
						row +='</td>';
						row +='</tr>';
// 						row +='<tr>';
// 						row +='<td class="bbs_w_list">파일 타입</td>';
// 						row +='<td bgcolor="FFFFFF" style="text-align:left;"><input type="text" id="FILE_PATH" name="FILE_PATH" value="'+json.FILE_PATH+'"></td>';
// 						row +='</tr>';
						row +='<tr>';
						row +='<td colspan="2"><div id="modify_cont"><lable>';
						row +='<textarea wrap="HARD" id="NOTICE_CONTENTS" name="NOTICE_CONTENTS" class="modify_write" style="resize:none;">' + json.NOTICE_CONTENTS + '</textarea></label></div>';
						row +='</td>';						
						row +='</tr>';						
						resultHtml += row;
						
					});			
					$("#adressList thead").html(resultHtml);

			}
			function modify(){
				var NOTICE_TITLE = form1.NOTICE_TITLE.value;
				
// 				var USER_YN = form1.USER_YN.value;
				var USER_YN;
 				var len = document.form1.USER_YN.length;

				for(var inx=0; inx<len; inx++){
					if(document.form1.elements["USER_YN"][inx].checked){
						USER_YN = document.form1.elements['USER_YN'][inx].value;
					}
				}

// 				var FILE_PATH = form1.FILE_PATH.value;
				NOTICE_CONTENTS = form1.NOTICE_CONTENTS.value;
				$.ajax({
				type: "POST",
				url: "/nakdong/notice/selectmodify.json",
				data: "NOTICE_CODE="+"<%= NOTICE_CODE%>"
				+"&NOTICE_TITLE="+NOTICE_TITLE
				+"&USER_YN="+USER_YN
// 				+"&FILE_PATH="+FILE_PATH
				+"&NOTICE_CONTENTS="+NOTICE_CONTENTS
				,success: function(data){
				alert("수정 되었습니다.");
				document.form1.action = "/nakdong/notice.do";
				document.form1.submit();
				}
			 
			});

		}
	
	</script>
</head>

<body>
<form name="form1" method="post">

<table id="adressList"  width="658"  border="0" border="0" cellspacing="0" cellpadding="0">
<thead>
</thead>
<tbody>

	<tr>
        <td colspan="4" align="center">
		    <div id="write_okay">
		    	<a href="#" onClick="modify();"><img src="/nakdong/resources/images/common/okay.gif" width="45" height="20" border="0"></a>
				<a href="/nakdong/notice.do"><img src="/nakdong/resources/images/common/cancle.gif" width="45" height="20" border="0"></a>
			</div>
		</td>
      </tr>

</tbody>
</table>
</form>
</body>
</html>
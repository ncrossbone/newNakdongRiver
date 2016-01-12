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
%>

<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
	
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<!--     <meta http-equiv="X-UA-Compatible" content="IE=7"> -->
<!--     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> -->
	
	<title>낙동강 물환경 통합관리시스템</title>

<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/style.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/cont.css"> -->
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/board.css">
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
	    <script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>

	 <script type="text/javascript">

function notice_insert() {
 var NOTICE_TITLE = document.getElementById("NOTICE_TITLE").value;
 var NOTICE_CONTENTS = document.getElementById("NOTICE_CONTENTS").value;
 var USER_YN;
 var len = document.form1.USER_YN.length;

	for(var inx=0; inx<len; inx++){
		if(document.form1.elements["USER_YN"][inx].checked){
			USER_YN = document.form1.elements['USER_YN'][inx].value;
		}
	}
	
 	if(NOTICE_TITLE == ''){
		alert("제목을 입력해주세요");
		form1.NOTICE_TITLE.focus();
		return; 
	}
 	if(USER_YN == ''){
	 	alert("사용여부를 선택해주세요");
		return; 
	}
 	if(NOTICE_CONTENTS == ''){
	 	alert("내용을 입력해주세요");
		form1.NOTICE_CONTENTS.focus();
		return; 
	}
	
		$.ajax({
				type: "POST",
				url: "/nakdong/notice/notice_insert.json",
				data:"NOTICE_TITLE="+NOTICE_TITLE
				+"&NOTICE_CONTENTS="+NOTICE_CONTENTS
				+"&USER_YN="+USER_YN
				,					  
				success: function(msg){
				
				if (msg == 'success') {
				alert("저장하였습니다");
				document.form1.action = "/nakdong/notice.do";
				document.form1.submit();
			} else {
				alert("저장에실패했습니다.다시입력해주세요");
				return;
			}

				}

			});
	

}
function notice_reset(){
				document.form1.action = "/nakdong/notice.do";
				document.form1.submit();

}

</script>
</head>

<body>
<form name="form1" method="post">

<!-- <table id="adressList"  width="540"  border="0" cellpadding="4" cellspacing="1" bgcolor="d3dae3" style="position:absolute;"> -->

<!-- <tr>  -->
<!-- <td class="bbs_w_list"> 게시물 제목</td> -->
<!-- <td bgcolor="FFFFFF" style="text-align:left;">  -->
<!-- <input type="text" name="NOTICE_TITLE"  id="NOTICE_TITLE"  size="50" maxlength="100"> -->
<!-- </td> -->
<!-- </tr> -->
<!-- <tr>  -->
<!-- <td class="bbs_w_list"> 작성자</td> -->
<!-- <td bgcolor="FFFFFF" style="text-align:left;">  -->
<%-- <input type="text" name="UPDATE_USER_ID" id="UPDATE_USER_ID" value="<%=USER_ID%>" readonly="readonly" size="50" maxlength="50"> --%>
<!-- </td> -->
<!-- </tr> -->

<!-- <tr>  -->
<!-- <td class="bbs_w_list">파일 타입</td> -->
<!-- <td bgcolor="FFFFFF" style="text-align:left;">  -->
<!-- <input type="text" name="FILE_PATH"  id="FILE_PATH"  size="50" maxlength="100"> -->
<!-- </td> -->
<!-- </tr> -->
<!-- <tr> -->
<!-- <td class="bbs_w_list">내용</td> -->
<!-- <td bgcolor="FFFFFF" style="text-align:left;"> -->
<!-- <textarea name="NOTICE_CONTENTS" id="NOTICE_CONTENTS" rows="20" cols="50" wrap="HARD"></textarea> -->
<!-- </td> -->
<!-- </tr> -->
	
	 		
<!-- 	<tr> -->
<!-- 	<td colspan="2" class="bbs_w_list" height="30px"> -->
<!-- 		<div align="right"><input type="button" name="insert" value="등록" onClick="notice_insert()"> -->
<!-- <input type="reset" name="reset" value="취소" onClick="notice_reset()"> </div> -->
<!-- 		</td> -->
<!-- 	</tr> -->
<!-- </tbody> -->
<!-- </table> -->


  <table id="adressList" width="658" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td class="modify_top_title">제목</td>
      <td colspan="3" class="modify_top_bg">
	  <label>
          <input type="text" name="NOTICE_TITLE"  id="NOTICE_TITLE"  class="modify_title_field" maxlength="100">
      </label>	  
      </td>
      </tr>
	  <tr>
	  <td class="modify_top_1">사용여부</td>
      <td class="modify_text">
		<label> 
        <input type="radio" name="USER_YN" id="USER_YN" value="Y" checked>사용</label>
	    <label>
	    <input type="radio" name="USER_YN" id="USER_YN" value="N">미사용</label>
	  </td>
      <td class="modify_top_1">작성자</td>
      <td class="modify_text"><%=SESSION_USER_NM%></td>
      </tr>
    <tr>
      <td colspan="4"><div id="modify_cont">
        <label>
        <textarea name="NOTICE_CONTENTS" id="NOTICE_CONTENTS" wrap="HARD" class="modify_write"></textarea>
        </label>
      </div></td>
      </tr>
    <tr>
      <td height="1" colspan="4" bgcolor="#ececec"></td>
    </tr>
	<tr>
      <td height="1" colspan="4"></td>
    </tr>
    <tr>
      <td height="1" colspan="4" bgcolor="#ececec"></td>
    </tr>
	<tr>
        <td colspan="4" align="center">
		    <div id="write_okay">
		    	<a href="#" onClick="notice_insert()"><img src="/nakdong/resources/images/common/okay.gif" width="45" height="20" border="0"></a>
				<a href="#" onClick="notice_reset()"><img src="/nakdong/resources/images/common/cancle.gif" width="45" height="20" border="0"></a>
			</div>
		</td>
      </tr>
  </table>



</form>
</body>
</html>

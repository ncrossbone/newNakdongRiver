<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<%@ page import="com.util.*" %>
<%@page import="com.login.model.TuserVO"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%	

	TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);

	String SESSION_USER_ID = ""; 
	String SESSION_USER_NM = ""; 

	// session check
	if(tuserVO == null){
	
		out.print("<script type='text/javascript'>");
		out.print("alert('세션이 종료 되었습니다. 다시 로그인 하여 주시기 바랍니다.');");
		out.print("location.href = '/nakdong/login.do';");
		out.print("</script");
	}
	else {

		SESSION_USER_ID = tuserVO.getUSER_ID();
		SESSION_USER_NM = tuserVO.getUSER_NM();
	}

 		
// 	String USER_ID = new String(request.getParameter("USER_ID").getBytes("iso-8859-1"), "UTF-8");

	
%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
	
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<!--     <meta http-equiv="X-UA-Compatible" content="IE=7"> -->
<!--     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> -->
	
	<title>낙동강 물환경 통합관리시스템</title>

<!--     <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery-ui-1.10.3.custom.css"> -->
<!--     <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common_admin.css"> -->
<!--  	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/style.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/cont.css"> -->
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/admin_style.css">
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/board.css">
	
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
	    <script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/custom/login/login.js"></script>

	 <script type="text/javascript">


function idCheck(){
		var USER_ID = document.getElementById("USER_ID").value;
		
				$.ajax({
				type: "POST",
				url: "/nakdong/login/idCheck.json",
				data : $('form').serialize(),
				success: function(msg){
		
				if (USER_ID.length < 4) {
				alert('아이디 4글자 이상 입력해주세요.');
				return;
			}
			if (msg == 'success') {
				alert("사용가능한 아이디 입니다.");
				return;
			} else {
				alert("이미 사용중인 아이디 입니다.");
				$('#USER_ID').val('').focus();
				return;
			}
				}
			 
			});

		}
function admin_insert() {
 var USER_ID = document.getElementById("USER_ID").value;
 var USER_PW = document.getElementById("USER_PW").value;
 var LEVEL_CD = document.getElementById("LEVEL_CD").value;
 var CONFIRM_YN = document.getElementById("CONFIRM_YN").value;
 var DN_STR = document.getElementById("DN_STR").value;
 
 if(USER_ID==""){
	 alert("아이디를 입력하십시오.");
	 return;
 }
 
 if(USER_PW==""){
	 alert("비밀번호를 입력하십시오.");
	 return;
 }

 var USER_NM = "";
	if(LEVEL_CD=="0"){
	
	USER_NM="관리자";

	}
	if(LEVEL_CD=="1"){
	
	USER_NM="유역청";

	}
	if(LEVEL_CD=="2"){
	
	USER_NM="지자체";

	}
	
		$.ajax({
				type: "POST",
				url: "/nakdong/login/admin_insert.json",
				data: "USER_ID="+USER_ID
				+"&USER_PW="+USER_PW
				+"&USER_NM="+USER_NM
				+"&LEVEL_CD="+LEVEL_CD
				+"&CONFIRM_YN="+CONFIRM_YN
				+"&DN_STR="+DN_STR,					  
				success: function(msg){
				
				if (msg == 'success') {
				alert("저장하였습니다");
				document.form1.action = "/nakdong/admin4.do";
				document.form1.submit();
			} else {
				alert("저장에실패했습니다.다시입력해주세요");
				$('#USER_ID').val('').focus();
				return;
			}

				}

			});
	

}

	</script>
<head>

<body onLoad="MM_preloadImages('/nakdong/resources/images/admin/sub_topmenu_1_2_over.png','/nakdong/resources/images/admin/sub_topmenu_1_4_over.png','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png')">
	
	<!-- top start: menu, toolbar -->
	<jsp:include page="topNoMap.do" flush="false"></jsp:include>
	<!-- top end -->

<!-- warp 시작 -->
<div id="warp">

<form name="form1" method="post">

<!-- 	<div id="sub_top_menu"> -->
<!-- 		<div id="sub_top_info"> -->
<!-- 			<img src="/nakdong/resources/images/admin/icon_home.gif" width="15" height="12">HOME&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_modify.gif" width="15" height="12">정보수정&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_connect.gif" width="15" height="14">최종접속일 : 2013-08-31  -->
<!-- 		</div> -->
<!--   		<div id="sub_top_menu_list"> -->
<!-- 			<a href="/admin.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image13','','/nakdong/resources/images/admin/sub_topmenu_1_1_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_1_off.png" name="Image13" width="92" height="33" border="0"></a> -->
<!-- 			<a href="/admin2.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image11','','/nakdong/resources/images/admin/sub_topmenu_1_2_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_2_off.png" name="Image11" width="92" height="33" border="0"></a> -->
<!-- 			<a href="/admin3.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image14','','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_3_off.png" name="Image14" width="161" height="33" border="0"></a> -->
			
<!-- 			<img src="/nakdong/resources/images/admin/sub_topmenu_1_4_over.png" width="92" height="33"> -->
<!-- 			<input type="hidden" id="L_CODE" name="L_CODE" value="04"/> -->
<!-- 		</div> -->
<!-- 	</div> -->

<div id="sub_top_menu">
  <div id="sub_top_info"><img src="/nakdong/resources/images/admin/icon_home.gif" width="15" height="12"><a href="/nakdong/dbStatus.do">HOME</a>&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_modify.gif" width="15" height="12"><a href="/nakdong/admin_subList.do?USER_ID=<%=SESSION_USER_ID%>">정보수정</a>&nbsp;&nbsp;
<!--   <img src="/nakdong/resources/images/admin/icon_connect.gif" width="15" height="14">최종접속일 : 2013-08-31 -->
  </div>
  <ul class="top_Menu">
  	<li><a href="/nakdong/admin.do" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image11','','/nakdong/resources/images/admin/sub_topmenu_1_1_over.png',1)"><img src="/nakdong/resources/images/admin/sub_topmenu_1_1_off.png" name="Image11" width="92" height="33" border="0"></a></li>
	<li><a href="/nakdong/admin2.do" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image14','','/nakdong/resources/images/admin/sub_topmenu_1_2_over.png',1)"><img src="/nakdong/resources/images/admin/sub_topmenu_1_2_off.png" name="Image14" width="92" height="33" border="0"></a></li>
	<li><a href="/nakdong/admin3.do" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image15','','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png',1)"><img src="/nakdong/resources/images/admin/sub_topmenu_1_3_off.png" name="Image15" width="161" height="33" border="0"></a></li>
	<li><img src="/nakdong/resources/images/admin/sub_topmenu_1_4_over.png"></li>	
  </ul>
</div>

	<!--co시작-->	
	<div id="co">
<!--왼쪽메뉴-->
<!-- 		<div id="left_menu_frame"> -->
<!-- 			<div id="left_conn_info"> -->
<!-- 				<div id="left_conn_title_name"> -->
<!-- 		  			<div id="logout"> -->
<!-- 		  				<a href="#"><img src="/nakdong/resources/images/admin/con_info_logout.gif" width="64" height="22" border="0"></a> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 				<div id="nak_title"></div> -->
<!-- 				<div id="con_welcome"> -->
<!-- 					안녕하세요<br/> -->
<!-- 					<b>(관리자)</b>님 환영합니다.  -->
<!-- 				</div> -->
<!-- 			</div> -->
	  
<!-- 			<div id="left_menu"><img src="/nakdong/resources/images/admin/left_menu_top_text.gif" width="305" height="42"> -->
<!-- 				<div id="left_menu_list"> -->
<!-- 	    			<div id="left_menu_4_off"> -->
<!-- 	  					<a href="/admin.do"><img src="/nakdong/resources/images/admin/left_menu_1_1_off.gif" width="65" height="17"></a> -->
	    				
<!-- 	    			</div> -->
<!-- 	  				<div id="left_menu_division_line"></div> -->
<!-- 	  				<div id="left_menu_2_off"> -->
<!-- 	  					<a href="/admin2.do"><img src="/nakdong/resources/images/admin/left_menu_1_2_off.gif" width="65" height="17" border="0"></a> -->
<!-- 					</div> -->
<!-- 	  				<div id="left_menu_division_line"></div> -->
<!-- 	  				<div id="left_menu_3_off"> -->
<!-- 	  					<a href="/admin3.do"><img src="/nakdong/resources/images/admin/left_menu_1_3_off.gif" width="146" height="17" border="0"></a> -->
<!-- 					</div> -->
<!-- 	  				<div id="left_menu_division_line"></div> -->
<!-- 	  				<div id="left_menu_1_over"> -->
<!-- 						<img src="/nakdong/resources/images/admin/left_menu_1_4_over.gif" width="46" height="17" border="0"><br/> -->
					
<!-- 						<li> -->
<!-- 	    					<a href="/admin4.do">사용자관리</a><br/> -->
<!-- 						</li> -->

<!-- 					</div> -->
<!-- 	  				<div id="left_menu_division_line"></div> -->
<!-- 	  			</div> -->
<!-- 	  		</div> -->
<!-- 		</div> -->

<div id="left_menu_frame">
  <div id="left_conn_info">
    <div class="left_conn_title_name">
	  <div class="logout"><a href="javascript:logout();"><img src="/nakdong/resources/images/admin/con_info_logout.gif" width="64" height="22" border="0"></a></div>
  </div>
  <div class="name"><img src="/nakdong/resources/images/admin/con_info_text.gif" width="154" height="14"></div>
  <div class="welcome">안녕하세요<br><b>(<%=SESSION_USER_NM%>)</b>님 환영합니다.</div>
  </div>
  <div id="left_menu">
  <img src="/nakdong/resources/images/admin/left_menu_top_text.gif" width="305" height="48">
    <ul>
		<li onclick="javascript:location.href='/nakdong/admin.do';" id="left_menu_2_off" style="cursor:hand;"><img src="/nakdong/resources/images/admin/left_menu_1_1_off.gif" width="65" height="17"></li>		
		<li onclick="javascript:location.href='/nakdong/admin2.do';" id="left_menu_3_off" style="cursor:hand;"><img src="/nakdong/resources/images/admin/left_menu_1_2_off.gif" width="65" height="17"></li>
		<li onclick="javascript:location.href='/nakdong/admin3.do';" id="left_menu_4_off" style="cursor:hand;"><img src="/nakdong/resources/images/admin/left_menu_1_3_off.gif" width="146" height="17"></li>
		
		<li>
			<a href="/nakdong/admin4.do"><img src="/nakdong/resources/images/admin/left_menu_1_4_over.gif"  height="17" border="0"></a>
		</li>
		<div class="depth_2" id="left_menu_1_over">
			<b><a href="/nakdong/admin4.do;">사용자관리</a></b>
        </div>
	</ul>
  </div>
</div>
	
		<!--구분선-->
		<div id="division_line"></div>

<!--본문내용-->
<!-- <div id="contents"> -->
<!-- <div id="navi_title_img" style="width:100px;"> -->
<!-- 				<img src="/nakdong/resources/images/admin/sub_title_5_1.gif" width="52" height="30"> -->
<!-- </div> -->
<!-- 		<div style="height:50px;"></div> -->

<!-- <table id="adressList"  width="540"  border="0" cellpadding="4" cellspacing="1" bgcolor="d3dae3"> -->
<!-- 	<tr> -->
<!-- 		<th class="bbs_w_list">아이디</th> -->
<!-- 		<td bgcolor="FFFFFF" style="text-align:left;"><input type="text" id="USER_ID" name="USER_ID" value="" size="50" maxlength="100"> -->
<!-- 		&nbsp;<button onclick="javascript:idCheck();" alt="중복체크">중복체크</button></td> -->
<!-- 	</tr> -->
<!-- 	<tr> -->
<!-- 	<th class="bbs_w_list">비밀번호</th> -->
<!-- 		<td bgcolor="FFFFFF" style="text-align:left;"><input type="password" id="USER_PW" value=""size="50" maxlength="100"></td> -->
<!-- 	</tr> -->
<!-- 	<tr> -->
<!-- 	<th class="bbs_w_list">관리자유형</th> -->
<!-- 		<td bgcolor="FFFFFF" style="text-align:left;"><select id="LEVEL_CD" name="LEVEL_CD"> -->
<!-- 			<option value="0">관리자</option> -->
<!-- 			<option value="1">유역청</option> -->
<!-- 			<option value="2">지자체</option> -->
<!-- 		</select></td> -->
<!-- 	</tr> -->
<!-- 	<tr> -->
<!-- 	<th class="bbs_w_list">사용여부</th> -->
<!-- 		<td bgcolor="FFFFFF" style="text-align:left;"><select id="CONFIRM_YN" name="CONFIRM_YN"> -->
<!-- 			<option value="Y">Y</option> -->
<!-- 			<option value="N">N</option>		 -->
<!-- 		</select> -->
<!-- 	</td> -->
<!-- 	</tr> -->
<!-- 	<tr> -->
<!-- 	<th class="bbs_w_list">비고</th> -->
<!-- 		<td bgcolor="FFFFFF" style="text-align:left;"><textarea rows="20" cols="50" wrap="HARD" id="DN_STR" name="DN_STR" style="resize:none;"></textarea></td> -->
<!-- 	</tr> -->
<!-- 	<tr> -->
<!-- 	<td colspan="2" class="bbs_w_list" height="30px"> -->
<!-- 		<div align="right"> -->
<!-- 			<a href="#" onclick="javascript:admin_insert();"><img src="/nakdong/resources/images/admin/bt_enter.gif" alt="등록"/></a> -->
<!-- 			<a href="/admin4.do"><img src="/nakdong/resources/images/admin/bt_list.gif" alt="목록"/></a> -->
<!-- 		</div> -->
<!-- 		</td> -->
<!-- 	</tr> -->
<!-- </tbody> -->
<!-- </table> -->

<!-- </div> -->
<div id="contents">
	<div class="con_Nav">
		<div class="here"><img src="/nakdong/resources/images/admin/sub_title_5_1.gif"></div>
		<div class="navi">HOME > 관리자모드 > 기타 > 사용자관리</div>
	</div>
	
<!-- 	<div class="search" style="margin-top: 8px;"> -->
<!-- 		<div class="tit" style="background-color: #525d9f;"> -->
<!-- 			<div style="padding:8px;">담당자</div> -->
<!-- 		</div> -->
<!-- 		<div class="search_terms"> -->
<!-- 			<input type="text" id="SEARCH_VALUE" name="SEARCH_VALUE"> -->
<!-- 	    </div> -->
<!-- 		<div class="bt"><a href="#search" onclick="javascript:result_search();"><img src="/nakdong/resources/images/admin/search_button.png" width="46" height="20" border="0"></a></div> -->
<!-- 	</div> -->

	<div id="table_box">
	  	<table id="adressList" width="746" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<th class="modify_top_title_2">아이디</th>
			<td class="modify_top_bg">
				<input type="text" id="USER_ID" name="USER_ID" value="" style="width:200px;" maxlength="100">
				&nbsp;<button onclick="javascript:idCheck();" alt="중복체크">중복체크</button>
			</td>
		</tr>
		<tr>
			<th class="modify_top_2">비밀번호</th>
			<td class="modify_text"><input type="password" id="USER_PW" value="" style="width:200px;" maxlength="100"></td>
		</tr>
		<tr>
		<th class="modify_top_2">관리자유형</th>
			<td class="modify_text">
			<select id="LEVEL_CD" name="LEVEL_CD">
				<option value="0">관리자</option>
				<option value="1">유역청</option>
				<option value="2">지자체</option>
			</select></td>
		</tr>
		<tr>
		<th class="modify_top_2">사용여부</th>
			<td class="modify_text"><select id="CONFIRM_YN" name="CONFIRM_YN">
				<option value="Y">Y</option>
				<option value="N">N</option>		
			</select>
		</td>
		</tr>
		
		<tr>
			<td colspan="2"><div id="modify_cont"><label><textarea wrap="HARD" class="modify_write_2" id="DN_STR" name="DN_STR"></textarea></lable></div></td>
		</tr>
		
		<tr>
		<td colspan="2" height="30px">
			<div align="right">
				<a href="#" onclick="javascript:admin_insert();"><img src="/nakdong/resources/images/admin/bt_enter.gif" alt="등록"/></a>
				<a href="/nakdong/admin4.do"><img src="/nakdong/resources/images/admin/bt_list.gif" alt="목록"/></a>
			</div>
			</td>
		</tr>
		</table>
	</div>
</div>

</div>
<!--co끝-->
</div>
<!-- warp 끝 -->
</form>
</body>
</html>

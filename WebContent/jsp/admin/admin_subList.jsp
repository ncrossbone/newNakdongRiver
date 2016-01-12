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
		out.print("alert('������ ���� �Ǿ����ϴ�. �ٽ� �α��� �Ͽ� �ֽñ� �ٶ��ϴ�.');");
		out.print("location.href = '/nakdong/login.do';");
		out.print("</script");
	}
	else {

		SESSION_USER_ID = tuserVO.getUSER_ID();
		SESSION_USER_NM = tuserVO.getUSER_NM();
	}

 		
	String USER_ID = new String(request.getParameter("USER_ID").getBytes("iso-8859-1"), "UTF-8");

	
%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
	
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<!--     <meta http-equiv="X-UA-Compatible" content="IE=7"> -->
<!--     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> -->
	
	<title>������ ��ȯ�� ���հ����ý���</title>
	
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
	    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
		<script type="text/javascript" src="/nakdong/resources/js/custom/login/login.js"></script>
	 <script type="text/javascript">
		
		var USER_ID = "";
		$(document).ready(function(){
		 testAjax();
		 
});

function testAjax(){
	
		$.ajax({
				type: "POST",
				url: "/nakdong/login/selectsublist.json",
				data: "USER_ID="+"<%= USER_ID%>",				  
					  
				success: function(data){
					set_List(data.result);
				}
			 
			});
}

function set_List(dataList){

					var resultHtml ="";
					$.each(dataList, function(index, json) {
						USER_ID = json.USER_ID;
						var row = "";

// 						row +='<tr bgcolor="CBDFF0">';						
// 						row +='<th class="bbs_w_list">���̵�</th>';
// 						row +='<td  bgcolor="FFFFFF" style="text-align:left;">'+json.USER_ID+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';
// 						row +='<th class="bbs_w_list">�����</th>';
// 						row +='<td  bgcolor="FFFFFF" style="text-align:left;">'+json.USER_NM+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';
// 						row +='<th class="bbs_w_list">��뿩��</th>';
// 						row +='<td  bgcolor="FFFFFF" style="text-align:left;">'+json.CONFIRM_YN+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';
// 						row +='<th class="bbs_w_list" stlye="width:30%;">���ʵ�Ͼ��̵�</th>';
// 						row +='<td  bgcolor="FFFFFF" style="text-align:left;width:70%;">'+json.CREATE_ID+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';
// 						row +='<th class="bbs_w_list">������Ͼ��̵�</th>';
// 						row +='<td  bgcolor="FFFFFF" style="text-align:left;">'+json.CREATE_ID+'</td>';
// 						row +='</tr>';
// 						row +='<tr>';
// 						row +='<th class="bbs_w_list">������Ͼ��̵�</th>';
// 						row +='<td  bgcolor="FFFFFF" style="text-align:left;">'+json.CREATE_ID+'</td>';
// 						row +='</tr>';

						row +='<tr>';						
						row +='<th class="modify_top_title_2">���̵�</th>';
						row +='<td class="view_top_subject">'+json.USER_ID+'</td>';
						row +='</tr>';
						row +='<tr>';
						row +='<th class="modify_top_2">�����</th>';
						row +='<td class="modify_text">'+json.USER_NM+'</td>';
						row +='</tr>';
						row +='<tr>';
						row +='<th class="modify_top_2">��뿩��</th>';
						row +='<td class="view_top_file_2">'+json.CONFIRM_YN+'</td>';
						row +='</tr>';
						row +='<tr>';
						row +='<th class="modify_top_2" stlye="width:30%;">���ʵ�Ͼ��̵�</th>';
						row +='<td class="view_top_file_2">'+json.CREATE_ID+'</td>';
						row +='</tr>';
						row +='<tr>';
						row +='<th class="modify_top_2">������Ͼ��̵�</th>';
						row +='<td class="view_top_file_2">'+json.CREATE_ID+'</td>';
						row +='</tr>';
						row +='<tr>';
						row +='<th class="modify_top_2">������Ͼ��̵�</th>';
						row +='<td class="view_top_file_2">'+json.CREATE_ID+'</td>';
						row +='</tr>';
						row +='<tr>';
// 						row +='<th class="modify_top_2">���</th>';
						row +='<td colspan="2"><div id="view_cont">'+json.DN_STR+'</div></td>';
						row +='</tr>';
						
						resultHtml += row;
						
					});

					$("#adressList thead").html(resultHtml);

			}
			
			function modify(USER_ID){

				$.ajax({
				type: "POST",
				url: "/nakdong/login/selectsublist.json",
				data: "USER_ID="+"<%= USER_ID%>",				  
					  
				success: function(data){
				document.form1.action = "/nakdong/admin_modify.do?USER_ID="+USER_ID;
				document.form1.submit();

				}
			 
			});
		}
	
		function deleteAddress(){
	
    var bAnswer = confirm("�����Ͻðڽ��ϱ�?");
    if (bAnswer == true) {
    
		$.ajax({
				type: "POST",
				url: "/nakdong/login/deleteID.json",
				data: "USER_ID="+"<%= USER_ID%>",				  
					  
				success: function(msg){
				
				if (msg == 'success'){
				alert("�����Ǿ����ϴ�.");				
				document.form1.action = "/admin4.do";
				document.form1.submit();
			} else {
				alert("������ �����߽��ϴ�.");
				return;
			}

				}
			 
			});
	
	

    
	
	}

	
	}

		//-->
	</script>
<head>

<body onLoad="MM_preloadImages('/nakdong/resources/images/admin/sub_topmenu_1_2_over.png','/nakdong/resources/images/admin/sub_topmenu_1_4_over.png','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png')">
	
	<!-- top start: menu, toolbar -->
	<jsp:include page="topNoMap.do" flush="false"></jsp:include>
	<!-- top end -->

<!-- warp ���� -->
<div id="warp">

<form name="form1" method="post">

<!-- 	<div id="sub_top_menu"> -->
<!-- 		<div id="sub_top_info"> -->
<!-- 			<img src="/nakdong/resources/images/admin/icon_home.gif" width="15" height="12">HOME&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_modify.gif" width="15" height="12">��������&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_connect.gif" width="15" height="14">���������� : 2013-08-31  -->
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
  <div id="sub_top_info"><img src="/nakdong/resources/images/admin/icon_home.gif" width="15" height="12"><a href="/nakdong/dbStatus.do">HOME</a>&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_modify.gif" width="15" height="12"><a href="/nakdong/admin_subList.do?USER_ID=<%=SESSION_USER_ID%>">��������</a>&nbsp;&nbsp;
<!--   <img src="/nakdong/resources/images/admin/icon_connect.gif" width="15" height="14">���������� : 2013-08-31 -->
  </div>
  <ul class="top_Menu">
  	<li><a href="/nakdong/admin.do" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image11','','/nakdong/resources/images/admin/sub_topmenu_1_1_over.png',1)"><img src="/nakdong/resources/images/admin/sub_topmenu_1_1_off.png" name="Image11" width="92" height="33" border="0"></a></li>
	<li><a href="/nakdong/admin2.do" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image14','','/nakdong/resources/images/admin/sub_topmenu_1_2_over.png',1)"><img src="/nakdong/resources/images/admin/sub_topmenu_1_2_off.png" name="Image14" width="92" height="33" border="0"></a></li>
	<li><a href="/nakdong/admin3.do" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image15','','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png',1)"><img src="/nakdong/resources/images/admin/sub_topmenu_1_3_off.png" name="Image15" width="161" height="33" border="0"></a></li>
	<li><img src="/nakdong/resources/images/admin/sub_topmenu_1_4_over.png"></li>	
  </ul>
</div>

	<!--co����-->	
	<div id="co">
<!--���ʸ޴�-->
<!-- 		<div id="left_menu_frame"> -->
<!-- 			<div id="left_conn_info"> -->
<!-- 				<div id="left_conn_title_name"> -->
<!-- 		  			<div id="logout"> -->
<!-- 		  				<a href="javascript:logout();"><img src="/nakdong/resources/images/admin/con_info_logout.gif" width="64" height="22" border="0"></a> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 				<div id="nak_title"></div> -->
<!-- 				<div id="con_welcome"> -->
<!-- 					�ȳ��ϼ���<br/> -->
<!-- 					<b>(������)</b>�� ȯ���մϴ�.  -->
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
<!-- 	    					<a href="/admin4.do">����ڰ���</a><br/> -->
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
  <div class="welcome">�ȳ��ϼ���<br><b>(<%=SESSION_USER_NM%>)</b>�� ȯ���մϴ�.</div>
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
			<b><a href="/nakdong/admin4.do;">����ڰ���</a></b>
        </div>
	</ul>
  </div>
</div>
	
		<!--���м�-->
		<div id="division_line"></div>

<!--��������-->
<!-- <div id="contents"> -->
<!-- <div id="navi_title_img" style="width:100px;"> -->
<!-- 				<img src="/nakdong/resources/images/admin/sub_title_5_1.gif" width="52" height="30"> -->
<!-- 			</div> -->
<!-- 		<div style="height:50px;"></div> -->

<!-- <table id="adressList" width="740"  border="0" cellpadding="4" cellspacing="1" bgcolor="d3dae3"> -->
<!-- <thead> -->
<!-- </thead> -->
<!-- <tbody> -->
<!-- 	<tr> -->
<!-- 	<td colspan="2" class="bbs_w_list" height="30px"> -->
<!-- 		<div align="right"> -->
<!-- 			<a href="#" onclick="javascript:modify(USER_ID);"><img src="/nakdong/resources/images/admin/bt_modify.gif" alt="����"/></a> -->
<!-- 			<a href="#" onclick="javascript:deleteAddress();"><img src="/nakdong/resources/images/admin/bt_del.gif" alt="����"/></a> -->
<!-- 		</div> -->
<!-- 	</td> -->
<!-- 	</tr> -->
<!-- </tbody> -->
<!-- </table> -->

<!-- </div> -->
<div id="contents">
	<div class="con_Nav">
		<div class="here"><img src="/nakdong/resources/images/admin/sub_title_5_1.gif"></div>
		<div class="navi">HOME > �����ڸ�� > ��Ÿ > ����ڰ���</div>
	</div>
	
<!-- 	<div class="search" style="margin-top: 8px;"> -->
<!-- 		<div class="tit" style="background-color: #525d9f;"> -->
<!-- 			<div style="padding:8px;">�����</div> -->
<!-- 		</div> -->
<!-- 		<div class="search_terms"> -->
<!-- 			<input type="text" id="SEARCH_VALUE" name="SEARCH_VALUE"> -->
<!-- 	    </div> -->
<!-- 		<div class="bt"><a href="#search" onclick="javascript:result_search();"><img src="/nakdong/resources/images/admin/search_button.png" width="46" height="20" border="0"></a></div> -->
<!-- 	</div> -->
	
	<div id="table_box">
	  <table id="adressList" width="746" border="0" cellspacing="0" cellpadding="0">
		<thead>
	    </thead>
		<tbody>
		<tr>
		<td colspan="2" height="30px">
			<div align="center">
				<a href="#" onclick="javascript:modify(USER_ID);"><img src="/nakdong/resources/images/admin/bt_modify.gif" alt="����"/></a>
				<a href="#" onclick="javascript:deleteAddress();"><img src="/nakdong/resources/images/admin/bt_del.gif" alt="����"/></a>
				<a href="/nakdong/admin4.do"><img src="/nakdong/resources/images/admin/bt_list.gif" alt="���"/></a>
			</div>
		</td>
		</tr>
		</tbody>
      </table>
	</div>
</div>

</div>
<!--co��-->
</div>
<!-- warp �� -->

</form>
</body>
</html>
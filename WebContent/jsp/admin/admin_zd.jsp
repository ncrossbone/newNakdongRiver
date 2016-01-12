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
%>

<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
	
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<!--     <meta http-equiv="X-UA-Compatible" content="IE=7"> -->
<!--     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> -->
	
	<title>낙동강 물환경 통합관리시스템</title>

<!--     <link rel="stylesheet" type="text/css" href="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/dojo/dijit/themes/claro/claro.css"> -->
<!--     <link rel="stylesheet" type="text/css" href="https://serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/css/esri.css"> -->
<!--     <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery-ui-1.10.3.custom.css"> -->
<!--     <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common_admin.css"> -->
<!--  	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/style.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/cont.css"> -->

	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/admin_style.css">
	
	<!-- slickgrid 추가css -->	 
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/examples.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/jquery-ui-1.8.16.custom.css"> -->
<!-- 	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/slick.grid.css"> -->
	  
	 
	<!-- slickgrid 추가js -->
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/jquery-1.7.min.js"></script>
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/jquery.event.drag-2.2.js"></script>
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/slick.core.js"></script>
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/slick.grid.js"></script>
	<script type="text/javascript" src="/nakdong/resources/js/custom/login/login.js"></script>
	 
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
	    <script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
		<script type="text/javascript" src="/nakdong/resources/js/custom/login/login.js"></script>
	<script type="text/javascript">
	<!--   
	var dataList = "";
		$(document).ready(function(){

			abcdefg();
			set_test(dataList);
			
		
		});

		$LAB
			.script('/nakdong/resources/js/lib/jquery-ui-1.10.3.custom.js')
// 			.script('/nakdong/resources/js/custom/common/map.js')
			.script('/nakdong/resources/js/custom/common/common.js')
			.script('/nakdong/resources/js/custom/common/top_map_admin.js').wait(function() {
				pageTop = new topMap();
				pageTop.init();
				
			})
			.script('/nakdong/resources/js/custom/db/db_admin_view.js').wait(function() {
				var L_CODE = document.getElementById("L_CODE").value;
				pageView = new dbAdminView();
				pageView.init();
			});

	
		  			
			function abcd(num){
				var L_CODE = document.getElementById("L_CODE").value;
				M_CODE = num;
				$.ajax({
						url: '/nakdong/db/common_search1.json'
						, data:{"M_CODE":M_CODE,"L_CODE":L_CODE}
						, dataType: 'json'
						, success: function(d) {
						
						}
					});
					
				if(num==01){
					
					$("#navi_title_img1").show();
					$("#navi_title_img2").hide();
					$("#navi_title_img3").hide();
					
				}else if(num==02){
					
					$("#navi_title_img2").show();
					$("#navi_title_img1").hide();
					$("#navi_title_img3").hide();
					
					
				}else if(num==03){
					
					$("#navi_title_img3").show();
					$("#navi_title_img1").hide();
					$("#navi_title_img2").hide();
				}
				
			}
			
			//검색
			function result_search(){
				abcdefg();
				set_test(dataList);
			}
					
			function abcdefg(){
				var SEARCH_VALUE = "";//document.getElementById("SEARCH_VALUE").value;

				$.ajax({ 
					type     : "POST"
				,   url      : "/nakdong/login/abcdefg.json"
				, 	data:{"SEARCH_VALUE":SEARCH_VALUE}
				,   dataType : "json"
				,   success  : function(data) {

					set_test(data.result);
					
					  },error:function(request,status,error){
						  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
// 						console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						  }


				}); 
				
			}
			function set_test(dataList){

					var resultHtml ="";
					$.each(dataList, function(index, json) {
					
						var row = "";
						
						row +='<tr>';
						row +='<td class="box_top_05">'+json.RN+'</td>';
						row +='<td class="box_top_05"><a href="/nakdong/admin_subList.do?USER_ID='+json.USER_ID+'">'+json.USER_ID+'</a></td>';
						row +='<td class="box_top_05">'+json.USER_NM+'</td>';
						row +='<td class="box_top_05">'+json.CONFIRM_YN+'</td>';
						row +='<td class="box_top_05">'+json.CREATE_ID+'</td>';
						row +='<td class="box_top_05">'+json.CREATE_DT+'</td>';
						row +='<td class="box_top_05">'+json.UPDATE_ID+'</td>';
						row +='<td class="box_top_05">'+json.UPDATE_DT+'</td>';
						row +='</tr>';
						resultHtml += row;
						
					});			
					$("#adressList tbody").html(resultHtml);
					paging();

			}
			function admin_insert(){
			
				document.form1.action = "/nakdong/admin_insert.do";
				document.form1.submit();

			}


			
	function paging(){
		var rows = $('table').find('tbody>tr').length;
		var pageRow = 10;
		var pageNo = Math.ceil(rows/pageRow);
		var $pageNum = $('<div id="paging"></div>');
	
// 		var $pageNum = $('<div id="page_number" class="list_numbering"></div>');
		var tr=$('#adressList tbody tr');
	
		for(var index=0;index<pageNo;index++){
			$('<span class="number"><a href="#">'+(index+1)+'</a> </span>').appendTo($pageNum);
		}
	
	
		$pageNum.insertAfter('.copy');
	
	
		$('.number').hover(
			function(){$(this).addClass('hover');
		},
		function(){
			$(this).removeClass('hover');
			}
		);
		
		
		$('#adressList').find('tbody tr').hide(); 
	    
	    for(var index=0;index<pageRow;index++)
	    {
	    	 $(tr[index]).show();
	    }
		
		
		$('.number').click(function(event){
				tr=$('#adressList tbody tr');
	
				$('#adressList').find('tbody tr').hide();
				
				for(var i=($(this).text()-1)*pageRow;i<=$(this).text()*pageRow-1;i++){
			      $(tr[i]).show(); 
				}
				
				
				for(var i=0;i<($(this).text()-1)*pageRow;i++){
					$(tr[i]).hide(); 
				}
				
				for(var i=$(this).text()*pageRow;i<tr.length;i++){
				    $(tr[i]).hide(); 
				}
				
			
		});
		
	}
	
	
	function createBtnNextPrev(){
			
		var span=$('#paging>.number');
		var strPaging=10;
		
		for(var index=strPaging; index<span.length;index++){
			$(span[index]).each(function(){
				$(this).hide();
			});
		}
		
		
		
		$('#paging').each(function(){
			$(this).text();
		
		});
		
		
		
		var $next=$('<span class="next btn"><a>next</a></span>');
		var $prev=$('<span class="prev btn" style="display:none;"><a>prev</a></span>');
		$prev.insertBefore('#paging span:first-child');
		$next.insertAfter('#paging span:last-child');
	    
		$('.next').click(function(event){
		    span.hide();
			for(var index=strPaging;index<strPaging+10;index++){
				$(span[index]).each(function(){
					$(this).show();
				});
			}
			strPaging+=10;
			prevNextSwitch(strPaging,span.length);
			$('.prev').show();
		});
		
		$('.prev').click(function(event){
			span.hide();
			strPaging-=10;
			for(var index=strPaging-10;index<strPaging;index++){
				$(span[index]).each(function(){
					$(this).show();
				});
			}
			
			prevNextSwitch(strPaging,span.length);
			$('.next').show();
		});
		
	}
	
	
	function prevNextSwitch(strPaging,length){
			if(strPaging>=length){
				$('.next').hide();
			}else if(strPaging<=10){
				$('.prev').hide();
			}		
	}
	
		//-->
	</script>
<head>

<body onLoad="MM_preloadImages('/nakdong/resources/images/admin/sub_topmenu_1_2_over.png','/nakdong/resources/images/admin/sub_topmenu_1_4_over.png','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png')">
	
	<!-- top start: menu, toolbar -->
		<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->

<!-- warp 시작 -->


<form name="form1" method="post" style="display:inline">
	<input type="hidden" id="L_CODE" name="L_CODE" value="04"/>

<!-- 	<div id="sub_top_menu"> -->
<!-- 		<div id="sub_top_info"> -->
<!-- 			<img src="/nakdong/resources/images/admin/icon_home.gif" width="15" height="12">HOME&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_modify.gif" width="15" height="12">정보수정&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_connect.gif" width="15" height="14">최종접속일 : 2013-08-31  -->
<!-- 		</div> -->
<!--   		<div id="sub_top_menu_list"> -->
<!-- 			<a href="/admin.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image13','','/nakdong/resources/images/admin/sub_topmenu_1_1_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_1_off.png" name="Image13" width="92" height="33" border="0"></a> -->
<!-- 			<a href="/admin2.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image11','','/nakdong/resources/images/admin/sub_topmenu_1_2_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_2_off.png" name="Image11" width="92" height="33" border="0"></a> -->
<!-- 			<a href="/admin3.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image14','','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_3_off.png" name="Image14" width="161" height="33" border="0"></a>	 -->
<!-- 			<img src="/nakdong/resources/images/admin/sub_topmenu_1_4_over.png" width="92" height="33"> -->
			
<!-- 		</div> -->
<!-- 	</div> -->



	<!--co시작-->	
	<div id="co">
<!--왼쪽메뉴-->
<!-- 		<div id="left_menu_frame"> -->
<!-- 			<div id="left_conn_info"> -->
<!-- 				<div id="left_conn_title_name"> -->
<!-- 		  			<div id="logout"> -->
<!-- 		  				<a href="javascript:logout();"><img src="/nakdong/resources/images/admin/con_info_logout.gif" width="64" height="22" border="0"></a> -->
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
<!-- 	    					<a href="javascript:abcd('01');">사용자관리</a><br/> -->
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
			<a href="/nakdong/admin4.do;"><img src="/nakdong/resources/images/admin/left_menu_1_4_over.gif"  height="17" border="0"></a>
		</li>
		<div class="depth_2" id="left_menu_1_over">
			<b><a href="/nakdong/admin4.do">사용자관리</a></b>
        </div>
	</ul>
  </div>
</div>
	
		<!--구분선-->
		<div id="division_line"></div>

<!--본문내용-->
<!-- <div id="contents"> -->
<!-- 		<div id="navi_title_img"> -->
<!-- 				<img src="/nakdong/resources/images/admin/sub_title_5_1.gif" width="72" height="30"> -->
<!-- 		</div> -->
		
<!-- 		<div align="right" style="padding-right:20px;"> -->
<!-- 				<a href="javascript:admin_insert();"><img src="/nakdong/resources/images/admin/bt_enter.gif"></a> -->
<!-- 		</div> -->
		
<!-- 		<div style="height:50px;"></div> -->

<!-- <table id="adressList"width="746" border="0" cellspacing="0" cellpadding="0"> -->
<!-- <thead> -->
<!-- 		<tr>  -->
<!-- 			<th scope="col" class="box_top_01">순번</th> -->
<!-- 			<th scope="col" class="box_top_01">아이디</th> -->
<!-- 			<th scope="col" class="box_top_01">담당자</th> -->
<!-- 			<th scope="col" class="box_top_02" style="width:10%">사용여부</th> -->
<!-- 			<th scope="col" class="box_top_02">최초등록아이디</th> -->
<!-- 			<th scope="col" class="box_top_02">최초등록일자</th> -->
<!-- 			<th scope="col" class="box_top_02">최종등록아아디</th> -->
<!-- 			<th scope="col" class="box_top_02">최종등록일자</th>										 -->
<!-- 		</tr> -->
<!-- 	</thead> -->
<!-- <tbody>	 -->

<!-- </tbody> -->

<!-- </table> -->

<!-- <div class="copy" style="align: center;"></div> -->
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
		  <thead>
	        <tr>
	          <td class="box_top_01">순번</td>
	          <td class="box_top_01">아이디</td>
	          <td class="box_top_01">담당자</td>
	          <td class="box_top_01">사용여부</td>
	          <td class="box_top_02">최초등록아이디</td>
	          <td class="box_top_02">최초등록일자</td>
	          <td class="box_top_02">최종등록아아디</td>
	          <td class="box_top_02">최종등록일자</td>
	        </tr>
	      </thead>
	      <tbody>
	      </tbody>
      </table>
	</div>

<!-- 	<div class="copy" style="align: center; border:solid;red;height:30px"></div> -->
	<div align="center" id="ppn">
	<div class="copy" id="write_bt" style="align: center;padding-right: 35px; height:20px;"></div>
	</div>

	<div !align="left" style="width:45px; height:10px; padding-top:5px; padding-bottom:5px; float:left; margin-left:665px; ">
	<a href="javascript:admin_insert();"><img src="/nakdong/resources/images/admin/bt_enter.gif"></a>
	</div>
</div>

</div>
<!--co끝-->
</div>
<!-- warp 끝 -->

</form>
</body>
</html>

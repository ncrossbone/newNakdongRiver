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
	<script>




	</script>
    <script type="text/javascript">
		
	<!--   
		
    	var pageTop;
    	
    	var M_CODE = '01';

		$(document).ready(function(){
			
			ajaxtest123();
		
		
// 		$("#left_menu_1_over").click(function(){
// 		tmpSrc=$(this).attr('src');
		
// 		try{
// 			alert(idx+"/"+tmpSrc);
// 		if(e == idx ){
// 			$(this).attr('src',tmpSrc.replace('_off','_over'));

// 		}else{
// 			$(this).attr('src',tmpSrc.replace('_over','_off'));
// 		}
// 		}
// 		catch(e){}
// 	});

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
	
		  function result_search() {
				
				 if(document.getElementById("search_M_CODE").value =="none"){
				  alert("다시선택해주세요");
				  return;
					
				}
var formData = $("#adminmd").serialize();
				$.ajax({
					
					type : "POST",
					url	 : "/nakdong/db/common_search.json",
					dataType : "json",
					data :	formData,
					success  : function(data){
						set_test(data.result);							
					}
					
				});
			}

			function set_test(dataList){
		if(dataList != null){
					var resultHtml ="";
					$.each(dataList, function(index, json) {
					
						var row = "";
						
						row +='<tr>';
						row +='<td class="box_top_05">'+json.VAL+'</td>';
						row +='<td class="box_top_05">'+json.OP_DATE+'</a></td>';
						row +='<td class="box_top_05">'+json.DATA_CNT+'</td>';
						row +='<td class="box_top_05">'+json.NAME+'</td>';
						row +='<td class="box_top_05">'+json.CONTENTS+'</td>';
						row +='<td class="box_top_05">'+json.USESTATUS+'</td>';						
						row +='</tr>';
						resultHtml += row;
						
					});			
					$("#adressList tbody").html(resultHtml);
// 					paging();
		}else{
			
			var resultHtml ="";
					$.each(dataList, function(index, json) {
					
						var row = "";
						
						row +='<tr>';
						row +='<td class="box_top_05" colspan="6">데이터가 없습니다.</td>';								
						row +='</tr>';
						resultHtml += row;
						
					});			
					$("#adressList tbody").html(resultHtml);
// 					paging();
			
				}
			}	
		
		  
		  function createDateSelectBox(name, num) {
			  // 파라미터 설명 : name - 셀렌트 박스 이름, num - 현재년도에서 플러스, 마이너스 년도
			  
			  var dt = new Date();
			  var c_id = document.getElementById(name + "_id");
			  var inHtml = "";
			  var currentYear = dt.getFullYear();
			  var currentMonth = dt.getMonth() + 1;
			  var currentDay = dt.getDate();
			  var dt2 = new Date(currentYear, currentMonth, "");
			  var intNum = parseInt(num);
			  var optMonth = "";			  
			  //var selected = "";
			  
// 			  inHtml += " <select name='" + name + "_year' id='" + name + "_year' class='sel_02' !onchange='onchageDate(\"" + name + "\")'> ";
	  		  inHtml += " <select name='" + name + "_year' id='" + name + "_year' class='sel_02'> ";

// 			  inHtml += " <option value='' >선택</option>"; 
			  for (var i = currentYear - intNum; i <= currentYear + intNum; i++) {
			   inHtml += "<option value='" + i + "' >" + i + "</opton>";
			  } 
			  inHtml += " </select>  년 ";
			  
// 			  inHtml += " <select name='" + name + "_month' id='" + name + "_month' class='sel_03' !onchange='onchageDate(\"" + name + "\")'> ";
	  		  inHtml += " <select name='" + name + "_month' id='" + name + "_month' class='sel_03'> ";
// 			  inHtml += " <option value='' >선택</option>";
			  for (var i = 1; i <= 12; i++) {
			   if (i >= 1 && i < 10) {
			    optMonth = "0" + i;
			   } else {
			    optMonth = i;
			   }
			   
			   inHtml += " <option value='" + optMonth + "' >" + optMonth + "</option>";
			  }
			  inHtml += " </select> 월";			  
			  c_id.innerHTML = inHtml;
			 }

			 function onchageDate(name) {
			  var optDay = "";
			  // year, month, day SelectBox찾기
			     selectYear = document.getElementById(name+"_year");
			     selectMonth = document.getElementById(name+"_month");
			     selectDay = document.getElementById(name+"_day");
			     
			     // 현재 년도와 월 구하기
			     year = selectYear.options[selectYear.selectedIndex].value;
			     month = selectMonth.options[selectMonth.selectedIndex].value;
			      
			  tmpDate = new Date(year, month, 0);
			  
// 			     selectedIndex = selectDay.selectedIndex;
			     
// 			     for(i = selectDay.length-1; i >= 0; i--) {
// 			      selectDay.options[i] = null;
// 			     }
			     
// 			     selectDay.options[0] = new Option('선택', '');
			     
// 			     for(i = 1; i <= tmpDate.getDate(); i++) {
// 			      if (i >= 1 && i < 10) {
// 			    optDay = "0" + i;
// 			   } else {
// 			    optDay = i;
// 			   }
// 			      selectDay.options[i] = new Option(optDay, optDay);
// 			     }
			     
// 			     if(selectedIndex <= tmpDate.getDate()) {
// 			      selectDay.options[selectedIndex].selected = true;
// 			     } else {
// 			      selectDay.options[tmpDate.getDate()-1].selected = true;
// 			     } 
			 }
			
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
					
// 					$("#navi_title_img1").show();
// 					$("#navi_title_img2").hide();
// 					$("#navi_title_img3").hide();
					$("#navi_title_img").html('<img src="/nakdong/resources/images/admin/sub_title_2_1.gif">');
					
					$("#navi_path").html("HOME > 관리자모드 > 현황자료 > 유역현황");
					
					$("#left_menu_1_over").show();
					$("#left_menu_2_over").hide();
					$("#left_menu_3_over").hide();
					
				}else if(num==02){
					
// 					$("#navi_title_img2").show();
// 					$("#navi_title_img1").hide();
// 					$("#navi_title_img3").hide();
					$("#navi_title_img").html('<img src="/nakdong/resources/images/admin/sub_title_2_2.gif">');
					
					$("#navi_path").html("HOME > 관리자모드 > 현황자료 > 물이용현황");
					
					$("#left_menu_2_over").show();
					$("#left_menu_1_over").hide();
					$("#left_menu_3_over").hide();

					
				}else if(num==03){
					
// 					$("#navi_title_img3").show();
// 					$("#navi_title_img1").hide();
// 					$("#navi_title_img2").hide();
					$("#navi_title_img").html('<img src="/nakdong/resources/images/admin/sub_title_2_3.gif">');
					
					$("#navi_path").html("HOME > 관리자모드 > 현황자료 > 수질현황");
					
					$("#left_menu_3_over").show();
					$("#left_menu_1_over").hide();
					$("#left_menu_2_over").hide();

				}
				
				ajaxtest123();
								
				}
				

			function ajaxtest123(){
			
				var L_CODE = document.getElementById("L_CODE").value;
				var $search_M_CODE = $("#search_M_CODE");
				var none = '선택하세요';
				
				  $.ajax({ 
						type     : "POST"
					,   url      : "/nakdong/db/common_search2.json"
					,   dataType : "json"
					,   data     : {"M_CODE":M_CODE,"L_CODE":L_CODE}	
					,   success  : function(data) {
							var r = data.result;
							$search_M_CODE.empty();
							$search_M_CODE.append("<option value='none'>" + none + "</option>");
							for(var i in r) {
							$search_M_CODE.append("<option value='" + r[i]['VAL'] + "'>" + r[i]['ITEM'] + "</option>"); 
							}
						},error:function(request,status,error){
							alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
// 						console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						  }

					}); 				

				}



		//-->
	</script>
<head>

<body onLoad="MM_preloadImages('/nakdong/resources/images/admin/sub_topmenu_1_2_over.png','/nakdong/resources/images/admin/sub_topmenu_1_4_over.png','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png')">
	<!-- top start: menu, toolbar -->
		<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->

<!-- warp 시작 -->

	<form name="adminmd" id="adminmd" method="post">
		<input type="hidden" id="L_CODE" name="L_CODE" value="02"/>

<!-- 	<div id="sub_top_menu"> -->
<!-- 		<div id="sub_top_info"> -->
<!-- 			<img src="/nakdong/resources/images/admin/icon_home.gif" width="15" height="12">HOME&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_modify.gif" width="15" height="12">정보수정&nbsp;&nbsp;<img src="/nakdong/resources/images/admin/icon_connect.gif" width="15" height="14">최종접속일 : 2013-08-31  -->
<!-- 		</div> -->
<!--   		<div id="sub_top_menu_list"> -->
<!-- 			<a href="/nakdong/admin.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image11','','/nakdong/resources/images/admin/sub_topmenu_1_1_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_1_off.png" name="Image11" width="92" height="33" border="0"></a> -->
<!-- 			<img src="/nakdong/resources/images/admin/sub_topmenu_1_2_over.png" width="92" height="33"> -->
<!-- 			<a href="/nakdong/admin3.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image14','','/nakdong/resources/images/admin/sub_topmenu_1_3_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_3_off.png" name="Image14" width="161" height="33" border="0"></a> -->
<!-- 			<a href="/nakdong/admin4.do" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('Image13','','/nakdong/resources/images/admin/sub_topmenu_1_4_over.png',1);"><img src="/nakdong/resources/images/admin/sub_topmenu_1_4_off.png" name="Image13" width="92" height="33" border="0"></a> -->
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
<!-- 	    			<div id="left_menu_2_off"> -->
<!-- 	    				<a href="/nakdong/admin.do"><img src="/nakdong/resources/images/admin/left_menu_1_1_off.gif" width="65" height="17"><br/></a> -->
<!-- 	    			</div> -->
<!-- 	  				<div id="left_menu_division_line"></div> -->
<!-- 	  				<div id="left_menu_1_over"> -->
<!-- 	  					<img src="/nakdong/resources/images/admin/left_menu_1_2_over.gif" width="65" height="17" border="0"> -->
<!-- 						<li> -->
<!-- 	    					<a href="javascript:abcd('01');">유역현황</a><br/> -->
<!-- 	      					<a href="javascript:abcd('02');">물이용현황</a><br/> -->
<!-- 	      					<a href="javascript:abcd('03');">수질현황</a> -->
<!-- 					</li> -->
<!-- 					</div> -->
<!-- 	  				<div id="left_menu_division_line"></div> -->
<!-- 	  				<div id="left_menu_3_off"> -->
<!-- 	  					<a href="/nakdong/admin3.do"><img src="/nakdong/resources/images/admin/left_menu_1_3_off.gif" width="146" height="17" border="0"></a> -->
<!-- 					</div> -->
<!-- 	  				<div id="left_menu_division_line"></div> -->
<!-- 	  				<div id="left_menu_4_off"> -->
<!-- 	  					<a href="/nakdong/admin4.do"><img src="/nakdong/resources/images/admin/left_menu_1_4_off.gif" width="46" height="17" border="0"></a> -->
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
		
		<li>
			<a href="javascript:abcd('01');"><img src="/nakdong/resources/images/admin/left_menu_1_2_over.gif" width="65" height="17" border="0"></a>
		</li>
		<div class="depth_2" id="left_menu_1_over" style="display:block;">
			<b><a href="javascript:abcd('01');">유역현황</a></b><br>
          	<a href="javascript:abcd('02');">물이용현황</a><br>
          	<a href="javascript:abcd('03');">수질현황</a>
        </div>
		<div class="depth_2" id="left_menu_2_over" style="display:none;">
			<a href="javascript:abcd('01');">유역현황</a><br>
          	<b><a href="javascript:abcd('02');">물이용현황</a></b><br>
          	<a href="javascript:abcd('03');">수질현황</a>
        </div>
		<div class="depth_2" id="left_menu_3_over" style="display:none;">
			<a href="javascript:abcd('01');">유역현황</a><br>
          	<a href="javascript:abcd('02');">물이용현황</a><br>
          	<b><a href="javascript:abcd('03');">수질현황</a></b>
        </div>
        
		<li onclick="javascript:location.href='/nakdong/admin3.do';" id="left_menu_3_off" style="cursor:hand;"><img src="/nakdong/resources/images/admin/left_menu_1_3_off.gif" width="146" height="17"></li>
		<li onclick="javascript:location.href='/nakdong/admin4.do';" id="left_menu_4_off" style="cursor:hand;"><img src="/nakdong/resources/images/admin/left_menu_1_4_off.gif" width="46" height="17"></li>
	</ul>
  </div>
</div>
	
		<!--구분선-->
		<div id="division_line"></div>

<!--본문내용-->
<!-- 		<div id="contents"> -->
<!-- 		    <div id="navi"> -->
<!-- 			<div id="navi_title_img1" style="display:block;"> -->
<!-- 				<img src="/nakdong/resources/images/admin/sub_title_2_1.gif" width="52" height="30"> -->
<!-- 			</div> -->
<!-- 			<div id="navi_title_img2" style="display:none;"> -->
<!-- 				<img src="/nakdong/resources/images/admin/sub_title_2_2.gif" width="70" height="30"> -->
<!-- 			</div> -->
<!-- 			<div id="navi_title_img3" style="display:none;"> -->
<!-- 				<img src="/nakdong/resources/images/admin/sub_title_2_3.gif" width="100" height="30"> -->
<!-- 			</div> -->
<!-- 			<div id="navi_guide">HOME &gt; 관리자모드 &gt; 측정자료 &gt; <b>수질</b> </div> -->
		    
<!-- 			<div id="textual"> -->
<!-- 			    <div id="select_01"> -->
<!-- 				    <div id="select_title_name01">상세선택</div> -->
					
<!-- 					<div id="select_menu_01"> -->
<!-- 					    <label> -->
<!-- 					    <select id="search_M_CODE" name="search_M_CODE" class="sel_style"> -->
<!-- 					      <option value="none" selectd="selected">선택하세요</option> -->
<!-- 				        </select> -->
<!-- 				        </label> -->
<!-- 				    </div> -->
<!-- 					<div id="select_menu_02"> -->
<!-- 					    <label> -->
<!-- 					    <select id="search_M2_CODE" name="search_M2_CODE" class="sel_style"> -->
<!-- 					      <option value="result" selectd="selected">측정결과</option> -->
<!-- 					      <option value="place">측정소 결과</option> -->
<!-- 				        </select> -->
<!-- 				        </label> -->
<!-- 				    </div> -->
<!-- 				</div> -->
							
				
<!-- 				<div id="select_02"> -->
<!-- 				   <div id="select_title_name02">조회기간</div> -->
<!-- 				   <div style="width: 400px;float: left;" align="center" >				    -->
<!-- 				       <span style="border: 0px;" id="cntc_dat_id"><script type="text/javascript">createDateSelectBox('cntc_dat', 5);</script></span> -->
<!-- 						~ -->
<!-- 						<span style="border: 0px;" id="cntc_dat2_id"><script type="text/javascript">createDateSelectBox('cntc_dat2', 5);</script></span>			       				    -->
<!-- 				   </div> -->
<!-- 				   <div id="search"> -->
<!-- 					 <a  href="#search"  onclick="javascript:result_search();"><img src="/nakdong/resources/images/admin/search_button.png" width="46" height="20"></a> -->
				   
<!-- 				   </div> -->
<!-- 				</div> -->
<!-- 				<div style="height:15px"></div> -->
<!-- 				<table id="adressList"width="746" border="0" cellspacing="0" cellpadding="0"> -->
<!-- 				<thead> -->
<!-- 					<tr> -->
<!-- 						<th scope="col" class="box_top_01">번호</th> -->
<!-- 						<th scope="col" class="box_top_01">날짜</th> -->
<!-- 						<th scope="col" class="box_top_01">데이터수</th> -->
<!-- 						<th scope="col" class="box_top_02">이름</th> -->
<!-- 						<th scope="col" class="box_top_02">데이터타입</th> -->
<!-- 						<th scope="col" class="box_top_02">사용여부</th> -->
<!-- 					</tr> -->
<!-- 				</thead> -->
<!-- 			<tbody>	 -->
<!-- 			</tbody> -->

<!-- 			</table> -->
<!-- 			</div> -->
<!-- 		    </div> -->
<!-- 		</div> -->
<!-- 	</div> -->


<div id="contents">
	<div class="con_Nav">
		<div id="navi_title_img" class="here"><img src="/nakdong/resources/images/admin/sub_title_2_1.gif" height="30"></div>
		<div id="navi_path" class="navi">HOME > 관리자모드 > 측정자료 > 수질</div>
	</div>
	
	<div class="search">
		<div class="tit" style="background-color: #4e4d5f;">
			<div style="padding:8px;">상세선택</div>
		</div>
		<div class="search_terms">
		  <select id="search_M_CODE" name="search_M_CODE" class="sel_01">
		    <option>선택하세요</option>
	      </select>
		  <select id="search_M2_CODE" name="search_M2_CODE" class="sel_01">
		    <option>선택하세요</option>
			<option value="result" selectd="selected">측정결과</option>
			<option value="place">측정소 결과</option>
	      </select>
	    </div>
	</div>
	<div class="search" style="margin-top: 8px;">
		<div class="tit" style="background-color: #525d9f;">
			<div style="padding:8px;">조회기간</div>
		</div>
		<div class="search_terms">
		  <span style="border: 0px;" id="cntc_dat_id"><script type="text/javascript">createDateSelectBox('cntc_dat', 5);</script></span>
	    ~ <span style="border: 0px;" id="cntc_dat2_id"><script type="text/javascript">createDateSelectBox('cntc_dat2', 5);</script></span>
	    </div>
		<div class="bt"><a href="#search" onclick="javascript:result_search();"><img src="/nakdong/resources/images/admin/search_button.png" width="46" height="20" border="0"></a></div>
	</div>
	
	<div id="table_box">
	  <table id="adressList" width="746" border="0" cellspacing="0" cellpadding="0">
	  <thead>
        <tr>
          <td class="box_top_01">번호</td>
          <td class="box_top_01">날짜</td>
          <td class="box_top_01">데이터수</td>
          <td class="box_top_02">이름</td>
          <td class="box_top_02">데이터타입</td>
          <td class="box_top_02">사용여부</td>
        </tr>
      </thead>
      <tbody>
      </tbody>
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

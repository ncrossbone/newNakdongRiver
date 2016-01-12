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
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/board.css">
<!-- 		<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/cont.css"> -->
 
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/jquery-1.7.min.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
	    <script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
	<script type="text/javascript">
	<!--   
	var dataList = "";
		$(document).ready(function(){

			abcdefg();
			set_test(dataList);
			
		
		});

		$LAB
			.script('/nakdong/resources/js/lib/jquery-ui-1.10.3.custom.js')
			.script('/nakdong/resources/js/custom/common/common.js')
			.script('/nakdong/resources/js/custom/common/top_map_admin.js').wait(function() {
				pageTop = new topMap();
				pageTop.init();
				
			}).script('/nakdong/resources/js/custom/db/db_admin_view.js').wait(function() {
				var L_CODE = document.getElementById("L_CODE").value;
				pageView = new dbAdminView();
				pageView.init();
			});

		
	
			function abcdefg(){
				
				$.ajax({ 
					type     : "POST"
				,   url      : "/nakdong/notice/abcdefg.json"
				,   dataType : "json"
				,   success  : function(data) {

					set_test(data.result);
					
					  },error:function(request,status,error){
						  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						  }


				}); 
				
			}
			function set_test(dataList){

				var resultHtml ="";
				
				$.each(dataList, function(index, json) {
						NOTICE_CODE = json.NOTICE_CODE;

						var row = "";
						
						var USER_YN = json.USER_YN;
						<%if("관리자".equals(SESSION_USER_NM)){ %>
							row +='<tr>';
							row +='<td class="list_text_1">'+NOTICE_CODE+'</td>';
							row +='<td class="list_text_2"><a href="/nakdong/notice_listview.do?NOTICE_CODE='+NOTICE_CODE+'">'+json.NOTICE_TITLE+'</td>';
							row +='<td class="list_text_1">'+json.USER_NM+'</td>';
							row +='<td class="list_text_1">'+json.UPDATE_DATE+'</td>';
							row +='<td class="list_text_1">'+json.HIT_COUNT+'</td>';
							row +='<td class="list_text_1">'+json.USER_YN_DISP+'</td>';
							//row +='<td class="list_text_1">'+json.FILE_PATH+'</td>';
							row +='</a></tr>';
							resultHtml += row;
						<%}else{%>
							if(USER_YN=='Y'){
								row +='<tr>';
								row +='<td class="list_text_1">'+NOTICE_CODE+'</td>';
								row +='<td class="list_text_2"><a href="/nakdong/notice_listview.do?NOTICE_CODE='+NOTICE_CODE+'">'+json.NOTICE_TITLE+'</td>';
								row +='<td class="list_text_1">'+json.USER_NM+'</td>';
								row +='<td class="list_text_1">'+json.UPDATE_DATE+'</td>';
								row +='<td class="list_text_1">'+json.HIT_COUNT+'</td>';
								row +='<td class="list_text_1">'+json.USER_YN_DISP+'</td>';
								//row +='<td class="list_text_1">'+json.FILE_PATH+'</td>';
								row +='</a></tr>';
								resultHtml += row;
								
							}
							<%}%>
						
					});	

					
				
					$("#adressList tbody").html(resultHtml);
					paging();
				}
			
			function notice_insert(){
				document.form1.action = "/nakdong/notice_insert.do";
				document.form1.submit();

			}
						
	function paging(){
		var rows = $('table').find('tbody>tr').length;
		var pageRow = 10;
		var pageNo = Math.ceil(rows/pageRow);
		//var $pageNum = $('<div id="paging"></div>');
		var $pageNum = $('<div id="paging" class="list_numbering"></div>');
		
		var tr=$('#adressList tbody tr');
	
		for(var index=0;index<pageNo;index++){
			$('<span class="number"><a href="#">'+(index+1)+ '</a> </span>').appendTo($pageNum);
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
</head>

<body>

<form name="form1" method="post" style="display:inline">
<!-- <div id="warp"> -->
<!-- 	<div id="contents"> -->
			
<table id="adressList" width="658" border="0" cellspacing="0" cellpadding="0">
<thead>
		<tr>
<!-- 			<td class="bbs_w_list">순번</td> -->
<!-- 			<td class="bbs_w_list">제목</td> -->
<!-- 			<td class="bbs_w_list">작성자</td> -->
<!-- 			<td class="bbs_w_list">작성일</td> -->
<!-- 			<td class="bbs_w_list">조회수</td> -->
<!-- 			<td class="bbs_w_list">사용여부</td> -->
<!-- 			<td class="bbs_w_list">파일타입</td>		 -->
											
			<td class="list_top_num">순번</td>
			<td class="list_top_subject">제목</td>
			<td class="list_top_write">작성자</td>
			<td class="list_top_write">작성일</td>
			<td class="list_top_hit">조회수</td>
			<td class="list_top_hit">사용여부</td>	
			
		</tr>
	</thead>
<tbody>	
</tbody>

</table>
<!-- <div style="height="15px; border:solid red"></div> -->

<div align="center" id="ppn">
	
<!-- 	<div class="copy" id="write_bt" style="align: center; border:solid red;"> -->
	<div class="copy" id="write_bt" style="align: center;padding-right: 35px; height:20px;"></div>

	<%if("관리자".equals(SESSION_USER_NM)){ %>
<!-- 	<a href="javascript:notice_insert();"><img src="/nakdong/resources/images/common/write.gif"></a> -->
	<%} %>
</div>

<div !align="left" style="width:45px; height:30px; padding-top:15px; padding-bottom:5px; float:left; margin-left:165px; ">
	
	<%if("관리자".equals(SESSION_USER_NM)){ %>
	<a href="javascript:notice_insert();"><img src="/nakdong/resources/images/common/write.gif"></a>
	<%} %>
	
</div>

<!-- </div> -->
<!-- </div> -->
</form>
</body>
</html>

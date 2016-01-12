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
	if(BOARD_SEQ== null )BOARD_SEQ="";
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
<script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
<script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
<script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
<!-- script type="text/javascript" src="/nakdong/resources/js/lib/jquery_form.js"></script -->
<script type="text/javascript" src="/nakdong/ckeditor/ckeditor.js"></script>
<script type="text/javascript">


function board_insert() {
 var BOARD_TITLE = document.getElementById("BOARD_TITLE").value;
 var BOARD_CONTENT = document.getElementById("BOARD_CONTENT").value;
 var BOARD_NO = document.getElementById("BOARD_NO").value;
 var USER_YN;
 
 	if(BOARD_TITLE == ''){
		alert("제목을 입력해주세요");
		form1.BOARD_TITLE.focus();
		return; 
	}
 	
 	if(BOARD_CONTENT == ''){
	 	alert("내용을 입력해주세요");
		form1.BOARD_CONTENT.focus();
		return; 
	}
 	/*
	data:"BOARD_TITLE="+BOARD_TITLE
	+"&BOARD_CONTENT="+BOARD_CONTENT
	+"&BOARD_NO="+BOARD_NO,
	*/
	 var form = $('#form1');
	
		$.ajax({
				type: "POST",
				url: "/nakdong/board/board_insert.json",
			    data: form.serialize(),
				
				
				data:"BOARD_TITLE="+BOARD_TITLE
						+"&BOARD_CONTENT="+BOARD_CONTENT
						+"&BOARD_NO="+BOARD_NO,
					
					
				success: function(msg){
				if (msg == 'success') {
				alert("저장하였습니다");
				document.form1.action = "/nakdong/waterBrd.do";
				document.form1.submit();
			} else {
				alert("저장에실패했습니다.다시입력해주세요"+msg);
				return;
			}

				}

			});


}
function go_submit(){
	form1.submit();
}
</script>
	<!-- top start: menu, toolbar -->
	<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->
	<!-- form name="form1" method="post" -->
<form name="form1" method="post" enctype="multipart/form-data" action="/nakdong/board/board_insert1.json">		
    <div id="cont_wall">
        <div id="sub_contents">
       	  <div class="left_Menu">
            	<H3>자료실<span></span></H3>
            <ul class="list">
                	<li class="on"><a href="/nakdong/waterBrd.do">물환경 보고서</a></li>
                    <li><a href="/nakdong/hydroBrd.do">수생태계 보고서</a></li>
                    <li><a href="/nakdong/envBrd.do">환경기초조사사업</a></li>
                    <li><a href="/nakdong/relOrgBrd.do">관련기관 소개</a></li>
            </ul>
        </div>
        
        <div id="page">
        	<ul class="PageLocation">
            	<li><img src="/nakdong/resources/images/sub/location_home.gif"></li>
                <li>> 자료실</li>
                <li>> 물환경 보고서</li>
          </ul>
            <h2>물환경 보고서</h2>
            <h4>물환경 보고서 관련된 데이터를 확인하실 수 있습니다.</h4>
          <div class="board_form">

            	<table cellpadding="0" cellspacing="0" class="view_3">
                  <tr>
                    <th class="view_top">제목</th>
                    <td colspan="3" class="view_top">
                        <input name="BOARD_TITLE" type="text" maxlength=50  class="enter_title" id="BOARD_TITLE" />
                       
                    </td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                     <td colspan="3" class="view_top"><input name="FILE_NAME1" type="file" class="enter_title" id="FILE_NAME1" /></td>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="inclu_cont">
                    	<!-- textarea name="BOARD_CONTENT" id="BOARD_CONTENT"  class="txt_area"></textarea -->
                    	<textarea name="BOARD_CONTENT" id="BOARD_CONTENT"  class="ckeditor"></textarea>
                    </td>
                  </tr>
            	</table>
                <div class="pagination">
                 		<input name="BOARD_NO" type="hidden"  id="BOARD_NO" value="1">
                        <input name="BOARD_SEQ" type="hidden"  id="BOARD_SEQ" value="<%=BOARD_SEQ%>">
                	<div class="bt_wr"><a href="javascript:go_submit()">등록</a></div>
                	<!-- div class="bt_wr"><a href="javascript:board_insert()">등록</a></div-->
                </div>
                
            </div>
        </div>
    </div>
	
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->
<script language="javascript">
	
	function showView(){
	
	var BOARD_SEQ = "<%=BOARD_SEQ%>";
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
		var boardNo="";
		$.each(dataList, function(index, json) {
			title = json.BOARD_TITLE;
			cont = json.BOARD_CONTENT;
			regDate = json.CREATE_DATE;
			boardNo = json.BOARD_NO;
			/*
			if(json.FILE_NAME != null && "" != json.FILE_NAME){
				resultHtml+="<a href='/nakdong/upload/"+json.REAL_FILE_PATH+"'><span class='file_"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"'></span></a>";
				
				fileCont="<span class='file_"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"'></span><a href='/nakdong/upload/"+json.REAL_FILE_PATH+"'>"+json.FILE_NAME+"</a>";
			}
			*/
		});
		document.getElementById("BOARD_TITLE").value=title;
		document.getElementById("BOARD_CONTENT").value=cont;
		document.getElementById("BOARD_NO").value=boardNo;
	
			//$("board_result").html(resultHtml);
		
			
		
	}
	<% if(BOARD_SEQ!=null && BOARD_SEQ!=""){%>
	showView();
	<%}%>
	
	
</script>
	
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
	<jsp:include page="top.do" flush="true"></jsp:include>
	<!-- top end -->
		
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
          <div class="board_form" id="boardList">
            	<div class="all" id="board_head_cnt" name="board_head_cnt">총<span></span>개의 게시물이 있습니다.
                	<div class="page_num" id="page_num" ><span></span> /  page</div>
                </div>
                 <div id="board_result" name="board_result">  
            	
            	
                 </div>
                <div class="pagination">
                	<div class="bt_wr">
                	 <%if("관리자".equals(USER_NM)){ %>
                    	<a href="/nakdong/hydroBrdWrite.do">글쓰기</a>
                     <%} %>
                    </div>
                    <div id=paging name=paging class="paging">
                        
                    </div>
                  <div class="sch">
                    	<select name=SEARCH_TYPE id=SEARCH_TYPE>
                    	  <option value="BOARD_TITLE"> 제목</option>
                    	  <option value="BOARD_CONT">내용</option>
                    	</select>
                        <input type="text" name=SEARCH_TEXT id=SEARCH_TEXT class="fie_st2" />
                        <p class="fie_st3"><a href="javascript:showList();">검색</a></p>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
	
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->
<script type="text/javascript">
	<!--   
	var dataList = "";
	var CURPAGE=1;
	var START_NO=(CURPAGE-1)*10+1;
	var END_NO=10*CURPAGE;
	var startPage=0;
	var endPage=0;
	/*
		$(document).ready(function(){

			showList();
			
		
		});
	*/
	/*
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

		
	*/
			function showList(){
				var SEARCH_TYPE = document.getElementById("SEARCH_TYPE").value;
				var SEARCH_TEXT = document.getElementById("SEARCH_TEXT").value;
		
				$.ajax({ 
					type     : "POST"
				,   url      : "/nakdong/board/board_list.json"
				,   dataType : "json"
				,	data : "BOARD_NO=2"
					+"&START_NO="+START_NO
					+"&END_NO="+END_NO
					+"&SEARCH_TYPE="+SEARCH_TYPE
					+"&SEARCH_TEXT="+SEARCH_TEXT
				,   success  : function(data) {
					set_head_cnt(data.cnt);
					set_test(data.result);
					
					  },error:function(request,status,error){
						  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						  }


				}); 
				
			}
			function set_head_cnt(dataCnt){
				var cnt =0;
				var resultHtml="";
				
				$.each(dataCnt, function(index, json) {
					cnt = json.TOTAL_CNT;
				});
				//dataCnt.TOTAL_CNT;
			
				startPage = parseInt(START_NO/10) +1;
				endPage = parseInt(cnt/10);
				if(cnt%10 >0) endPage+=1;
				resultHtml = "총<span>"+cnt+"</span>개의 게시물이 있습니다.";
				resultHtml+= "<div class='page_num' id='page_num' ><span>"+startPage+"</span> / "+endPage+" page</div>";
				document.getElementById("board_head_cnt").innerHTML=resultHtml;
			}
			function set_test(dataList){

				var resultHtml ="";
				resultHtml+=" <table cellspacing='0' cellpadding='0'> ";
				resultHtml+=" <tr> ";
				resultHtml+="     <th class='num'>번호</th> ";
				resultHtml+="     <th class='title'>제목</th> ";
				resultHtml+="      <th class='file'>첨부</th> ";
				resultHtml+="      <th class='date'>등록일</th> ";
				resultHtml+="      <th class='hit'>조회수</th> ";
				resultHtml+="    </tr> ";
				$.each(dataList, function(index, json) {
						NOTICE_CODE = json.BOARD_NO;
				
						
						
						resultHtml+="             <tr> ";
						resultHtml+="                   <td><center>"+json.NO+"</center></td> ";
						resultHtml+="                   <td class='title_cont'><a href='/nakdong/hydroBrdView.do?BOARD_SEQ="+json.BOARD_SEQ+"'>"+json.BOARD_TITLE+"</a></td> ";
						resultHtml+="                    <td><center>";
						if(json.FILE_NAME != null && "" != json.FILE_NAME){
							resultHtml+="<a href='/nakdong/upload/"+json.REAL_FILE_PATH+"'><span class='file_"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"'></span></a>";
						}
						/*
						if(json.FILE_NAME != null && "" != json.FILE_NAME){
						resultHtml+="<a href='#'>"+json.FILE_NAME.substring(json.FILE_NAME.lastIndexOf(".")+1,json.FILE_NAME.lastIndexOf(".")+4)+"<span class='file_zip'></span></a>";
						}
						*/
						resultHtml+="</center></td> ";
						resultHtml+="                    <td><center>"+json.CREATE_DATE+"</center></td> ";
						resultHtml+="                    <td align='right'><center>"+json.READ_CNT+"</center></td> ";
						resultHtml+="             </tr> ";
						
						
						var row = "";
						
						
					});
				resultHtml+="   </table>";
				

				document.getElementById("board_result").innerHTML=resultHtml;
			
					//$("board_result").html(resultHtml);
					paging();
					
				
				}
			
			 function paging(){
				 var resultHtml ="";
				
				 if(CURPAGE > 1){
				 	resultHtml+="  <span><a href='javascript:go_page("+(CURPAGE-1)+")'><</a></span>";
				 }else{
					 resultHtml+="  <span></span>";
				 }
				 
				 
				 if(endPage >=1 ){
					 var start_p=1;
					 if(CURPAGE > 10){
						 start_p = parseInt(CURPAGE/10)*10;
						 if(CURPAGE%10) start_p-=1;
					 } 
					
					 for(var i= start_p ;i <= (start_p+9); i++){
					
						if(CURPAGE ==i){
							resultHtml+="  <span><a href='javascript:go_page("+i+")' class='num_on'>"+i+"</a></span>";
						}else{
							resultHtml+="  <span><a href='javascript:go_page("+i+")' class='num_off'>"+i+"</a></span>";
						}
						if(i==endPage)break;
					 }
				 }
				 if(CURPAGE < endPage){
					 	resultHtml+="  <span><a href='javascript:go_page("+(CURPAGE+1)+")'>></a></span>";
				 }else{
					 resultHtml+="  <span></span>";
				 }
				 document.getElementById("paging").innerHTML=resultHtml;
			 }
			 
			 function go_page(pageNo){
					CURPAGE=pageNo;
					START_NO=(CURPAGE-1)*10+1;
					END_NO=10*CURPAGE;
					showList();
				}
			 
			function notice_insert(){
				document.form1.action = "/nakdong/hydroBrdWrite.do";
				document.form1.submit();

			}
			showList();
			</script>
	
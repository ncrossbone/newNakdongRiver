<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@page import="com.login.model.TuserVO"%>
<%@ page import="com.login.web.*" %>
<%@ page import="com.util.*" %>
<%@ page import="java.net.URLDecoder;" %>
<%
	String boardSeq 	= request.getParameter("BOARD_SEQ") == null 	? "" : request.getParameter("BOARD_SEQ");
	String fileNmTemp = request.getParameter("fileNm") == null 	? "" : request.getParameter("fileNm");
	String fileNm = new String(fileNmTemp.getBytes("iso-8859-1"),"euc-kr");
	// �⺻ �Խ����� ÷�����Ͽ� Į���� filePath �� ���� ���� ���ε�� ����� ���ϸ��� �ǹ��Ѵ�, �÷������� ���� ��η� �������� �ʵ��� ����...
	String fileRealNm 	= request.getParameter("filePath") == null 	? "" : request.getParameter("filePath");
	String downloadUrl = "/nakdong/download.do?filename="+fileRealNm +"&filePath=/nakdong/upload&fileDownNm="+fileNm;

	TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
	String USER_NM = ""; 
	if(tuserVO !=null ){
		USER_NM = tuserVO.getUSER_NM();
	}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<title>������ ��ȯ�� ���հ����ý���</title>
<style type="text/css">
body { margin: 0px; font-family: "����"; font-size: 14px; }
.survey { width: 440px; height: 280px; background: url(/nakdong/resources/images/popup/envBrdPopuBg.jpg) no-repeat; padding: 190px 30px 0 30px; position: relative;  }
h1 { font-size: 14px; letter-spacing: -1px; color: #000; float: left; margin-top: 0px; padding-top: 2px; width: 100px; }
.survey input { }
.survey .TxtBoxSt { clear: both; display: block; }
.survey div { clear: both; margin-bottom: 10px; }
.survey textarea { width: 300px; height: 70px; float: left; }
.BtOk { position: absolute; top: 430px; left: 432px; background: #666; width: 50px; height: 17px; color: #FFF; text-align: center; font-size: 12px; padding-top: 3px; }
.BtOk a { display: block; text-decoration: none; color: #FFF; }
</style>
<script type="text/javascript" src="/nakdong/resources/js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="/nakdong/resources/js/comUtil.js"></script>
</head>

<body>
<table align="center">
<tr>
<td>
<form id="frm" name="frm">
<input type="hidden" id="boardSeq" name="boardSeq" value="<%=boardSeq %>" />
<input type="hidden" id="fileName" name="fileName" value="<%=fileRealNm %>" />
<input type="hidden" id="fileNameKr" name="fileNameKr" value="<%=fileNm %>" />
<div id="survey" class="survey">

	<div>
        <h1>����</h1>
        <input id="gender" name="gender" type="radio" value="m" /> ����
        <input id="gender" name="gender" type="radio" value="f" /> ����
    </div>
    
    <div>
        <h1>����</h1>
        <input id="job" name="job" type="text" />
	</div>
    
    <div>
    	<h1>�̿����</h1>
        <input id="purpose" name="purpose" type="text" style="width:300px"/>
    </div>
    
    <div>
    	<h1>�˰Ե� ����</h1>
        <textarea id="content" name="content" cols="" rows=""></textarea>
    </div>
</div>
<div>
    <div id="att1" style="display:;height:35px">
	    <div style="width:100%">
	    	<h1 style="position:absolute; left: 50px; top: 393px;width:100%">���ϸ� :  <%=fileNm %></h1>
	    </div>
    </div>
    <div id="att2" style="display:none;height:35px">
	    <div style="width:100%">
    	<h1 style="position:absolute; left: 50px; top: 393px;width:100%">���ϸ� :  <a href="<%=downloadUrl%>"><%=fileNm %></a></h1>
	    </div>
    </div>
    <div class="BtOk">
    	<div id="survey_ok">�ۼ�</div>
    	<div id="survey_no" style="display:none">�ۼ�</div>
    </div>
<div>    
</form>
</td>
</tr>
</table>

<!--
// /nakdong/upload/
������ ����� ���� ���ϴٿ�ε� ��� ? /download.do?filename=  
 -->

<script type="text/javascript">

$(document).ready(function(){
	$("#survey_ok").on({
		mouseover : function(){
			$(this).css("cursor","pointer");	
		},
		click : function(){
			fn_insertSuervey();
		}
	});
});


// �������� �ۼ� ���
function fn_insertSuervey(){
	var link = "/nakdong/popup/insertSurvey.json";
	var param = $("#frm").serialize();
	// validation 
	if(gfn_isEmptyFocus("gender","������ ������ �ֽʽÿ�")){  return; 	}
	if(gfn_isEmptyFocus("job","������ �Է��� �ֽʽÿ�")){  return; 	}
	if(gfn_isEmptyFocus("purpose","�̿������ �Է��� �ֽʽÿ�")){  return; 	}
	if(gfn_isEmptyFocus("content","�˰Ե� ���⸦ ������ �Է��� �ֽʽÿ�")){  return; 	}
	
	if(confirm("���������� �����Ͻðڽ��ϱ�?")){

		$.ajax({
	        type:"post",
	        url: link,
	        data : param,
	        beforeSubmit : function(){
	        	$("#survey_ok").hide();
            	$("#survey_no").show();
	        },
	        success: function(data){
	            if($.trim(data) == 'Y'){
	            	alert("�������翡 �����ּż� �����մϴ�. \n ÷�ε� ������ �ٿ�ε� �Ͻ� �� �ֽ��ϴ�. ");
	            	$("#att1").hide();
	            	$("#att2").show();
	            	$("#survey_ok").hide();
	            	$("#survey_no").show();
	            }else if($.trim(data) == 'N'){
	            	$("#att2").hide();
	            	$("#att1").show();
	            	$("#survey_no").hide();
	            	$("#survey_ok").show();
	            }else {
	            	//alert("etc");
	            	return;
	            }
	        },
	        error : function(data){
	        	alert("ó���� ������ �߻��߽��ϴ�.");
	        }
	    });  // end of ajax
	}
}
</script>

</body>
</html>

<%@page import="com.login.model.TuserVO"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="com.login.web.*" %>
<%@ page import="com.util.*" %>
<%
String url = request.getRequestURL().toString();
String urlArray[] = url.split("/");
String urlLast = urlArray[urlArray.length - 1];

urlLast = urlLast.replace(".do", "");
%>
<%	
	
	TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
	String USER_NM = ""; 
	
%>
<%	
if(tuserVO == null){
	
%>
<script type="text/javascript">

	alert("������ ���� �Ǿ����ϴ�. �ٽ� �α��� �Ͽ� �ֽñ� �ٶ��ϴ�.");
	location.href = "/nakdong/login.do";
</script>
<%
}
if(tuserVO !=null ){
	USER_NM = tuserVO.getUSER_NM();
	}
%>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<title>������ ��ȯ�� ���հ����ý���</title>
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/reset.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/common.css" />
<link rel="stylesheet" type="text/css" href="/nakdong/resources/css/main.css" />
<style type="text/css">
body,td,th {
	font-family: "����", dotum, Helvetica, sans-serif;
}
</style>
<script type="text/javascript" src="/nakdong/resources/js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="/nakdong/resources/js/ui.js"></script>
<script type="text/javascript" src="/nakdong/resources/js/comUtil.js"></script>
</script>
</head>
<script language="javascript">
function allChange() { 
	document.getElementById("sub1").style.display = "none";
	document.getElementById("sub2").style.display = "none";
	document.getElementById("sub3").style.display = "none";
	document.getElementById("sub4").style.display = "none";
	document.getElementById("sub5").style.display = "none";
	document.getElementById("sub6").style.display = "none";
	document.getElementById("sub7").style.display = "none";
	document.getElementById("sub8").style.display = "none";
	
	} 
function fncOver(pos){
	allChange();
	document.getElementById("sub"+pos).style.display = "block";	
} 

function newWinOpen(type) {
	var url = "";
	var title = "";
	
	if(type == 1) {
		url = "/nakdong/dbInfoDam.do";
		title = "���ڷ�";
	}
	else if(type == 2) {
		url = "/nakdong/dbInfoBo.do";
		title = "���ڷ�";
	}
	else if(type == 3) {
		url = "/nakdong/dbInfoWeather.do";
		title = "�����ڷ�";
	}
/*
 * �ۼ��� : 2014.12.31
 * �ۼ��� : ������
 * ���� : �췮�ڷ� �ּ�ó��

	else if(type == 4) {
		url = "/nakdong/dbInfoRain.do";
		title = "�췮�ڷ�";
	}
 */	
	window.open(url, title, 'width=750, height=600');
}

 
</script>
<body>
<div id="wrap">
	<!--head-->
	<div id="head">
		<div id="TopGnb"><!--�߰�-->
    	<h1><a href="/nakdong/dbStatusNew.do"><img src="/nakdong/resources/images/common/logo.jpg" alt="" /></a></h1>
        <ul id="gnb">
        	<li onmouseover='fncOver(1);'><a href="/nakdong/dbStatus.do">������Ȳ</a></li>
            <li onmouseover='fncOver(2);'><a href="/nakdong/wuStatus.do" style="background-color:#2b649b; border:1px #69a0c7 solid; border-top:0">���̿���Ȳ</a></li>
            <li onmouseover='fncOver(3);'><a href="/nakdong/weStatus.do" style="background-color:#215586; border:1px #3a709c solid; border-top:0">����</a></li>
            <li onmouseover='fncOver(4);'><a href="/nakdong/dbRainRiver.do" style="background-color:#1d4d79; border:1px #4b83a8 solid; border-top:0">����/���</a></li>
            <li onmouseover='fncOver(5);'><a href="/nakdong/wpsStatus.do" style="background-color:#194772; border:1px #447ea1 solid; border-top:0">�����������Ϸ�</a></li>
            <li onmouseover='fncOver(6);'><a href="/nakdong/etfStatus.do" style="background-color:#0c3256; border:1px #276b8e solid; border-top:0">ȯ����ʽü�</a></li>
            <li onmouseover='fncOver(7);'><a href="/nakdong/waterBrd.do" style="background-color:#37328f; border:1px #746ebc solid; border-top:0">�ڷ��</a></li>
            <li onmouseover='fncOver(8);'><a href="/nakdong/admin.do" style="background-color:#323232; border:1px #717171 solid; border-top:0">�����ڸ��</a></li>
        </ul>
        <div id="gnb_2depth">
        	<ul  id='sub1'   style='display:none'>
            	<li><a href="/nakdong/dbStatus.do">�ǿ�����Ȳ</a></li>
                <li><a href="/nakdong/dbRiver.do">��õ����</a></li>
            </ul>
            <ul  id='sub2'  style='display:none; margin-left:110px' >
            	<li><a href="/nakdong/wuStatus.do">���̿���Ȳ</a></li>
                <li><a href="/nakdong/wuSewer.do">�ϼ�������ڷ�</a></li>
            </ul>
            <ul  id='sub3'   style='display:none; margin-left:220px'>
            	<li><a href="/nakdong/weStatus.do">��Ȳ</a></li>
                
            </ul>
            <ul  id='sub4'   style='display:none; margin-left:330px'>
            	<li><a href="javascript:newWinOpen(1); ">���ڷ�</a></li>
            	<li><a href="javascript:newWinOpen(2); ">���ڷ�</a></li>
            	<li><a href="javascript:newWinOpen(3); ">�����ڷ�</a></li>
            	<!--li><a href="javascript:newWinOpen(4); ">�췮�ڷ�</a></li-->
            </ul>
            <ul  id='sub5'   style='display:none; margin-left:440px'>
            	<li><a href="/nakdong/wpsStatus.do">��Ȳ</a></li>
                <li><a href="/nakdong/wpsDischarge.do">���������Ȳ</a></li>
                <li><a href="javascript:alert('���� �غ����Դϴ�');">�߻�/���� ���Ϸ�</a></li>
            </ul>
            <ul  id='sub6'   style='display:none; margin-left:550px'>
            	<li><a href="/nakdong/etfStatus.do">��Ȳ</a></li>
            </ul>
            <ul  id='sub7'   style='display:none; margin-left:400px'>
            	<li><a href="/nakdong/waterBrd.do">��ȯ�溸��</a></li>
                <li><a href="/nakdong/hydroBrd.do">�����°躸��</a></li>
                <li><a href="/nakdong/envBrd.do">ȯ�����������</a></li>
                <li><a href="/nakdong/relOrgBrd.do">���ñ���Ұ�</a></li>
            </ul>
            <ul  id='sub8'   style='display:none; margin-left:450px'>
            <%if("������".equals(USER_NM)){ %>
            	<li><a href="/nakdong/admin.do">�����ڷ�</a></li>
                <li><a href="/nakdong/admin2.do">��Ȳ�ڷ�</a></li>
                <li><a href="/nakdong/admin3.do">�����������Ϸ��ڷ�</a></li>
                <li><a href="/nakdong/admin4.do">��Ÿ</a></li>
            <%}%>
            </ul>
        </div>
       </div> 
    </div>
    <!--head-->
    
    <!--contents_top-->
    <div id="contents_top">
        <div class="notice">
            <div class="left">
                <h2><img src="/nakdong/resources/images/main/notice01.png" alt="" /></h2>
                <ul>
<!--                     <li><a href="/nakdong/notice.do" target="new" >��������</a><span>2014-10-21</span></li> -->
                    <li><a href="javascript:window.open('/nakdong/notice.do', '��������', 'width=680, height=500')">��������</a></li>
                </ul>
            </div>
            <div class="right">
                <%=USER_NM%>��, �����ϼ̽��ϴ�.
                <span><a href="#">��������</a></span>
                <span><a class="logout" href="/nakdong">�α׾ƿ�</a></span>
            </div>
        </div>
    </div>
    <!--contents_top-->
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
	font-family: "����", dotum, Helvetica, sans-serif;
}
</style>
<script language="javascript">
function allChangeBoard() { 
	document.getElementById("tap1").style.display = "none";
	document.getElementById("tap2").style.display = "none";
	document.getElementById("tap3").style.display = "none";
	
	document.getElementById("tapTitle1").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	document.getElementById("tapTitle2").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	document.getElementById("tapTitle3").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	} 
function fncBoardOver(pos){
	allChangeBoard();
	document.getElementById("tap"+pos).style.display = "block";
	document.getElementById("tapTitle"+pos).style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_on.gif)';
}  

</script>


	<!-- top start: menu, toolbar -->
	<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->
		
    <div id="cont_wall">
        <div id="sub_contents">
       	  <div class="left_Menu">
            	<H3>�ڷ��<span></span></H3>
            <ul class="list">
                	<li><a href="/nakdong/waterBrd.do">��ȯ�� ����</a></li>
                    <li><a href="/nakdong/hydroBrd.do">�����°� ����</a></li>
                    <li><a href="/nakdong/envBrd.do">ȯ�����������</a></li>
                    <li class="on"><a href="/nakdong/relOrgBrd.do">���ñ�� �Ұ�</a></li>
               
            </ul>
        </div>
        
        <div id="page">
        	<ul class="PageLocation">
            	<li><img src="/nakdong/resources/images/sub/location_home.gif"></li>
                <li>> �ڷ��</li>
                <li>> ���ñ�� �Ұ�</li>
        	</ul>
            <h2>���ñ�</a>�� �Ұ�</h2>
            <h4>���� ���� ����� Ȩ�������� Ȯ���Ͻ� �� �ֽ��ϴ�.</h4>
        	<div class="board_form">
            	<ul class="organ">
                	<!--ȯ���-->
                	<li>
                    	<p><a href="http://www.me.go.kr" class="logo1" target="blank"></a></p>
                        <p class="WebLink1"><a href="http://www.me.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: ȯ���</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://www.me.go.kr" target="blank">http://www.me.go.kr</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: ��������, ���μ���, ����/��å ���๰,�˸�/ȫ��, ����Ұ�</dd>
                        </dl>
                    </li>
                    <!--����������ȯ��û-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://me.go.kr/ndg" class="logo2" target="blank"></a></p>
                        <p class="WebLink2"><a href="http://me.go.kr/ndg" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: ����������ȯ��û</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://me.go.kr/ndg" target="blank">http://me.go.kr/ndg</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: ���ڹο�, ���θ���, ��������, �˸�����, ��������, ����Ұ�</dd>
                        </dl>
                    </li>
                    <!--��������ȯ�濬����-->
                    <li>
                    	<p><a href="http://www.nier.go.kr/NIER/egovNakDongIndex.jsp" class="logo3" target="blank"></a></p>
                        <p class="WebLink3"><a href="http://www.nier.go.kr/NIER/egovNakDongIndex.jsp" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: ��������ȯ�濬����</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://www.nier.go.kr/NIER/egovNakDongIndex.jsp" target="blank">www.nier.go.kr/NIER/egovNakDongIndex.jsp</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: �ֿ���, �˸�����, �ڷḶ��, ���θ���, �ο�����, ����Ұ�, ������������������</dd>
                        </dl>
                    </li>
                    <!--���䱳���-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://www.molit.go.kr" class="logo4" target="blank"></a></p>
                        <p class="WebLink4"><a href="http://www.molit.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: ���䱳���</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://www.molit.go.kr" target="blank">http://www.molit.go.kr</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: ���ڹο�, ���θ���, ��������, �˸�����, ��������, ����Ұ�</dd>
                        </dl>
                    </li>
                    <!--�ѱ�����̰���-->
                    <li>
                    	<p><a href="http://www.ekr.or.kr" class="logo5" target="blank"></a></p>
                        <p class="WebLink5"><a href="http://www.ekr.or.kr" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: �ѱ�����̰���</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://www.ekr.or.kr" target="blank">http://www.ekr.or.kr</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: ����3.0��������, ������, �ֿ���, ����Ұ�, ��������, �˸�����, ���̹�ȫ��</dd>
                        </dl>
                    </li>
                    <!--���û-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://www.kma.go.kr" class="logo6" target="blank"></a></p>
                        <p class="WebLink6"><a href="http://www.kma.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: ���û</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://www.kma.go.kr" target="blank">http://www.kma.go.kr</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: ����3.0��������, ����, �����ͼ���, ���� ���, ������ ��å, ���û�Ұ�</dd>
                        </dl>
                    </li>
                    <!--������ȫ��������-->
                    <li>
                    	<p><a href="http://www.nakdongriver.go.kr" class="logo7" target="blank"></a></p>
                        <p class="WebLink7"><a href="http://www.nakdongriver.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: ������ȫ��������</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://www.nakdongriver.go.kr" target="blank">http://www.nakdongriver.go.kr</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: ����3.0��������, ���ڹο���, �˸�����, ��������, ȫ������, ��õ����, ��������, �����ҼҰ�</dd>
                        </dl>
                    </li>
                    <!--��������������ý���-->
                    <li style="margin-right: 0px;">
                    	<p><a href="http://www.wins.go.kr" class="logo8" target="blank"></a></p>
                        <p class="WebLink8"><a href="http://www.wins.go.kr" target="blank"></a></p>
                        <dl>
                        	<dt>�����</dt>
                            <dd>: ��������������ý���</dd>
                            <dt>Ȩ������</dt>
                            <dd>: <span><a href="http://www.wins.go.kr" target="blank">http://www.wins.go.kr</a></span></dd>
                            <dt>�ֿ�����</dt>
                            <dd>: �������ڿ��������������ý���, ��õ�������������ý���, �������ϼ���������, ��������������ý���, ���̿�� ���������ý���, ��ȯ�������ý���, �ѱ����ڿ���ȸ, ��������û</dd>
                        </dl>
                    </li>
                </ul>   	
            </div>
        </div>
    </div>
    <!--����-->
</div>
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->

	
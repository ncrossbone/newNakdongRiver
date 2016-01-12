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
	
	document.getElementById("tapTitle1").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
	document.getElementById("tapTitle2").style.backgroundImage='url(/nakdong/resources/images/sub/sub_tap_off.gif)';
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
                    <ul class="dep2">
                            <li><a href="/nakdong/relOrgBrd.do">- ���� ���ñ��</a></li>
                            <li class="dep_on">- ���� ���ñ��</a></li>
					</ul>
            </ul>
        </div>
        
        <div id="page">
        	<ul class="PageLocation">
            	<li><img src="/nakdong/resources/images/sub/location_home.gif"></li>
                <li>> �ڷ��</li>
                <li>> ���ñ�� �Ұ�</li>
                <li>> ���� ���ñ��</li>
        	</ul>
            <h2>���ñ�� �Ұ�</h2>
            <h4>���� ���ñ���� �����͸� Ȯ���Ͻ� �� �ֽ��ϴ�.</h4>
           <div class="board_form">
       		<ul class="sub_tab">
              <li id="tapTitle1" class="tap_on" onmouseover='fncBoardOver(1);'>ȯ����� ���α��</li>
              <li id="tapTitle2" onmouseover='fncBoardOver(2);'><a href="#">ȯ�����Ʈ</a></li>
              <!-- <li id="tapTitle3" onmouseover='fncBoardOver(3);'><a href="#">�ý���</a></li> -->
       		</ul>
       			<!--  ���α�� -->
                <div class="info" id="tap1" style="overflow-y:auto;overflow-x:hidden;height:600px;" >
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <th><div class="imgBox"><a href="http://www.epa.gov/" target="new">
                        <img src="/nakdong/resources/images/sub/img_04_02.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.epa.gov/" target="new">USA - EPA</a>
                        	</dl>
                            <dt>- �ֿ�����</dt>
                        	<dd> </dd>
                            <dt>- �Ҽ��ι�</dt>
                            <dd> </dd>
                            <dt>- �Ҽӱ��</dt>
                            <dd> </dd>
                            <dt>- �̿�ȳ�</dt>
                            <dd> </dd>
                            <dt>- ��������</dt>
                            <dd> </dd>
                            <dt>- �Ұ�</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      <tr>
                        <th><div class="imgBox"><a href="#" target="new">
                        <img src="/nakdong/resources/images/sub/img_04_01.jpg"></a></div></th>
                        <td>
                        	<dl><a href="#" target="new">
                        	  ENVFOR-INDIA</a>
                        	</dl>
                            <dt>- �ֿ�����</dt>
                        	<dd> </dd>
                            <dt>- �Ҽ��ι�</dt>
                            <dd> </dd>
                            <dt>- �Ҽӱ��</dt>
                            <dd> </dd>
                            <dt>- �̿�ȳ�</dt>
                            <dd> </dd>
                            <dt>- ��������</dt>
                            <dd> </dd>
                            <dt>- �Ұ�</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      
                    </table>
                </div>

                <!--  ������� -->
                <div class="info" id="tap2" style="overflow-y:auto;overflow-x:hidden;height:600px;display:none;" >
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <th><div class="imgBox"><a href="http://www.oecd.org/" target="new">
                        <img src="/nakdong/resources/images/sub/img_05_01.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.oecd.org/" target="new">�����������±ⱸ(OECD)</a>                         	
                        	</dl>
                           <dt>- �ֿ�����</dt>
                        	<dd> </dd>
                            <dt>- �Ҽ��ι�</dt>
                            <dd> </dd>
                            <dt>- �Ҽӱ��</dt>
                            <dd> </dd>
                            <dt>- �̿�ȳ�</dt>
                            <dd> </dd>
                            <dt>- ��������</dt>
                            <dd> </dd>
                            <dt>- �Ұ�</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      <tr>
                        <th><div class="imgBox"><a href="http://www.fao.org/" target="new">
                        <img src="/nakdong/resources/images/sub/img_05_02.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.fao.org/" target="new">
                        	  �����ķ�����ⱸ(FAO)</a>
                        	</dl>
                            <dt>- �ֿ�����</dt>
                        	<dd> </dd>
                            <dt>- �Ҽ��ι�</dt>
                            <dd> </dd>
                            <dt>- �Ҽӱ��</dt>
                            <dd> </dd>
                            <dt>- �̿�ȳ�</dt>
                            <dd> </dd>
                            <dt>- ��������</dt>
                            <dd> </dd>
                            <dt>- �Ұ�</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      <tr>
                        <th><div class="imgBox"><a href="http://www.iso.ch/" target="new">
                        <img src="/nakdong/resources/images/sub/img_05_03.jpg"></a></div></th>
                        <td>
                        	<dl><a href="http://www.iso.ch/" target="new">
                        	  ����ǥ��ȭ�ⱸ(ISO)</a>
                        	</dl>
                            <dt>- �ֿ�����</dt>
                        	<dd> </dd>
                            <dt>- �Ҽ��ι�</dt>
                            <dd> </dd>
                            <dt>- �Ҽӱ��</dt>
                            <dd> </dd>
                            <dt>- �̿�ȳ�</dt>
                            <dd> </dd>
                            <dt>- ��������</dt>
                            <dd> </dd>
                            <dt>- �Ұ�</dt>
                            <dd> </dd>
                            <dt></dt>
                            <dd></dd>
                        </td>
                      </tr>
                      
                    </table>
                </div>
            	
            	

                
            	
                
            <!-- div class="pagination">
                	<div class="bt_wr">
                    	<a href="sub_5_write.html">�۾���</a>
                  </div>
                  <div class="paging">
                    	<span><a href="#"><<</a></span>
                        <span><a href="#"><</a></span>
                        <span><a href="#" class="num_on">1</a></span>
                        <span><a href="#">2</a></span>
                        <span><a href="#">3</a></span>
                        <span><a href="#">4</a></span>
                        <span><a href="#">5</a></span>
                        <span><a href="#">6</a></span>
                        <span><a href="#">7</a></span>
                        <span><a href="#">8</a></span>
                        <span><a href="#">9</a></span>
                        <span><a href="#">></a></span>
                        <span><a href="#">>></a></span>
                  </div>
                  <div class="sch">
                    	<select class="fie_st1">
                    	  <option selected="selected">����</option>
                    	  <option>����</option>
                    	  <option>�۾���</option>
                    	</select>
                        <input type="text" class="fie_st2" />
                        <p class="fie_st3"><a href="#">�˻�</a></p>
                  </div>
            </div-->
                
            </div>
        </div>
    </div>
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->

	
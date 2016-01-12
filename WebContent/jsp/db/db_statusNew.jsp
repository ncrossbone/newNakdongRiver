<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

	<!-- top start: menu, toolbar -->
	<jsp:include page="top.do" flush="false"></jsp:include>
	<!-- top end -->
	
	<script language="javascript">
function allChangeBoard() { 
	document.getElementById("notice_cont1").style.display = "none";
	document.getElementById("notice_cont2").style.display = "none";
	document.getElementById("notice_cont3").style.display = "none";
	
	document.getElementById("main_tab1_1").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg01.gif)';
	document.getElementById("main_tab1_2").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg01.gif)';
	document.getElementById("main_tab1_3").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg01.gif)';
	} 
function fncBoardOver(pos){
	allChangeBoard();
	document.getElementById("notice_cont"+pos).style.display = "block";
	if(pos == 1){
	document.getElementById("main_tab1_1").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg02.gif)';
	}else if(pos == 2){
	document.getElementById("main_tab1_2").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg02.gif)';
	}else{
	document.getElementById("main_tab1_3").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg02.gif)';
	}
	//document.getElementById("main_tab1_"+pos]).style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg02.gif)';
}  

function allChangeOrg() { 
	document.getElementById("org1").style.display = "none";
	document.getElementById("org2").style.display = "none";
	document.getElementById("orgTitle1").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg01.gif)';
	document.getElementById("orgTitle2").style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg01.gif)';
	} 
function fncOrgOver(pos){
	allChangeOrg();
	document.getElementById("org"+pos).style.display = "block";
	document.getElementById("orgTitle"+pos).style.backgroundImage='url(/nakdong/resources/images/main/main_tab1_bg02.gif)';

}  
</script>	

<!-- <link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.10/js/dojo/dijit/themes/claro/claro.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.10/js/esri/css/esri.css"> -->


<!-- <script>var dojoConfig = { parseOnLoad: true };</script> -->
<!-- <script type="text/javascript" src="http://js.arcgis.com/3.10/"></script>  -->
<!-- <script type="text/javascript" src="/nakdong/resources/js/esri.symbol.MultiLineTextSymbol.js"></script> -->
<!-- <script type="text/javascript" src="/nakdong/resources/js/map/db_statusNew.js"></script> -->
<script type="text/javascript" src="/nakdong/resources/js/map/db_statusNew2.js"></script>

	<div id="cont_wall"> 
        <div id="contents">
        
          <div class="left">
          
              <div class="map_layout">
              
              	<!-- ��������Ʈ -->
              	<ul class="remark">
					<li id="remark_2001A60"></li> <!-- �ȵ�1 2001A60 -->	
					<li id="remark_2002A50"></li> <!-- �ݺ�õ2-1 2002A50 -->		
					<li id="remark_2004A90"></li> <!-- ����õ3-1 2004A90 -->		
					<li id="remark_2003A60"></li> <!-- ��õ-1 2003A60 -->		
					<li id="remark_2005A30"></li> <!-- ����2-1 2005A30 -->		
					<li id="remark_2006A20"></li> <!-- ����õ-1 2006A20 -->		
					<li id="remark_2007A30"></li> <!-- ����2 2007A30 -->		
					<li id="remark_2008A40"></li> <!-- ��õ6 2008A40 -->		
					<li id="remark_2009A20"></li> <!-- ��� 2009A20 -->		
					<li id="remark_2010A30"></li> <!-- ��õ2-1 2010A30 -->		
					<li id="remark_2012A70"></li> <!-- ��ȣ��6 2012A70 -->		
					<li id="remark_2011A60"></li> <!-- �޼� 2011A60 -->		
					<li id="remark_2015A60"></li> <!-- Ȳ��1-1 2015A60 -->		
					<li id="remark_2013A40"></li> <!-- ȸõ2-1 2013A40 -->		
					<li id="remark_2014A50"></li> <!-- ���-1 2014A50 -->		
					<li id="remark_2016A30"></li> <!-- Ȳ��5 2016A30-->		
					<li id="remark_2017A60"></li> <!-- ��� 2017A60 -->		
					<li id="remark_2019A80"></li> <!-- ����4-1 2019A80 -->		
					<li id="remark_2021A60"></li> <!-- �о簭3 2021A60 -->		
					<li id="remark_2020A60"></li> <!-- ����� 2020A60 -->		
					<li id="remark_2018A45"></li> <!-- ��ȣ��2 2018A45 -->		
					<li id="remark_2022A35"></li> <!-- ���� 2022A35-->		
                </ul>
                
                <!-- �� -->
                <ul class="nomination">
                	<li id="nomination_2001A60"><img src="/nakdong/resources/images/main/map/n_01.png" /></li>  <!-- �ȵ�1 2001A60 -->			
					<li id="nomination_2004A90"><img src="/nakdong/resources/images/main/map/n_02.png" /></li>  <!-- ����õ3-1 2004A90 -->			
					<li id="nomination_2003A60"><img src="/nakdong/resources/images/main/map/n_03.png" /></li>  <!-- ��õ-1 2003A60 -->			
					<li id="nomination_2005A30"><img src="/nakdong/resources/images/main/map/n_04.png" /></li>  <!-- ����2-1 2005A30 -->			
					<li id="nomination_2002A50"><img src="/nakdong/resources/images/main/map/n_05.png" /></li>  <!-- �ݺ�õ2-1 2002A50 -->			
					<li id="nomination_2008A40"><img src="/nakdong/resources/images/main/map/n_06.png" /></li>  <!-- ��õ6 2008A40 -->			
					<li id="nomination_2007A30"><img src="/nakdong/resources/images/main/map/n_07.png" /></li>  <!-- ����2 2007A30 -->			
					<li id="nomination_2009A20"><img src="/nakdong/resources/images/main/map/n_08.png" /></li>  <!-- ��� 2009A20 -->			
					<li id="nomination_2010A30"><img src="/nakdong/resources/images/main/map/n_09.png" /></li>  <!-- ��õ2-1 2010A30 -->			
					<li id="nomination_2012A70"><img src="/nakdong/resources/images/main/map/n_10.png" /></li>  <!-- ��ȣ��6 2012A70 -->			
					<li id="nomination_2011A60"><img src="/nakdong/resources/images/main/map/n_11.png" /></li>  <!-- �޼� 2011A60 -->			
					<li id="nomination_2015A60"><img src="/nakdong/resources/images/main/map/n_12.png" /></li>  <!-- Ȳ��1-1 2015A60 -->			
					<li id="nomination_2013A40"><img src="/nakdong/resources/images/main/map/n_13.png" /></li>  <!-- ȸõ2-1 2013A40 -->			
					<li id="nomination_2014A50"><img src="/nakdong/resources/images/main/map/n_14.png" /></li>  <!-- ���-1 2014A50 -->			
					<li id="nomination_2016A30"><img src="/nakdong/resources/images/main/map/n_15.png" /></li>  <!-- Ȳ��5 2016A30-->			
					<li id="nomination_2017A60"><img src="/nakdong/resources/images/main/map/n_16.png" /></li>  <!-- ��� 2017A60 -->			
					<li id="nomination_2021A60"><img src="/nakdong/resources/images/main/map/n_17.png" /></li>  <!-- �о簭3 2021A60 -->			
					<li id="nomination_2018A45"><img src="/nakdong/resources/images/main/map/n_18.png" /></li>  <!-- ��ȣ��2 2018A45 -->			
					<li id="nomination_2019A80"><img src="/nakdong/resources/images/main/map/n_19.png" /></li>  <!-- ����4-1 2019A80 -->			
					<li id="nomination_2020A60"><img src="/nakdong/resources/images/main/map/n_20.png" /></li>  <!-- ����� 2020A60 -->			
					<li id="nomination_2022A35"><img src="/nakdong/resources/images/main/map/n_21.png" /></li>  <!-- ���� 2022A35-->			
					<li id="nomination_2006A20"><img src="/nakdong/resources/images/main/map/n_22.png" /></li>  <!-- ����õ-1 2006A20 -->			
                </ul>
                
                <!-- ��õ -->
                <ul class="branch">
					<li id="branch_2001A60"></li> <!-- �ȵ�1 2001A60 -->
					<li id="branch_2004A90"></li> <!-- ����õ3-1 2004A90 -->
					<li id="branch_2003A60"></li> <!-- ��õ-1 2003A60 -->
					<li id="branch_2005A30"></li> <!--  ����2-1 2005A30 -->
					<li id="branch_2002A50"></li> <!-- �ݺ�õ2-1 2002A50 -->
					<li id="branch_2008A40"></li> <!-- ��õ6 2008A40 -->
					<li id="branch_2007A30"></li> <!-- ����2 2007A30 -->
					<li id="branch_2009A20"></li> <!-- ��� 2009A20 -->
					<li id="branch_2011A60"></li> <!-- �޼� 2011A60 -->
					<li id="branch_2010A30"></li> <!-- ��õ2-1 2010A30 -->
					<li id="branch_2012A70"></li> <!-- ��ȣ��6 2012A70 -->
					<li id="branch_2014A50"></li> <!-- ���-1 2014A50 -->
					<li id="branch_2015A60"></li> <!-- Ȳ��1-1 2015A60 -->
					<li id="branch_2013A40"></li> <!-- ȸõ2-1 2013A40 -->
					<li id="branch_2017A60"></li> <!-- ��� 2017A60 -->
					<li id="branch_2016A30"></li> <!-- Ȳ��5 2016A30 -->
					<li id="branch_2020A60"></li> <!-- ����� 2020A60 -->  
					<li id="branch_2021A60"></li> <!-- �о簭3 2021A60 -->
					<li id="branch_2018A45"></li> <!-- ��ȣ��2 2018A45 -->
					<li id="branch_2019A80"></li> <!-- ����4-1 2019A80 -->
					<li id="branch_2022A35"></li> <!-- ���� 2022A35 -->
					<li id="branch_2006A20"></li> <!-- ����õ-1 2006A20 -->
                </ul>
            </div>
            
              <table class="table_01" style="width:552px">
                  <tr>
                        <th rowspan="2" style="border-bottom:0; width: 200px;" id="valName"></th>
                        <th>BOD</th>
                        <th>T-P</th>
                </tr>
                    <tr>
                        <td style="border-bottom:0" id="valBOD"></td>
                        <td style="border-bottom:0" id="valTP"></td>
                    </tr>
              </table>
          
<!--           	<div id="mapLegend"> -->
<!--           		 <img src="/nakdong/resources/images/main/map_legend.png"/> -->
<!--           	</div> -->
          	
<!--           	<div id="map"></div> -->
          	
<!--           	<div class="mapTable"> -->
<!--           		<table border="0" cellpadding="0" cellspacing="0"> -->
<!--           			<tr> -->
<!--           				<td rowspan="2" class="name"><span id="valName"></span></td> -->
<!--           				<td class="type noneBorderRight">BOD</td> -->
<!--           				<td class="type">T-P</td> -->
<!--           			</tr> -->
<!--           			<tr> -->
<!--           				<td class="val"><span id="valBOD">&nbsp;</span></td> -->
<!--           				<td class="val noneBorderRight"><span id="valTP">&nbsp;</span></td> -->
<!--           			</tr> -->
<!--           		</table> -->
<!--           	</div> -->
          	
          </div>
          
            <div class="right">
                
                <h2 class="icon_s01">���� ����</h2>
                <ul class="main_tab1">
                	<li class="on" id="main_tab1_1" onmouseover='fncBoardOver(1);'><a href="#">��ȯ�溸��</a></li>
                    <li id="main_tab1_2" onmouseover='fncBoardOver(2);'><a href="#">������ ����</a></li>
                    <li id="main_tab1_3" onmouseover='fncBoardOver(3);'><a href="#">ȯ����������ڷ�</a></li>
                </ul>
                
                <div class="notice_cont">
                	<div class="notice_cont1" id="notice_cont1">
                        <h3>��ȯ�� ����</h3>
                        <ul class="notice_list">
                        	<div id="water_board">
                            </div>
                        </ul>
                    </div>
                    
                    <div class="notice_cont2" style="display:none" id="notice_cont2">
                        <h3>�����°� ����</h3>
                        <ul class="notice_list">
                        	<div id="hydro_board">
                            </div>
                        </ul>
                    </div>
                    
                    <div class="notice_cont3" style="display:none"  id="notice_cont3">
                        <h3>ȯ����������ڷ�</h3>
                        <ul class="notice_list">
	                        <div id="env_board">
	                        </div>
                        </ul>
                    </div>
                    
                </div>
                
                <div class="right_banner">
                
                	<ul>
                    	<li class="right_banner1"><a href="/nakdong/weStatus.do">�����ڷ� �˻�<span>������ ���� <br/>���� �ڷ�</span></a></li>
                        <li class="right_banner2"><a href="/nakdong/dbRainRiver.do">����/����ڷ� �˻�<span>������ ����/��� <br/>�����ڷ�</span></a></li>
                        <li class="right_banner3"><a href="/nakdong/resources/download/userManual.hwp">�ý��� �Ŵ��� �ٿ�ε�<span>Syetem Manual <br/>Download</span></a></li>
                    </ul>
                
                </div>
                
               <div class="right_bottom">
                	<h2 class="icon_s02">���� ���</h2>
                </div>
              <ul class="site_link">
                	<li>
                    	<a class="link01" href="http://www.me.go.kr" target="_new"></a>
                        <a class="link02" href="http://me.go.kr/ndg" target="_new"></a>
                        <a class="link03" href="http://http://www.nier.go.kr/NIER/egovNakDongIndex.jsp" target="_new"></a>
                        <a class="link04" href="http://www.molit.go.kr" target="_new"></a>
                    </li>
                    <li>
                    	<a class="link05" href="http://www.ekr.or.kr" target="_new"></a>
                        <a class="link06" href="http://www.kma.go.kr" target="_new"></a>
                        <a class="link07" href="http://www.nakdongriver.go.kr" target="_new"></a>
                        <a class="link08" href="http://www.wins.go.kr" target="_new"></a>
                    </li>
                </ul>
                <ul class="site_Banner">
                	<li class="Bn1"><a href="/nakdong/weStatus.do"></a></li>
                    <li class="Bn2"><a href="/nakdong/wpsDischarge.do"></a></li>
                    <li class="Bn3"><a href="/nakdong/etfStatus.do"></a></li>
                    <li class="Bn4"><a href="/nakdong/wuStatus.do"></a></li>
                </ul>    
            </div>
        </div>
    </div>
	
	
	<!-- bottom start-->
	<jsp:include page="bottom.do" flush="false"></jsp:include>
	<!-- bottom end -->
	<script type="text/javascript">
	function showList(){
					$.ajax({ 
					type     : "POST"
				,   url      : "/nakdong/board/board_main.json"
				,   dataType : "json"
				,	data : "&START_NO="+1
					+"&END_NO="+6
				,   success  : function(data) {

					setWaterBoard(data.result1,"water_board");
					setHydroBoard(data.result2,"hydro_board");
					setEnvBoard(data.result3,data.result4,"env_board");
					  },error:function(request,status,error){
						  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						  }


				}); 
				
			}
	
	function setWaterBoard(dataList,divID){

				var resultHtml ="";
				$.each(dataList, function(index, json) {
						resultHtml+="<li><a href='/nakdong/waterBrdView.do?BOARD_SEQ="+json.BOARD_SEQ+"'>"+json.BOARD_TITLE+"</a><span>"+json.CREATE_DATE+"</span></li>";
						var row = "";
					});
				document.getElementById(divID).innerHTML=resultHtml;
				}
	
	function setHydroBoard(dataList,divID){

		var resultHtml ="";
		$.each(dataList, function(index, json) {
				resultHtml+="<li><a href='/nakdong/hydroBrdView.do?BOARD_SEQ="+json.BOARD_SEQ+"'>"+json.BOARD_TITLE+"</a><span>"+json.CREATE_DATE+"</span></li>";
				var row = "";
			});
		document.getElementById(divID).innerHTML=resultHtml;
		}
	
	function setEnvBoard(dataList1,dataList2,divID){

		var resultHtml ="";
		var chkRow = 0;
		$.each(dataList1, function(index, json) {
			
				
				++chkRow;
				if(chkRow <= 3) {
				resultHtml+="<li><a href='/nakdong/envBrdView.do?BOARD_SEQ="+json.BOARD_SEQ+"'>"+json.BOARD_TITLE+"</a><span>"+json.CREATE_DATE+"</span></li>";
				}
			});
		 chkRow = 0;
		$.each(dataList2, function(index, json) {
			
			
				++chkRow;
				if(chkRow <= 3) {
					resultHtml+="<li><a href='/nakdong/envBrdView2.do?BOARD_SEQ="+json.BOARD_SEQ+"'>"+json.BOARD_TITLE+"</a><span>"+json.CREATE_DATE+"</span></li>";
				}
			});
		document.getElementById(divID).innerHTML=resultHtml;
		}
		
	showList();
	
	</script>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>낙동강 물환경 통합관리시스템</title>
	
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/we_info.css">
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
	
	<style>
		html, body {
			overflow-x: hidden;
			overflow-y: auto;
		}
	</style>
	
	<script>
		$("document").ready(function() {
			$.ajax({
				url: '/nakdong/we/common_tpmv.json'
				, dataType: 'json'
				, success: function(d) {
					var result = d.result;
					
					var $table = $("#infoTPMV");
					var $tbody = $table.find("tbody");
					
					$tbody.empty();
					
					for(var i in result) {
						var html = "<tr onmouseover=\"this.bgColor='#ffcc00';this.style.cursor='pointer';\" onmouseout=\"this.bgColor='#ffffff';\" id=\"" + result[i].AC_ID + "\" bgcolor=\"#ffffff\" style=\"cursor: pointer;\">" +
							"    <td style=\"border-right: none;\">" + result[i].NAME + "</td>" +
							"</tr>";
							
						$tbody.append(html);
					}
					
					$tbody.find("tr").bind("click", function() {
						var $div = $('#infoTPMVChartDiv');
						
						$div.empty();
						$div.append("<object type='text/html' data='/nakdong/resources/js/chart/we/tpmv/app.html?tpmvcode=" + this.id + "' id='infoChart'></object>");
					});
				}
			});
		});
		
	</script>
</head>

<body>
	
	<div id="infoTPMVTitle">수생태 평가지점 정보</div>
	
	<div id="infoTPMVTableDiv">
		<table border="0" cellpadding="0" cellspacing="0" id="infoTPMV">
			<thead>
		        <tr>
		            <th class="head" style="border-right: none;">지점</th>
		        </tr>
			</thead>
		    <tbody>
		    </tbody>
		</table>
	</div>
	
	<div class="infoTPMVChartDiv" id="infoTPMVChartDiv">
	</div>
	
	<div class="infoTPMVClose">
		<div id='closeBtn' onclick="self.close()">닫기</div>
	</div>
</body>

</html>
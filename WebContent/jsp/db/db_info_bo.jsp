<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>낙동강 물환경 통합관리시스템</title>
	
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/db_info.css">
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
	
	<style>
		html, body {
			overflow-x: hidden;
			overflow-y: auto;
		}
		
		#year, #month, #date, #hour {
			margin-right: 5px;
			margin-top: 6px;
		}
	</style>
	
	<script>
		function getList() {
			var year = $("#year option:selected").val();
			var month = $("#month option:selected").val();
			var day = $("#date option:selected").val();
			var hour = $("#hour option:selected").val();
			
			$.ajax({
				url: '/nakdong/db/common_bo.json?year=' + year + '&month=' + month + '&day=' + day + '&hour=' + hour
				, dataType: 'json'
				, success: function(d) {
					var result = d.result;
					
					var $table = $("#infoBo");
					var $tbody = $table.find("tbody");
					
					var $div = $('#infoBoChartDiv');
					
					$div.empty();
					$tbody.empty();
					
					if(result.length == 0) {
						$tbody.append("<tr><td colspan='5' style=\"text-align: center; height: 50px; border-right: none;\">해당 검색조건의 데이터가 없습니다.</td></tr>");
						return false;
					}
					
					for(var i in result) {
						var html = "<tr onmouseover=\"this.bgColor='#ffcc00';this.style.cursor='pointer';\" onmouseout=\"this.bgColor='#ffffff';\" id=\"" + result[i].BOOBSCD + "\" bgcolor=\"#ffffff\" style=\"cursor: pointer;\">" +
							"    <td>" + result[i].OBSNM + "</td>" +
							"    <td class=\"value\">" + setComma(parseFloat(result[i].SWL).toFixed(2)) + "</td>" +
							"    <td class=\"value\">" + setComma(parseFloat(result[i].OWL).toFixed(2)) + "</td>" +
							"    <td class=\"value\">" + setComma(parseFloat(result[i].INF).toFixed(2)) + "</td>" +
							"    <td class=\"value\" style=\"border-right: none;\">" + setComma(parseFloat(result[i].OTF).toFixed(2)) + "</td>" +
							"</tr>";
							
						$tbody.append(html);
					}
					
					$tbody.find("tr").bind("click", function() {
						var $div = $('#infoBoChartDiv');
						$div.empty();
						
						$div.append("<object type='text/html' data='/nakdong/resources/js/chart/db/bo/app.html?bocode=" + this.id + "&year=" + $("#year option:selected").val() + "' id='infoBoChart'></object>");
					});
				}
			});
		};
		
		$("document").ready(function() {
			for(var i=2003; i<=2015; i++)
				$("#year").append("<option value='" + i + "'>" + i + "년</option>");
				
			for(var i=1; i<=12; i++)
				$("#month").append("<option value='" + ("00" + i).slice(-2) + "'>" + ("00" + i).slice(-2) + "월</option>");
				
			for(var i=1; i<=31; i++)
				$("#date").append("<option value='" + ("00" + i).slice(-2) + "'>" + ("00" + i).slice(-2) + "일</option>");
				
			for(var i=0; i<=23; i++)
				$("#hour").append("<option value='" + ("00" + i).slice(-2) + "'>" + ("00" + i).slice(-2) + "시</option>");
				
			$("#year").val("2015");
			$("#month").val("12");
			$("#date").val("31");
			$("#hour").val("23");
							
			getList();
			
			$("#year").bind("change", function() {
				getList();
			});
			
			$("#month").bind("change", function() {
				getList();
			});
			
			$("#date").bind("change", function() {
				getList();
			});
			
			$("#hour").bind("change", function() {
				getList();
			});
		});
		
	</script>
</head>

<body>
	
	<div id="infoBoTitle">
		보관측소 정보
		<div style="float: right; margin-right: 20px;">
			<select id="year"></select>
			<select id="month"></select>
			<select id="date"></select>
			<select id="hour"></select>
		</div>
	</div>
	
	<div class="tableDiv">
		<table border="0" cellpadding="0" cellspacing="0" id="infoBo">
			<thead>
		        <tr>
		            <th class="head">지점</th>
		            <th class="head">상류수위(m)</th>
		            <th class="head">하류수위(m)</th>
		            <th class="head">유입량<br>(㎥/s)</th>
		            <th class="head" style="border-right: none;">방류량<br>(㎥/s)</th>
		        </tr>
			</thead>
		    <tbody>
		    </tbody>
		</table>
	</div>
	
	<div class="infoBoChartDiv" id="infoBoChartDiv">
	</div>
	
	<div class="infoBoClose">
		<div id='closeBtn' onclick="self.close()">닫기</div>
	</div>
</body>
</html>
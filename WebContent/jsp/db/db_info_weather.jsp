<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>������ ��ȯ�� ���հ����ý���</title>
	
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/db_info.css">
	
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
				url: '/nakdong/db/common_weather.json'
				, dataType: 'json'
				, success: function(d) {
					var result = d.result;
					
					var $table = $("#infoWeather");
					var $tbody = $table.find("tbody");
					
					$tbody.empty();
					
					for(var i in result) {
						var html = "<tr onmouseover=\"this.bgColor='#ffcc00';this.style.cursor='pointer';\" onmouseout=\"this.bgColor='#ffffff';\" id=\"" + result[i].ST_CD + "\" bgcolor=\"#ffffff\" style=\"cursor: pointer;\">" +
							"    <td>" + result[i].ST_NM + "</td>" +
							"    <td style=\"border-right: none;\">" + result[i].COMM + "</td>" +
							"</tr>";
							
						$tbody.append(html);
					}
					
					$tbody.find("tr").bind("click", function() {
						var $div = $('#infoWeatherChartDiv');
						
						$div.empty();
						$div.append("<object type='text/html' data='/nakdong/resources/js/chart/db/weather/app.html?weathercode=" + this.id + "' id='infoWeatherChart'></object>");
					});
				}
			});
		});
		
	</script>
</head>

<body>
	
	<div id="infoWeatherTitle">�������� ����</div>
	
	<div id="infoWeatherTableDiv">
		<table border="0" cellpadding="0" cellspacing="0" id="infoWeather">
			<thead>
		        <tr>
		            <th class="head">����</th>
		            <th class="head" style="border-right: none;">����</th>
		        </tr>
			</thead>
		    <tbody>
		    </tbody>
		</table>
	</div>
	
	<div class="infoWeatherChartDiv" id="infoWeatherChartDiv">
	</div>
	
	<div class="infoWeatherClose">
		<div id='closeBtn' onclick="self.close()">�ݱ�</div>
	</div>
</body>

</html>
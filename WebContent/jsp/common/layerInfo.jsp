<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>낙동강 물환경 통합관리시스템</title>
		
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
	
	<style>
		body {
			overflow-x: hidden;
			overflow-y: auto;
		}
		
		.info {
			width: 450px;
			table-layout: fixed;
			margin: 10px;
			position: relative;
			float: left;
		}
		
		.info thead tr th {
			background: #666666;
			color: white;
			font-weight: bold;
			text-align: center !important;
		}
		
		.info thead th,
		.info tbody td {
			padding: 3px 5px;
			line-height: 20px;
		}
		
		.info tbody tr:hover .name,
		.info tbody tr:hover .layer,
		.info tbody tr:hover .label {
			background: #d5d5d5;
			cursor: pointer;
			border-right: solid 1px #ffffff;
			border-bottom: solid 1px #ffffff;	
		}
		
		.info .group {
			text-align: center;
			border-right: solid 1px #d5d5d5;	
			border-bottom: solid 1px #d5d5d5;
		}
		
		.info .name {
			border-right: solid 1px #d5d5d5;	
			border-bottom: solid 1px #d5d5d5;
		}
		
		.info .layer {
			text-align: right;
			border-right: solid 1px #d5d5d5;	
			border-bottom: solid 1px #d5d5d5;
		}
		
		.info .label {
			text-align: right;
			border-bottom: solid 1px #d5d5d5;
			border-right: solid 1px #ffffff;	
		}
		
		#closeBtn {
			position: relative;
			float: right;
			background: #ffcc00;
			color: #333333;
			font-weight: bold;
			cursor: pointer;
			padding: 6px 20px;
			margin: 20px 10px 10px 0;
		}
		
		#closeBtn:hover {
			background: #d5d5d5;
		}
	</style>
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
	
	<script>
		$(document).ready(function() {
			$("#closeBtn").click(function() {
				self.close();	
			});
			
			var url = window.location.href;
			url = url.split('=');
			
			var mapserver = url[1].replace("&use", "");
			var use = url[2];
			
			$.ajax({
				url: mapserver + '/layers?f=pjson'
				, dataType: 'jsonp'
				, success: function(d) {
					draw(d.layers, use);
				}
			});
		});
		
		function draw(d, u) {
			var h = "";
			var use = "," + u + ",";
			
			for(var i = 0; i < d.length; i++) {
				var l = d[i];
				var id = "," + l.id + ",";
				
				if(use.indexOf(id) > -1) {
					// group
					if(l.type == "Group Layer") {
						var s = d[parseInt(i)+1];
						var label = "-";
						var drawing = s.drawingInfo;
						var level = "-";
						
						if(drawing.labelingInfo != undefined && drawing.labelingInfo != null) {
							if(drawing.labelingInfo[0].minScale != "0")
								label = setComma(parseInt(drawing.labelingInfo[0].minScale)) + " ~";
						}
						
						if(s.minScale != "0")
							level = setComma(parseInt(s.minScale)) + " ~";
							
						h += "<tr>"
							+ "<td class='group' rowspan='" + l.subLayers.length + "'>" + l.name + "</td>" 	
							+ "<td class='name'>" + s.name + "</td>"
							+ "<td class='layer'>" +  level + "</td>"
							+ "<td class='label'>" + label + "</td>"
							+ "</tr>";
							
						i++;
					}
					
					// sub
					else {
						var drawing = l.drawingInfo;
						var label = "-";
						var level = "-";
						
						if(drawing.labelingInfo != undefined && drawing.labelingInfo != null) {
							if(drawing.labelingInfo[0].minScale != "0")
								label = setComma(parseInt(drawing.labelingInfo[0].minScale)) + " ~";
						}
						
						if(l.minScale != "0")
							level = setComma(parseInt(l.minScale)) + " ~";
						
						h += "<tr>"
							+ "<td class='name'>" + l.name + "</td>"
							+ "<td class='layer'>" +  level + "</td>"
							+ "<td class='label'>" +  label + "</td>"
							+ "</tr>";
						
					}
				}
			}
			
			$(".info tbody").append(h);
		};
	</script>
</head>

<body>

	<table border="0" cellspacing="0" cellpadding="0" class="info">
		<thead>
			<tr>
				<th class='group'>그룹명</th>
				<th class='name'>레이어명</th>
				<th class='layer'>레이어 축척</th>
				<th class='label'>레이블 축척</th>
			</tr>
		</thead>
			
		<tbody>
		</tbody>
	</table>
	
	<div id='closeBtn'>닫기</div>
	
</body>

</html>
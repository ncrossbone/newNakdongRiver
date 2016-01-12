<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>낙동강 물환경 통합관리시스템</title>
		
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
	<link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery.treeview.css" />
	
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery.treeview.js"></script>
	
	<style>
	    html, body {
	       overflow: auto;
	    }
    </style>
	
	
	<script>
		$(document).ready(function() {
			$("#browser").treeview();
			
			$("span[id*='esDown']").bind("click", function() {
				var id = $(this).attr("id");
				var file = id + ".pdf";
				
				$("#filename").val(file);
				form1.submit();
			});
		});
	</script>
</head>

<body>
	
	<form action="/nakdong/download.do" name="form1" id="esDown_form">
		<input type="hidden" name="filename" id="filename">
		<ul id="browser" class="filetree">
			<li><span class="folder">환경기초조사사업 2012</span>
				<ul>
					<li><span class="file" id="esDown1_1">1. 낙동강수계 잠정관리 유해물질 실태조사 및 예측시스템 개발</span></li>
					<li><span class="file" id="esDown1_2">2. 낙동강수계 호소환경 및 생태조사</span></li>
					<li><span class="file" id="esDown1_3">3. 보설치 전후 회유성 어종의 이동경로 조사 및 어도효과 분석</span></li>
					<li><span class="file" id="esDown1_4">4. 보 설치 전후 수생태계 영향 평가 연구</span></li>
					<li><span class="file" id="esDown1_5">5. 낙동강본류 및 주요지천의 습지평가</span></li>
					<li><span class="file" id="esDown1_6">6. 낙동강수계 지류 수질.유량 모니터링</span></li>
					<li><span class="file" id="esDown1_7">7. 수계 내 난분해성물질 증감요인 규명 및 관리방안 연구</span></li>
					<li><span class="file" id="esDown1_8">8. 보 설치 구간 퇴적환경조사 및 관리방안 연구</span></li>
					<li><span class="file" id="esDown1_9">9. 낙동강수계 주요 비점오염원 유출 장기모니터링</span></li>
					<li><span class="file" id="esDown1_10">10. 남강댐 상류지역 비점오염원 파악 및 대책수립</span></li>
					<li><span class="file" id="esDown1_11">11. 낙동강수계 물관리연구 네트워크 </span></li>
				</ul>
			</li>
		</ul>
	</form>

</body>
	
</html>
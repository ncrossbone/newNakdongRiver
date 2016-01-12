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
			
			$("span[id*='ruleInfo']").bind("click", function() {
				var id = $(this).attr("id");
				var file = id + ".hwp";
				
				$("#filename").val(file);
				form1.submit();
			});
		});
	</script>
</head>

<body>
	
	<form action="/nakdong/download.do" name="form1" id="ruleInfo_form">
		<input type="hidden" name="filename" id="filename">
		<ul id="browser" class="filetree">
			<li><span class="folder">수질·수생태</span>
				<ul>
					<li><span class="file" id="ruleInfo1_1">수질오염경보의 종류별 발령 대상, 발령 주체 및 대상 수질오염물질</span></li>
					<li><span class="file" id="ruleInfo1_2">수질오염경보의 종류별 경보단계 및 그 단계별 발령·해제기준</span></li>
					<li><span class="file" id="ruleInfo1_3">수질오염경보의 종류별·경보단계별 조치사항</span></li>
					<li><span class="file" id="ruleInfo1_4">댐보 연계운영규정 제정</span></li>
					<li><span class="file" id="ruleInfo1_5">수질예보 및 대응조치에 관한 규정</span></li>
					<li><span class="file" id="ruleInfo1_6">조류제거시설 시설운영 및 조류제거물질 사용지침</span></li>
					<li><span class="file" id="ruleInfo1_7">중권역 목표기준 고시안</span></li>
				</ul>
			</li>
			<li><span class="folder">환경기초시설</span>
				<ul>
					<li><span class="file" id="ruleInfo2_1">공공하수도시설 운영관리 업무지침</span></li>
					<li><span class="file" id="ruleInfo2_2">산업폐수의 공공하수처리시설 연계처리지침</span></li>
					<li><span class="file" id="ruleInfo2_3">폐수종말처리시설 설치 및 운영관리지침 개정안</span></li>
				</ul>
			</li>
		</ul>
	</form>
	
</body>

</html>
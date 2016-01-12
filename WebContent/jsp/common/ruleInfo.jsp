<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>������ ��ȯ�� ���հ����ý���</title>
		
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
			<li><span class="folder">������������</span>
				<ul>
					<li><span class="file" id="ruleInfo1_1">���������溸�� ������ �߷� ���, �߷� ��ü �� ��� ������������</span></li>
					<li><span class="file" id="ruleInfo1_2">���������溸�� ������ �溸�ܰ� �� �� �ܰ躰 �߷ɡ���������</span></li>
					<li><span class="file" id="ruleInfo1_3">���������溸�� ���������溸�ܰ躰 ��ġ����</span></li>
					<li><span class="file" id="ruleInfo1_4">�ﺸ �������� ����</span></li>
					<li><span class="file" id="ruleInfo1_5">�������� �� ������ġ�� ���� ����</span></li>
					<li><span class="file" id="ruleInfo1_6">�������Žü� �ü�� �� �������Ź��� �����ħ</span></li>
					<li><span class="file" id="ruleInfo1_7">�߱ǿ� ��ǥ���� ��þ�</span></li>
				</ul>
			</li>
			<li><span class="folder">ȯ����ʽü�</span>
				<ul>
					<li><span class="file" id="ruleInfo2_1">�����ϼ����ü� ����� ������ħ</span></li>
					<li><span class="file" id="ruleInfo2_2">�������� �����ϼ�ó���ü� ����ó����ħ</span></li>
					<li><span class="file" id="ruleInfo2_3">�������ó���ü� ��ġ �� �������ħ ������</span></li>
				</ul>
			</li>
		</ul>
	</form>
	
</body>

</html>
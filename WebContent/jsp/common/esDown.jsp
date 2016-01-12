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
			<li><span class="folder">ȯ����������� 2012</span>
				<ul>
					<li><span class="file" id="esDown1_1">1. ���������� �������� ���ع��� �������� �� �����ý��� ����</span></li>
					<li><span class="file" id="esDown1_2">2. ���������� ȣ��ȯ�� �� ��������</span></li>
					<li><span class="file" id="esDown1_3">3. ����ġ ���� ȸ���� ������ �̵���� ���� �� �ȿ�� �м�</span></li>
					<li><span class="file" id="esDown1_4">4. �� ��ġ ���� �����°� ���� �� ����</span></li>
					<li><span class="file" id="esDown1_5">5. ���������� �� �ֿ���õ�� ������</span></li>
					<li><span class="file" id="esDown1_6">6. ���������� ���� ����.���� ����͸�</span></li>
					<li><span class="file" id="esDown1_7">7. ���� �� �����ؼ����� �������� �Ը� �� ������� ����</span></li>
					<li><span class="file" id="esDown1_8">8. �� ��ġ ���� ����ȯ������ �� ������� ����</span></li>
					<li><span class="file" id="esDown1_9">9. ���������� �ֿ� ���������� ���� ������͸�</span></li>
					<li><span class="file" id="esDown1_10">10. ������ ������� ���������� �ľ� �� ��å����</span></li>
					<li><span class="file" id="esDown1_11">11. ���������� ���������� ��Ʈ��ũ </span></li>
				</ul>
			</li>
		</ul>
	</form>

</body>
	
</html>
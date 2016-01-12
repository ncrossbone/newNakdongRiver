<%@ page contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<title>낙동강 물환경 통합관리시스템</title>
	
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/common.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/custom/login.css">
    <link type="text/css" rel="stylesheet" href="/nakdong/resources/css/lib/jquery-ui-1.10.3.custom.css">
    
    <script type="text/javascript" src="/nakdong/resources/js/lib/LAB.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/custom/login/login.js"></script>
	<script type="text/javascript" src="/nakdong/resources/js/custom/common/common.js"></script>
    <script type="text/javascript" src="/nakdong/resources/js/lib/jquery-1.10.2.js"></script>
    
    <script type="text/javascript">
	var pageView;
		
		$LAB
			.script('/nakdong/resources/js/lib/jquery-ui-1.10.3.custom.js')
			.script('/nakdong/resources/js/custom/login/login.js').wait(function() {
				pageView = new loginView();
				pageView.init();
			});
		
		/** 로그인체크 */
		function checkLogin() {

			if(document.form1.userId.value ==''){
							alert("아이디 입력하세요");
							form1.userId.focus();
							return;
						}
						if(document.form1.pw.value ==''){
							alert("패스워드를 입력하세요");
							form1.pw.focus();
							return;
						}
		$.ajax({

				type     : "POST",
				url		 : '/nakdong/login/LoginCheck.action',
				data	 : "userId="+document.form1.userId.value
						   +"&pw="+document.form1.pw.value,
				success	: function(msg) {

					 if(msg == 'success'){

							document.form1.action = '/nakdong/dbStatusNew.do';
							document.form1.submit();
					 }else {

						alert("아이디 또는 비밀번호 오류입니다.\n대소문자를 확인하시기 바랍니다.");
					} 	
				}
			});
			
		}
		
		
		function getCookie(name)
		{
		    var nameOfCookie = name + "=";
		    var x = 0;
		    while ( x <= document.cookie.length )
		    {
		        var y = (x+nameOfCookie.length);
		        if ( document.cookie.substring( x, y ) == nameOfCookie )
		        {
		            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
		            	endOfCookie = document.cookie.length;
		            return unescape( document.cookie.substring( y, endOfCookie ) );
		        }
		        x = document.cookie.indexOf( " ", x ) + 1;
		        if ( x == 0 )
		        	break;
		    }
		    return "";
		}

		function popup1()
		{
		     popup('/nakdong/jsp/login/noti_popup.html', 400, 430);
		}

		function defaultPopup()
		{
			var eventCookie1 = getCookie("wpop1"); // 하루동안 열지 않음.
			
		    if (eventCookie1 != "done") {
		    	popup1();
		    }
		}
		
    </script>
</head>

<!-- <body onload="document.form1.userId.focus();defaultPopup();"> -->
<body onload="document.form1.userId.focus();">
<form name="form1" method="post" style="display:inline">
	<div id="box">
		<div class="login">
			<table border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td class="title"><img src="/nakdong/resources/images/login/login_input_id.png"/></td>
					<td class="text"><input type="text" id="userId" name="userId" tabIndex="1"></td>
					<td rowspan="2" class="btn"><a href="javascript:checkLogin();"><img src="/nakdong/resources/images/login/login_btn_login.png" id="login_btn_login"/></a></td>
				</tr>
				<tr>
					<td class="title"><img src="/nakdong/resources/images/login/login_input_pw.png"/></td>
					<td class="text"><input type="password" id="pw" name="pw" tabIndex="2" onkeydown="if(event.keyCode==13){checkLogin();}"></td>
				</tr>
			</table>
		</div>
	</div>
		
	<div id="bottom">
		<img src="/nakdong/resources/images/login/login_bottom.png" />
	</div>
</form>
</body>

</html>
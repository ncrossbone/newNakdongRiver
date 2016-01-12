


/** 로그인 CAPSLOCK 체크  */
function checkCapsLock( e ) {
    var myKeyCode=0;
    var myShiftKey=false;
    var myMsg='Caps lock 켜져있습니다.';
    
    // Internet Explorer 4+
    if ( document.all ) {
        myKeyCode=e.keyCode;
        myShiftKey=e.shiftKey;
    // Netscape 4
    } else if ( document.layers ) {
        myKeyCode=e.which;
        myShiftKey=( myKeyCode == 16 ) ? true : false;
    // Netscape 6
    } else if ( document.getElementById ) {
        myKeyCode=e.which;
        myShiftKey=( myKeyCode == 16 ) ? true : false;
    }
    
    // Upper case letters are seen without depressing the Shift key, therefore Caps Lock is on
    if ( ( myKeyCode >= 65 && myKeyCode <= 90 ) && !myShiftKey ) {
        alert( myMsg );
    // Lower case letters are seen while depressing the Shift key, therefore Caps Lock is on
    } else if ( ( myKeyCode >= 97 && myKeyCode <= 122 ) && myShiftKey ) {
        alert( myMsg );
    }
}

/** 로그아웃 */
function logout(){

	
	$.ajax({
		
		url 	: '/nakdong/login/logout.action',
		data 	: $('form').serialize(),
		success	: function(msg) {

			 if(msg == 'success'){
				 
				try{
					document.adminmd.action = '/nakdong/login.do';
					document.adminmd.submit();
			 	}
				catch(e){
					try{
						document.form1.action = '/nakdong/login.do';
						document.form1.submit();
					}
					catch(e){}
				}
			 
			 }	
		}
	});
}
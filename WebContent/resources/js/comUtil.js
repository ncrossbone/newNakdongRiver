/**폼요소의 값을 가져올때
 * @author keehyun park
 */
 function gfn_getValue(objName) {
        var obj = document.getElementById(objName);
        var rtnValue = "";
        var arrVal = [];

        switch (obj.type) {
            case 'text':
            case 'textarea':
            case 'hidden':
            case 'file':
            case 'password':
            case 'select-one':
                rtnValue = $.trim($("#"+objName).val());
                break;
            case 'radio':
                rtnValue = $("input:radio[name="+objName+"]:checked").val();
                if(rtnValue == undefined){
                    rtnValue = "";
                }
                break;
            case 'checkbox':
                obj = document.getElementsByName(objName);
                var rnum = 0;
                for (var i = 0; i < obj.length; i++) {
                    if (obj[i].checked) {
                        arrVal[rnum++]= obj[i].value;
                    }
                }
                rtnValue = arrVal.toString();
                break;
        }
        return rtnValue;
 }

/**
* 단순 팝업창 호출
* @author keehyun park
*/
function gfn_popup(strURL,strW,strH,strWinName){
 // ---------------------------
 var pwidth = strW;  
 var pheight = strH; 
 var pName; 
 if(strWinName == undefined || strWinName == null){
  pName = "popup";
 }else{
  pName = strWinName;
 }
 // ---------------------------
 if(navigator.appName.indexOf("Microsoft") != -1) {
 } else if (navigator.appName.indexOf("Netscape") != -1) {
  pwidth = Number(strW)+5; 
  pheight = Number(strH)+5;
 }
 // ---------------------------
 var sw  = screen.availWidth ;
 var sh  = screen.availHeight ;
 px=(sw - pwidth)/2 ;
 py=(sh - pheight)/2 ;
 
 var option = "scrollbars=yes,menubar=no,resizable=no,width="+pwidth+"px,height="+pheight+"px, top="+py+",left="+px;
 var nw = window.open(strURL,pName,option);
 nw.focus();
}


/**<pre>
 * 텍스트박스의 빈값여부 체크 , 해당 경고메세지 띄우기
 * </pre>
 * @param objName  : 해당요소 ID
 * @param msg      : alert 메세지
 */
function gfn_isEmptyFocus(objName, msg) {
	var rtnValue = "";
	var alertMsg = "";
	if(msg == undefined || msg == null || msg == ""){
		alertMsg = "";
	}else{
		alertMsg = msg;
	}
	rtnValue = gfn_getValue(objName);
	if(rtnValue.length == 0){
		if(alertMsg.length > 0){
			alert(alertMsg);
			$("#"+objName).focus();
		}
		return true;
	}else{
		return false;
	}   
}

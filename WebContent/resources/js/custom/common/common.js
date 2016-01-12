//var mapUrl = "http://211.114.21.36:6080";
//var mapUrl = "http://192.168.0.8:6080";
//#���� �����ϰ�� �ٸ� ����!!!
//var mapUrl = "https://192.168.0.8:6443";
//var mapUrl = "http://192.168.0.8:6080"; // local
//var mapUrl = "http://cetech.iptime.org:5006"; // local
var mapUrl = "http://112.217.167.123:16080"; // local

// popup ����: url(string), width(int), height(int)
function popup(url, width, height) {
	var setting = "left=0";
	setting += ", top=0";
	setting += ", toolbar=no";
	setting += ", location=no";
	setting += ", directories=no";
	setting += ", status=yes";
	setting += ", menubar=no";
	setting += ", scrollbars=auto";
	setting += ", resizable=yes";
	setting += ", width=" + width;
	setting += ", height=" + height;
	
	try{
		var winObj = window.open(url, null, setting);
		winObj.focus();
	}
	catch(e){}
};

// object length �� ���(int)
function getObjectLength(obj) {
	var length = 0;
	
	for(var i in obj) {
		if(obj.hasOwnProperty(i)) length++;
	}
	
	return length;
};

function getObjectKeys(obj) {
	var list = [];
	
	for(var i in obj) {
		list.push(i);
	}
	
	return list;
}

// ���ڸ� �޸�
function setComma(n) {
    var reg = /(^[+-]?\d+)(\d{3})/;
    n += '';

    while (reg.test(n)) {
        n = n.replace(reg, '$1' + ',' + '$2');
    }

    return n;
};

// drawComboBox
function drawComboBox(url, obj, none) {
	$.ajax({
		url: url
		, dataType: 'json'
		, success: function(d) {
			var r = d.result;
			
			obj.empty();
			obj.append("<option value='none'>" + none + "</option>");
			
			for(var i in r) {
				obj.append("<option value='" + r[i]['VAL'] + "'>" + r[i]['ITEM'] + "</option>"); 
			}
		}
	});
};

var Request = function() {
    this.getParameter = function( name ) {
        var rtnval = '';
        var nowAddress = unescape(location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf('?')+1,nowAddress.length)).split('&');
		
        for(var i = 0 ; i < parameters.length ; i++)
        {
            var varName = parameters[i].split('=')[0];
            if(varName.toUpperCase() == name.toUpperCase())
            {
                rtnval = parameters[i].split('=')[1];
                break;
            }
        }
		
        return rtnval;
    };
};

/**
 * @FileName  : common.js
 * @Project     : newNakdongRiver
 * @Date         : 2013. 10. 4. 
 * @�ۼ���      : leeyunsoo
 * @�����̷� :
 * @���α׷� ���� : ��Ʈ�� ���� ������ üũ �޼��� functionObject ���� ���� �ô� �⺻ ���� ���� �ÿ��� �� �㼺�� �������ش�
 * �� �ͽ��÷ξ� 7 ������ ������ ������������ ������
 */
function checkBrowser(scope, functionObject, parameter){
	if($.browser == $.browser.msie && $.browser.version < 8){
		if(functionObject != null){
			functionObject.apply(scope, parameter);
		}else{
			alert("�� ��Ʈ ����� �ͽ��÷ξ�(8���� �̻�), ũ�� ������, ���̾� �������� �����մϴ�");
		}
	}
};

var resultdata;

function testAdmin(data){
	$.ajax({	
		url:'/nakdong/db/common_search.json',
		data:data,
		resultdata:{"L_CODE":L_CODE},
		dataType:'json',
		success:function(data){
			set_grid(data.result);
		},
		error : function(aaa,bbb,ccc){
			console.log("aaa");
		}
	}); 
}

function sub_07_01() {
};



var Browser = {
		chk : navigator.userAgent.toLowerCase()
};

Browser = {
	ie : Browser.chk.indexOf('msie') != -1,
	ie6 : Browser.chk.indexOf('msie 6') != -1,
	ie7 : Browser.chk.indexOf('msie 7') != -1,
	ie8 : Browser.chk.indexOf('msie 8') != -1,
	ie9 : Browser.chk.indexOf('msie 9') != -1,
	ie10 : Browser.chk.indexOf('msie 10') != -1,
	opera : !!window.opera,
	safari : Browser.chk.indexOf('safari') != -1,
	safari3 : Browser.chk.indexOf('applewebkir/5') != -1,
	mac : Browser.chk.indexOf('mac') != -1,
	chrome : Browser.chk.indexOf('chrome') != -1,
	firefox : Browser.chk.indexOf('firefox') != -1
};


function saveImageForExt(width, height){
	var chart = Ext.getCmp('chart1');
	$("<canvas id='gbcanvas' width='" + width + "' height='" + height + "'></canvas>").appendTo("body");
	var canvas = document.getElementById("gbcanvas");
	var ctx = canvas.getContext("2d");
	var data = chart.save({type: 'image/svg+xml'});
	var DOMURL = self.URL || self.webkitURL || self;
	var img = new Image();
	var svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
	var url = DOMURL.createObjectURL(svg);

	img.src = url;
	img.onload = function() {
	     ctx.drawImage(img, 0, 0);
	     Canvas2Image.saveAsPNG(canvas, false);
	     $("#gbcanvas").remove();
	}
}



//dynamic layer ������ �˻�
function searchDynamicLayer(obj) {
	var layerId = "searchResultLayer";
	var url = mapUrl + obj.url;
	var id = obj.id;
	var whereObject = obj.where;
	var map = obj.map;
	var where = "";
	
	for(var key in whereObject){
		if(whereObject[key] != ""){
			if(where.length == 0){
				where += key +  " " + whereObject[key];
			}else{
				where += " AND " + key +  " " + whereObject[key];
			}
		}
	}
	
	// layer search -> renderer
	var imageParameters = new esri.layers.ImageParameters();
	
	var layerDefs = [];
	layerDefs[id] = where;
	imageParameters.layerDefinitions = layerDefs;
	imageParameters.layerIds = [id];
	imageParameters.layerOption = esri.layers.ImageParameters.LAYER_OPTION_SHOW;
	imageParameters.transparent = true;
	
	var dynamicMapServiceLayer = new esri.layers.ArcGISDynamicMapServiceLayer(url, {
		"imageParameters":imageParameters
		, id: layerId
	});
	
	var layerIds = "," + map.layerIds.toString() + ",";
	
	if(layerIds.indexOf(',' + layerId + ',') > -1) {
		var pl = map.getLayer(layerId);
		map.removeLayer(pl);
	}
	
	map.addLayer(dynamicMapServiceLayer);
	dynamicMapServiceLayer.setVisibleLayers([id]);
};

function saveCharToImage(chart){
	var svg = chart.save({type: 'image/svg+xml'});
	$.ajax({
		url : '/nakdong/common/common_chart_image_save.json',
		type : "post",
		dataType : "json",
		data : 'svg=' + encodeURIComponent( encodeURIComponent( svg ) ),
		
		success : function(data){
			window.location = '/nakdong/download.do?filename=' + data["fileName"];
		}, 
		error : function(a, aa, aaa){
			var aaa = "";
		}
	});
};

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
} 

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
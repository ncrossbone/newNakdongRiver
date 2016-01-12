$(document).ready(function () {
	$(".img_guide1").click(function () {
		$(".gis_all").hide();
		$(".gis1").show();
	});
	$(".img_guide2").click(function () {
		$(".gis_all").hide();
		$(".gis2").show();
	});
	$(".img_guide3").click(function () {
		$(".gis_all").hide();
		$(".gis3").show();
	});
	$(".img_guide4").click(function () {
		$(".gis_all").hide();
		$(".gis4").show();
	});
	
	$(".gis1 p,.gis2 p,.gis3 p,.gis4 p").click(function () {
		$(this).parent().hide();
		$(".gis_all").show();
	});
	$(".s_guide1").click(function () {
		$(".gis1").show();
		$(".gis_all,.gis2,.gis3,.gis4").hide();
	});
	$(".s_guide2").click(function () {
		$(".gis2").show();
		$(".gis_all,.gis1,.gis3,.gis4").hide();
	});
	$(".s_guide3").click(function () {
		$(".gis3").show();
		$(".gis_all,.gis1,.gis2,.gis4").hide();
	});
	$(".s_guide4").click(function () {
		$(".gis4").show();
		$(".gis_all,.gis1,.gis2,.gis3").hide();
	});
	
	
	
	
	$(".img_guide1").mouseover(function () {
		$(".img_list .img1").fadeIn(500);
		$(".img_list .img1").siblings().fadeOut(500);
	});
	
	$(".img_guide2").mouseover(function () {
		$(".img_list .img2").fadeIn(500);
		$(".img_list .img2").siblings().fadeOut(500);
	});
	
	$(".img_guide3").mouseover(function () {
		$(".img_list .img3").fadeIn(500);
		$(".img_list .img3").siblings().fadeOut(500);
	});
	
	$(".img_guide4").mouseover(function () {
		$(".img_list .img4").fadeIn(500);
		$(".img_list .img4").siblings().fadeOut(500);
	});
	
	$(".img_guide1,.img_guide2,.img_guide3,.img_guide4").mouseout(function () {
		$(".img_list img").fadeOut(500);
	});
	

	
	$(".gnb li").mouseover(function () {
		$(this).addClass("over");
		$(this).siblings().removeClass("over");
	});
	$(".gnb").mouseout(function () {
		$(this).find("li").removeClass("over");
	});
	
	$(".depth2 li").mouseover(function () {
		$(this).addClass("over");
		$(this).siblings().removeClass("over");
	});
	$(".depth2").mouseout(function () {
		$(this).find("li").removeClass("over");
	});
	
	$(".gnb1,.gnb2").mouseover(function () {
		$(".gnb30,.gnb40").fadeOut("fast");
	});
	$(".gnb3").mouseover(function () {
		$(".gnb30").fadeIn("fast");
		$(".gnb40").fadeOut("fast");
	});
	$(".gnb4").mouseover(function () {
		$(".gnb40").fadeIn("fast");
		$(".gnb30").fadeOut("fast");
	});


	
	$("#contents .cont #center ul li").mouseover(function () {
		$(this).animate({height:'78px'},0);
		$(this).find(".over_img").fadeIn(100);
		$(this).siblings().animate({height:'30px'},0);
		$(this).siblings().find(".over_img").fadeOut(100);
	});


	$(".right_cont02 .tab li").mouseover(function () {
		$(this).addClass("over");
		$(this).siblings().removeClass("over");
	});
	
	$(".right_cont02 .tab1").mouseover(function () {
		$(".notice1").show();
		$(".notice2,.notice3,.notice4").hide();
	});
	$(".right_cont02 .tab2").mouseover(function () {
		$(".notice2").show();
		$(".notice1,.notice3,.notice4").hide();
	});
	$(".right_cont02 .tab3").mouseover(function () {
		$(".notice3").show();
		$(".notice1,.notice2,.notice4").hide();
	});
	$(".right_cont02 .tab4").mouseover(function () {
		$(".notice4").show();
		$(".notice1,.notice2,.notice3").hide();
	});
	
	
	
	$("#GNB1").mouseover(function () {
		$("#head").css("border-bottom","4px solid #419039");
		$(".gnb10").show();
		$(".gnb20,.gnb30,.gnb40,.gnb50").hide();
	});
	$("#GNB2").mouseover(function () {
		$("#head").css("border-bottom","4px solid #26a7d6");
		$(".gnb20").show();
		$(".gnb10,.gnb30,.gnb40,.gnb50").hide();
	});
	$("#GNB3").mouseover(function () {
		$("#head").css("border-bottom","4px solid #f15722");
		$(".gnb30").show();
		$(".gnb10,.gnb20,.gnb40,.gnb50").hide();
	});
	$("#GNB4").mouseover(function () {
		$("#head").css("border-bottom","4px solid #cc9900");
		$(".gnb40").show();
		$(".gnb10,.gnb20,.gnb30,.gnb50").hide();
	});
	$("#GNB5").mouseover(function () {
		$("#head").css("border-bottom","4px solid #0066b7");
		$(".gnb50").show();
		$(".gnb10,.gnb20,.gnb30,.gnb40").hide();
	});
	
	

	
	$("#head .cont").mouseenter(function () {
		$(this).css("height","318px");
	});
	$("#head .cont").mouseleave(function () {
		$(this).css("height","78px");
		$(".GNB2depth").hide();
	});
	

	

//	jQuery(function($){
//	//배너존
//	var bannerZone = $("#bannerZone").simpleHorizontalRolling({
//	 	speed: 30//작을수록 빠르다.
//	 	,start: "left"//시작방향  [left|right]
//	 	,movingWidth: 160//li width + li margin-right 이동거리  li 위드값과 오른쪽 마진을 더한 값을 지정한다.
//	 	,control:{
//	 		left: "#bannerLeft"//흐름제어 왼쪽 셀렉터
//	 		,right: "#bannerRight"//흐름제어 정지 셀렉터
//	 		,stop: "#bannerStop"//흐름제어 오른쪽 셀렉터
//	 	}
//	});
//}); 
	
});
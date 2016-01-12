/*
 * jQuery.simpleHorizontalRolling - 간단한 수평 롤링배너 플러그인
 *
 * Copyright (c) 2010 송치완 (nope0102@gmail.com)
 * 수정하든 말든 알아서...
 * 
 * Built on jQuery 1.4.2
 * http://jquery.com
 *	
 *사용예시
 *스타일 -- CSS로  안주고 걍 스크립트로 줘도되는데 스크립트 껐을 경우 보이는 모양때문에 걍 CSS로 줌..이것때문에 반쪽짜리 플러그인이되는듯..
 *<style type="text/css">
 *배너 전체 wrapper
 *#bannerZone{
 *	width: 700px;
 *	height: 40px;
 *	position: relative;
 *	padding: 5px;
 *	background-color: #DFDFDF;
 *}
 *이미지보더
 *#bannerZone #bannerStage ul li img{
 *	border: 0;
 *}
 *버튼들
 *#bannerZone #bannerControl{
 *	width: 100px;
 *	float: left;
 *}
 *롤링 돌아가는곳
 *#bannerZone #bannerStage{
 *	width: 600px;
 *	height: 40px;
 *	overflow: hidden;
 *	position: absolute;
 *	left: 100px;
 *}
 *아이템
 *#bannerZone #bannerStage ul li{
 *	float: left;
 *	margin-top: 2px;
 *	margin-right: 5px;
 *	list-style: none;
 *}
 *</style>
 *
 *마크업
 *<div id="bannerZone">
 *	<div id="bannerControl">
 *		<a href="#" id="bannerLeft1">left</a>
 *		<a href="#" id="bannerStop1">stop</a>
 *		<a href="#" id="bannerRight1">right</a>
 *		<a href="#">all</a>
 *	</div>
 *	<div id="bannerStage">
 *		<ul>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/001.jpg" width="140" /></a></li>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/002.jpg" width="140" /></a></li>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/003.jpg" width="140" /></a></li>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/004.jpg" width="140" /></a></li>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/005.jpg" width="140" /></a></li>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/006.jpg" width="140" /></a></li>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/007.jpg" width="140" /></a></li>
 *			<li><a href="http://www.google.co.kr" target="_blank"><img src="/upload/banner/008.jpg" width="140" /></a></li>
 *		</ul>
 *	</div>
 *</div>	
 *<div style="clear: both;"></div>
 *
 *스크립트
 *<script type="text/javascript">
 *$("#bannerZone0").simpleHorizontalRolling({
 *	speed: 10//속도  (작을수록 빠름)
 *	,start: "left"//시작방향  [left|right]
 *	,movingWidth: 145//li width + li margin-right 이동거리  li 위드값과 오른족 마진을 더한 값 넣어주면됨
 *	,control:{
 *		left: "#bannerLeft"//흐름제어 왼쪽 셀렉터
 *		,right: "#bannerRight"//흐름제어 정지 셀렉터
 *		,stop: "#bannerStop"//흐름제어 오른쪽 셀렉터
 *	}
 *});
 *<script>
 */          
;(function(){

	$.fn.simpleHorizontalRolling = function(option){

		var __bannerZone = this;
		var left = 0;
		var doingLeft = false;
		var doingRight = false;
		var clock;
		
		option = $.extend({
			speed: 12
			,start: "left"
			,movingWidth: 160/*li width + li margin-right*/
			,control:{
				left: "#bannerLeft"
				,right: "#bannerRight"
				,stop: "#bannerStop"
			}
		},option);
		
		function init(){
			$("ul", __bannerZone).css({
				width: function(){
					return 9999;
				}
				,position: "absolute"
			});
			
			if(option.start == "left"){
				clock = window.setInterval(doLeft, option.speed);
				doingLeft = true;
			}else if(option.start == "right"){
				clock = window.setInterval(doRight, option.speed);
				doingRight = true;
			}
		}
		
		function doLeft(){
			$("ul", __bannerZone).css("left", left--);
			if(parseInt($("ul", __bannerZone).css("left")) != 0){
				var moved = Math.abs(parseInt($("ul", __bannerZone).css("left"))) % parseInt(option.movingWidth);
			}
			if(moved == 0){
				left = left-- + parseInt(option.movingWidth);
				$("ul", __bannerZone).css("left", left);
				$("li", __bannerZone).first().remove().insertAfter($("li", __bannerZone).last());
			}
			
		}
		
		function doRight(){
			$("ul", __bannerZone).css("left", left++);
			if(parseInt($("ul", __bannerZone).css("left")) != 0){
				var moved = Math.abs(parseInt($("ul", __bannerZone).css("left"))) % parseInt(option.movingWidth);
			}
			if(moved == 1){
				left = left++ - parseInt(option.movingWidth);
				$("ul", __bannerZone).css("left", left);
				$("li", __bannerZone).last().remove().insertBefore($("li", __bannerZone).first());
			}
		}

		$(option.control.right, __bannerZone).click(function(e){
			if(doingRight)return false;
			window.clearInterval(clock);
			clock = window.setInterval(doRight, option.speed);
			doingLeft = false;
			doingRight = true;
		});

		$(option.control.left, __bannerZone).click(function(e){
			if(doingLeft)return false;
			window.clearInterval(clock);
			clock = window.setInterval(doLeft, option.speed);
			doingLeft = true;
			doingRight = false;
		});

		$(option.control.stop, __bannerZone).click(function(e){
			window.clearInterval(clock);
			doingLeft = false;
			doingRight = false;
		});

		$(__bannerZone).delegate("ul a", "mouseover focus", function(e){
			window.clearInterval(clock);
		});

		$(__bannerZone).delegate("ul a", "mouseout", function(e){
			if(doingLeft){
				clock = window.setInterval(doLeft, option.speed);
			}else if(doingRight){
				clock = window.setInterval(doRight, option.speed);
			}	
		});

		init();
				
		return this;
	};
	
})(jQuery);          
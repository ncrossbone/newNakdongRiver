$(".map_layout").ready(function() {
	dsnMap.init();
});

var dsnMap = {
	pointList: []

	, num: null
	, timeout: null
	, time: 5000 // 5초
	
	// init
	, init: function() {
		this.getRiverData();
	}

	// 데이터 불러오기
	, getRiverData: function() {
		var that = this;
		
		$.ajax({
			url: './db/dsnMapData1.json'
			, type: 'get'
			, contentType: "charset=euc-kr"
			, async: false
			, dataType: 'json'
			, success: function(data) {
				// bod, tp 데이터를 나란히 정렬
				var bod = [];
				var tp = [];
				
				var d = data.result;
				
				for(var i in d) {
					var n = d[i];
					
					var symbol_bod = that.getSymbol('BOD', n.BOD.toFixed(2));
					//var symbol_tp = that.getSymbol('TP', n.BOD.toFixed(3));
					var symbol_tp = that.getSymbol('TP', n.TP.toFixed(3)); // khLee 20150417 수정
					
					bod.push({
						'PT_NO' : n.PT_NO,
						'PT_NM' : n.PT_NM,
						'WMYR': n.WMYR,
						'WMOD': n.WMOD,
						'TYPE' : 'BOD',
						'VALUE' : n.BOD.toFixed(2),
						'DATA' : [ n.BOD.toFixed(2), n.TP.toFixed(3) ],
						'POINT': symbol_bod.point,
						'RIVER': symbol_bod.river,
						'TABLE': symbol_bod.table
					});
					
					tp.push({
						'PT_NO' : n.PT_NO,
						'PT_NM' : n.PT_NM,
						'WMYR': n.WMYR,
						'WMOD': n.WMOD,
						'TYPE' : 'TP',
						'VALUE' : n.TP.toFixed(3),
						'DATA' : [ n.BOD.toFixed(2), n.TP.toFixed(3) ],
						'POINT': symbol_tp.point,
						'RIVER': symbol_tp.river,
						'TABLE': symbol_tp.table
						
					});
				}

				that.pointList = bod.concat(tp);
				
				// 애니메이션 start
				that.num = 0;
				that.animate();
			}
		});
	}
	
	//  애니메이션 start!!!!
	, animate: function() {
		var that = this;
		
		// 맨 끝까지 갔으면 다시 처음으로 돌아가기
		if(that.num == that.pointList.length) {
			that.num = 0;
		} 
		
		// 순서대로 진행
		else {
			var now = that.pointList[that.num];
			
			// 지점포인트 이미지 변경
			var points = $(".remark li[id*='remark_']");
			points.css("background", "url(/nakdong/resources/images/main/map/spot.png) 0px 0px no-repeat");
			
			var point = $(".remark li#remark_" + now.PT_NO);
			point.css("background", "url(" + now.POINT + ") 0px 0px no-repeat");
			
			// 하천 이미지 변경
			var rivers = $(".branch li[id*='branch_']");
			rivers.empty();
			
			var river = $(".branch li#branch_" + now.PT_NO);
			river.html('<img src="/nakdong/resources/images/main/map/' + now.PT_NO + '_' + now.RIVER + '.png">');
			
			// table 설정
			$("#valName").html(now.PT_NM + "<br/>(" + now.WMYR + "년 " + now.WMOD + "월)");
			$("#valBOD").html(now.DATA[0]).attr("class", (now.TYPE == 'BOD') ? now.TABLE : '');
			$("#valTP").html(now.DATA[1]).attr("class", (now.TYPE == 'TP') ? now.TABLE : '');
			//console.log("siteName : " + now.PT_NM + ", item : " + now.TYPE + ", class : " + now.TABLE);
			that.num++;
		}
		
		that.timeout = setTimeout(function() {
			that.animate();
		}, that.time);	
	}
	
	// 수치별 아이콘 이미지 가져오기
	, getSymbol: function(type, value) {
		var num = 0; 
		
		// 지점포인트에 사용할 이미지 리스트
		var pointList = ['/nakdong/resources/images/main/map/remarks_01.png'
	               					  , '/nakdong/resources/images/main/map/remarks_02.png' 
	               					  , '/nakdong/resources/images/main/map/remarks_03.png' 
	               					  , '/nakdong/resources/images/main/map/remarks_04.png' 
	               					  , '/nakdong/resources/images/main/map/remarks_05.png' 
	               					  , '/nakdong/resources/images/main/map/remarks_06.png' 
	               					  , '/nakdong/resources/images/main/map/remarks_07.png'];
		
		// 하천에 사용할 이미지 번호
		var riverList = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

		// table class에 사용할 class명
		var classList = ['color1'
		                 			, 'color2'
		                 			, 'color3'
		                 			, 'color4'
		                 			, 'color5'
		                 			, 'color6'
		                 			, 'color7'];
		
		switch(type) {
			case 'BOD':
				if(value <= 1) num = 0;
				else if(value > 1 && value <= 2) num = 1;
				else if(value > 2 && value <= 3) num = 2;
				else if(value > 3 && value <= 5) num = 3;
				else if(value > 5 && value <= 8) num = 4;
				else if(value > 8 && value <= 10) num = 5;
				else if(value > 10) num = 6;
				
				break;
				
			case 'TP':
				if(value <= 0.02) num = 0;
				else if(value > 0.02 && value <= 0.04) num = 1;
				else if(value > 0.04 && value <= 0.1) num = 2;
				else if(value > 0.1 && value <= 0.2) num = 3;
				else if(value > 0.2 && value <= 0.3) num = 4;
				else if(value > 0.3 && value <= 0.5) num = 5;
				else if(value > 0.5) num = 6;
				
				break;
		}
		//console.log("type : " + type + "value : " + value + ", num : " + num);
		return {'point': pointList[num], 'river': riverList[num], 'table': classList[num]};	
	}
	
};
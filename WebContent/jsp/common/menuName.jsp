<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<%
String url = request.getRequestURL().toString();
String urlArray[] = url.split("/");
String urlLast = urlArray[urlArray.length - 1];

urlLast = urlLast.replace(".do", "");

String mainMenu = "";
String subMenu = "";

if(urlLast.equals("dbStatus")) {
	mainMenu = "유역현황";
	subMenu = "권역별현황";
}
else if(urlLast.equals("dbLand")) {
	mainMenu = "유역현황";
	subMenu = "토지이용현황";
}
else if(urlLast.equals("dbRiver")) {
	mainMenu = "유역현황";
	subMenu = "하천유량";
}
else if(urlLast.equals("wuStatus")) {
	mainMenu = "물이용현황";
	subMenu = "물이용현황";
}
else if(urlLast.equals("wuSewer")) {
	mainMenu = "물이용현황";
	subMenu = "하수도통계자료";
}
else if(urlLast.equals("wuFarm")) {
	mainMenu = "물이용현황";
	subMenu = "농촌용수현황";
}
else if(urlLast.equals("weStatus")) {
	mainMenu = "수질";
	subMenu = "현황";
}
else if(urlLast.equals("weWater")) {
	mainMenu = "수질";
	subMenu = "좋은물현황";
}
else if(urlLast.equals("etfStatus")) {
	mainMenu = "환경기초시설";
	subMenu = "현황";
}
else if(urlLast.equals("wpsStatus")) {
	mainMenu = "수질오염원부하량";
	subMenu = "현황";
}
else if(urlLast.equals("wpsDischarge")) {
	mainMenu = "수질오염원부하량";
	subMenu = "배출업소현황";
}
else if(urlLast.equals("plLoad")) {
	mainMenu = "수질오염원부하량";
	subMenu = "발생/배출 부하량";
}
else if(urlLast.equals("plRate")) {
	mainMenu = "수질오염원부하량";
	subMenu = "오염기여율";
}
else if(urlLast.equals("plCompare")) {
	mainMenu = "수질오염원부하량";
	subMenu = "지역 비교";
}
else if(urlLast.equals("plDevelop")) {
	mainMenu = "수질오염원부하량";
	subMenu = "지역개발 부하량";
}
else if(urlLast.equals("esStatus")) {
	mainMenu = "환경기초조사사업";
	subMenu = "현황";
}
else if(urlLast.equals("admin")) {
	mainMenu = "관리자모드";
	subMenu = "측정자료";
}
else if(urlLast.equals("dbRainRiver")) {
	mainMenu = "수문/기상";
	subMenu = "자료현황";
}
%>

HOME &gt; <%=mainMenu%> &gt; <b><%=subMenu%></b>
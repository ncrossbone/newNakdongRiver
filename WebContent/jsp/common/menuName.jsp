<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<%
String url = request.getRequestURL().toString();
String urlArray[] = url.split("/");
String urlLast = urlArray[urlArray.length - 1];

urlLast = urlLast.replace(".do", "");

String mainMenu = "";
String subMenu = "";

if(urlLast.equals("dbStatus")) {
	mainMenu = "������Ȳ";
	subMenu = "�ǿ�����Ȳ";
}
else if(urlLast.equals("dbLand")) {
	mainMenu = "������Ȳ";
	subMenu = "�����̿���Ȳ";
}
else if(urlLast.equals("dbRiver")) {
	mainMenu = "������Ȳ";
	subMenu = "��õ����";
}
else if(urlLast.equals("wuStatus")) {
	mainMenu = "���̿���Ȳ";
	subMenu = "���̿���Ȳ";
}
else if(urlLast.equals("wuSewer")) {
	mainMenu = "���̿���Ȳ";
	subMenu = "�ϼ�������ڷ�";
}
else if(urlLast.equals("wuFarm")) {
	mainMenu = "���̿���Ȳ";
	subMenu = "���̿����Ȳ";
}
else if(urlLast.equals("weStatus")) {
	mainMenu = "����";
	subMenu = "��Ȳ";
}
else if(urlLast.equals("weWater")) {
	mainMenu = "����";
	subMenu = "��������Ȳ";
}
else if(urlLast.equals("etfStatus")) {
	mainMenu = "ȯ����ʽü�";
	subMenu = "��Ȳ";
}
else if(urlLast.equals("wpsStatus")) {
	mainMenu = "�������������Ϸ�";
	subMenu = "��Ȳ";
}
else if(urlLast.equals("wpsDischarge")) {
	mainMenu = "�������������Ϸ�";
	subMenu = "���������Ȳ";
}
else if(urlLast.equals("plLoad")) {
	mainMenu = "�������������Ϸ�";
	subMenu = "�߻�/���� ���Ϸ�";
}
else if(urlLast.equals("plRate")) {
	mainMenu = "�������������Ϸ�";
	subMenu = "�����⿩��";
}
else if(urlLast.equals("plCompare")) {
	mainMenu = "�������������Ϸ�";
	subMenu = "���� ��";
}
else if(urlLast.equals("plDevelop")) {
	mainMenu = "�������������Ϸ�";
	subMenu = "�������� ���Ϸ�";
}
else if(urlLast.equals("esStatus")) {
	mainMenu = "ȯ�����������";
	subMenu = "��Ȳ";
}
else if(urlLast.equals("admin")) {
	mainMenu = "�����ڸ��";
	subMenu = "�����ڷ�";
}
else if(urlLast.equals("dbRainRiver")) {
	mainMenu = "����/���";
	subMenu = "�ڷ���Ȳ";
}
%>

HOME &gt; <%=mainMenu%> &gt; <b><%=subMenu%></b>
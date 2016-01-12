<%@ page import="java.io.*" %>

<%@ page import="com.util.ConvertImage" %>

<%
	request.setCharacterEncoding("EUC-KR");
	response.setHeader("Content-Disposition", "attachment;filename=" + new String("chart".getBytes("euc-kr")) + ";");
	
	String svgTag = request.getParameter("svg");
	
	ConvertImage convertImage = new ConvertImage();
	String fileName = convertImage.getImageStream(svgTag);
	
	String jsonResult = "{ \'fileName\' : \'" + fileName + "\'}";
	PrintWriter printWriter = response.getWriter();
	response.setContentType("text/json"); 
	response.setHeader("Cache-Control", "no-cache"); 
	printWriter.println(jsonResult); 
	printWriter.close();
%>
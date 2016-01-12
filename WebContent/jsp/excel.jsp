<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR"%>

<%
	request.setCharacterEncoding("EUC-KR");
	response.setContentType("text/html;charset=EUC-KR");

	response.setHeader("Content-Disposition", "attachment; filename=excel.xls"); 
	response.setHeader("Content-Description", "JSP Generated Data"); 
%>

<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equive="content-type" content="text/html; charset=euc-kr" /> 
<title>excel</title>
</head>
<body>
	
<%=request.getParameter("excel")%>

<script>
//self.close();
</script>

</body>
</html>
<%@ page contentType="application;" %>
<%@ page import="java.util.*,java.io.*,java.sql.*,java.text.*"%><%
request.setCharacterEncoding("UTF-8");

String filename = request.getParameter("filename");
filename = new String(filename.getBytes("UTF-8"),"8859_1");

ServletContext context = getServletContext();
String folder = "/resources/download";
String realFolder = context.getRealPath(folder);

//----설문조사 다운로드 추가 SS
String filepath = request.getParameter("filePath") == null ? "" :  request.getParameter("filePath");

if( filepath.length() > 0){  //filePath 넘겨받아서 처리
	folder = filepath;  // 설문조사 다운로드 경로 적용
}
//----설문조사 다운로드 추가 EE

// System.out.println(">>>>>>>"+realFolder + "/" + filename);

File file = new File(realFolder + "/" + filename);
byte b[] = new byte[4096];
response.setHeader("Content-Disposition", "attachment;filename=" + filename + ";");

if(file.isFile()) {
	out.clear();
	out=pageContext.pushBody();
	
	BufferedInputStream fin = null;
	BufferedOutputStream outs = null;
	try {
		fin = new BufferedInputStream(new FileInputStream(file));
		outs = new BufferedOutputStream(response.getOutputStream());
		
		int read = 0;
		
		while ((read = fin.read(b)) != -1){
			outs.write(b,0,read);
		}
	} catch(IOException e) {
		e.printStackTrace();
	}finally{
		outs.flush();
		outs.close();
		fin.close();
	}
}
%>

package com.board.web;


import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;






import org.apache.catalina.startup.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartRequest;
import org.springframework.web.servlet.ModelAndView;

import com.login.model.TuserVO;
import com.board.model.BoardVO;
import com.board.service.BoardService;
import com.util.TmdlmsUtil;

@Controller
@RequestMapping(value="/board/", method={RequestMethod.GET, RequestMethod.POST})
public class BoardController {
	
    @Autowired
	BoardService BoardService;
	
	//글목록
	@RequestMapping(value={"/", "board_list.json"})
	public String board_list(HttpServletRequest request, HttpServletResponse response 
			,@RequestParam(value="BOARD_NO", required=false) String BOARD_NO
			,@RequestParam(value="START_NO", required=false) String START_NO
			,@RequestParam(value="END_NO", required=false) String END_NO
			,@RequestParam(value="SEARCH_TYPE", required=false) String SEARCH_TYPE
			,@RequestParam(value="SEARCH_TEXT", required=false) String SEARCH_TEXT
			,@RequestParam(value="SEARCH_YEAR", required=false) String SEARCH_YEAR
			,Model model ) {
		BoardVO boardVo = new  BoardVO();
		
		if(BOARD_NO ==null || "".equals(BOARD_NO)) BOARD_NO="1";
		try{
		model.addAttribute("result",  BoardService.board_list(BOARD_NO, START_NO, END_NO, SEARCH_TYPE, SEARCH_TEXT,SEARCH_YEAR ));
		model.addAttribute("cnt", BoardService.board_total_cnt(BOARD_NO));
		if(BOARD_NO != null &&(BOARD_NO.equals("3")||BOARD_NO.equals("4"))){
			model.addAttribute("resYear",BoardService.board_res_year(BOARD_NO));
		}
		}catch(Exception e){
			System.out.println(e.toString()+"/"+e.getMessage());
		}
		return "board_list";
	}
	
	
	@RequestMapping(value={"/", "board_main.json"})
	public String board_main(HttpServletRequest request, HttpServletResponse response 
			,@RequestParam(value="START_NO", required=false) String START_NO
			,@RequestParam(value="END_NO", required=false) String END_NO
			,Model model ) {
		BoardVO boardVo = new  BoardVO();
		
		
		try{
			for(int i=1;i<5;i++){
				model.addAttribute("result"+i,  BoardService.board_list(i+"", START_NO, END_NO, null, null,null ));
			}
		}catch(Exception e){
			System.out.println(e.toString()+"/"+e.getMessage());
		}
		return "board_list";
	}
	
	
	//글입력
	@RequestMapping(value={"/","board_insert.json"} )
	@ResponseBody
	public String board_insert(
			HttpServletRequest request,
			//MultipartRequest multipartRequest,
			 HttpServletResponse response
			,@RequestParam(value="BOARD_NO"      , required=false) String   BOARD_NO         
			,@RequestParam(value="BOARD_SEQ"     , required=false) String   BOARD_SEQ        
			,@RequestParam(value="BOARD_TITLE"   , required=false) String   BOARD_TITLE      
			,@RequestParam(value="RES_OWNER"     , required=false) String   RES_OWNER        
			,@RequestParam(value="RES_START_DATE", required=false) String   RES_START_DATE   
			,@RequestParam(value="RES_END_DATE"  , required=false) String   RES_END_DATE     
			,@RequestParam(value="RES_COST"      , required=false) String   RES_COST         
			,@RequestParam(value="RES_ORG"       , required=false) String   RES_ORG          
			,@RequestParam(value="RES_AREA"      , required=false) String   RES_AREA         
			,@RequestParam(value="RES_YEAR"      , required=false) String   RES_YEAR         
			,@RequestParam(value="BOARD_CONTENT" , required=false) String   BOARD_CONTENT    
			,@RequestParam(value="FILE_NAME"     , required=false) String   FILE_NAME        
			,@RequestParam(value="REAL_FILE_PATH", required=false) String   REAL_FILE_PATH   
			,@RequestParam(value="READ_CNT"      , required=false) String   READ_CNT         
			,@RequestParam(value="USE_YN"        , required=false) String   USE_YN           
			,@RequestParam(value="FILE_NAME1"        , required=false)   MultipartFile file
			,Model model) throws Exception{
		try{
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
//		System.out.println("XXXXXXXXXXXX"+file.getOriginalFilename()); 
		//start
		//MultipartFile file = multipartRequest.getFile("upload");  //뷰에서 form으로 넘어올 때 name에 적어준 이름입니다.
		/*​

		Calendar cal = Calendar.getInstance();
		String fileName = file.getOriginalFilename();
		String fileType = fileName.substring(fileName.lastIndexOf("."), fileName.length());
		String replaceName = cal.getTimeInMillis() + fileType; ​
		 
System.out.println("XXXXXXXXXXX1");   
		String path = "d:/myData/file/upload";  ​
		 
		fileUpload(file, path, replaceName);
		*/
		//end
		BoardVO boardVo = new BoardVO();

//System.out.println("XXXXXXXXXXX2");
		boardVo.setBOARD_NO(         BOARD_NO         );
		boardVo.setBOARD_SEQ(        BOARD_SEQ        );
		boardVo.setBOARD_TITLE(      BOARD_TITLE      );
		boardVo.setRES_OWNER(        RES_OWNER        );
		boardVo.setRES_START_DATE(   RES_START_DATE   );
		boardVo.setRES_END_DATE(     RES_END_DATE     );
		boardVo.setRES_COST(         RES_COST         );
		boardVo.setRES_ORG(          RES_ORG          );
		boardVo.setRES_AREA(         RES_AREA         );
		boardVo.setRES_YEAR(         RES_YEAR         );
		boardVo.setBOARD_CONTENT(    BOARD_CONTENT    );
		boardVo.setFILE_NAME(        FILE_NAME        );
		boardVo.setREAL_FILE_PATH(   REAL_FILE_PATH   );
		boardVo.setREAD_CNT(         READ_CNT         );
		boardVo.setUSE_YN(           USE_YN           );
//System.out.println("XXXXXXXXXXX3");		
		TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
		
		String SESSION_USER_ID = tuserVO.getUSER_ID();
//		String SESSION_USER_NM = tuserVO.getUSER_NM();

	int ret =0;
		try{
		ret = BoardService.board_insert(boardVo);
		}catch(Exception e){
			System.out.println(e.toString()+"/"+e.getMessage());
		}
		if(ret > 0){
			
			out.print("success");
		}else{
			out.print("fail");
		}
		}catch(Exception e){
			System.out.println(e.toString()+"/"+e.getMessage());
		}
		return null;
	}
	
	
	
	//글입력
		@RequestMapping(value={"/","board_insert1.json"}, method = RequestMethod.POST )
		@ResponseBody
		public String  board_insert1(
				Locale locale, Model model,HttpServletRequest request
				,HttpServletResponse response) throws Exception{
			MultipartHttpServletRequest multipart =null;
			response.setContentType("text/html; charset=UTF-8");
//			PrintWriter out1 = response.getWriter();
			String filename = "";
			String filenameFront = "";
			String filenameExt = "";
			String convFilename = "";
			
			BoardVO boardVo 	= new BoardVO();
			String BOARD_NO        = null;
			String BOARD_SEQ       = null;
			String BOARD_TITLE     = null;
			String RES_OWNER       = null;
			String RES_START_DATE  = null;
			String RES_END_DATE    = null;
			String RES_COST        = null;
			String RES_ORG         = null;
			String RES_AREA        = null;
			String RES_YEAR        = null;
			String BOARD_CONTENT   = null;
			String FILE_NAME       = null;
			String REAL_FILE_PATH  = null;
			String READ_CNT        = null;
			String USE_YN          = null;
			
			
			try{
			  
				  FileSystemResource uploadDir =	new FileSystemResource("D:\\myData\\eGovFrameDev-2.7.0_summary (2).vol1\\workspace\\newNakdongRiver\\WebContent\\upload");
				  multipart = (MultipartHttpServletRequest) request;
				  MultipartFile file = multipart.getFile("FILE_NAME1");
				  if(!file.isEmpty()) {
					   
					   filename = file.getOriginalFilename();
					   filename = new String(filename.getBytes("8859_1"),"KSC5601");
					   filenameFront = filename.substring(filename.lastIndexOf("."));
					   filenameExt = filename.substring(filename.lastIndexOf("."),filename.length());
					   convFilename = "";
System.out.println("OriginalFilename : "+ filename);
System.out.println("OriginalFilename front : "+ filenameFront);
System.out.println("OriginalFilename ext : {}"+ filenameExt);
System.out.println("uploadDir : {}"+ uploadDir.getPath());
					   
					   try {
					    if(file.getSize() > 0){
						     Calendar cal = Calendar.getInstance();
						     File out = new File(uploadDir.getPath() + "/" + cal.getTimeInMillis() + filenameExt);
						     FileCopyUtils.copy(file.getBytes(), out);
						     convFilename = out.getName();
System.out.println("ConvertFilename : {}"+out.getName());
					    }
					   } catch (IOException e) {
					    e.printStackTrace();
					   }
					  
					  }
			
			
			if(multipart.getParameter("BOARD_NO")       != null) BOARD_NO       = multipart.getParameter("BOARD_NO")       ;
			if(multipart.getParameter("BOARD_SEQ")      != null) BOARD_SEQ      = multipart.getParameter("BOARD_SEQ")      ;
			if(multipart.getParameter("BOARD_TITLE")    != null) BOARD_TITLE    = multipart.getParameter("BOARD_TITLE")    ;
			if(multipart.getParameter("RES_OWNER")      != null) RES_OWNER      = multipart.getParameter("RES_OWNER")      ;
			if(multipart.getParameter("RES_START_DATE") != null) RES_START_DATE = multipart.getParameter("RES_START_DATE") ;
			if(multipart.getParameter("RES_END_DATE")   != null) RES_END_DATE   = multipart.getParameter("RES_END_DATE")   ;
			if(multipart.getParameter("RES_COST")       != null) RES_COST       = multipart.getParameter("RES_COST")       ;
			if(multipart.getParameter("RES_ORG")        != null) RES_ORG        = multipart.getParameter("RES_ORG")        ;
			if(multipart.getParameter("RES_AREA")       != null) RES_AREA       = multipart.getParameter("RES_AREA")       ;
			if(multipart.getParameter("RES_YEAR")       != null) RES_YEAR       = multipart.getParameter("RES_YEAR")       ;
			if(multipart.getParameter("BOARD_CONTENT")  != null) BOARD_CONTENT  = multipart.getParameter("BOARD_CONTENT")  ;
			if(multipart.getParameter("FILE_NAME")      != null) FILE_NAME      = multipart.getParameter("FILE_NAME")      ;
			if(multipart.getParameter("REAL_FILE_PATH") != null) REAL_FILE_PATH = multipart.getParameter("REAL_FILE_PATH") ;
			if(multipart.getParameter("READ_CNT")       != null) READ_CNT       = multipart.getParameter("READ_CNT")       ;
			if(multipart.getParameter("USE_YN")         != null) USE_YN         = multipart.getParameter("USE_YN")         ;
			if(convFilename!= null && !"".equals(convFilename))boardVo.setFILE_NAME(filename);
			if(convFilename!= null && !"".equals(convFilename))boardVo.setREAL_FILE_PATH(convFilename);
			/*
			boardVo.setBOARD_NO(         BOARD_NO         );
			boardVo.setBOARD_SEQ(        BOARD_SEQ        );
			boardVo.setBOARD_TITLE(      BOARD_TITLE      );
			boardVo.setRES_OWNER(        RES_OWNER        );
			boardVo.setRES_START_DATE(   RES_START_DATE   );
			boardVo.setRES_END_DATE(     RES_END_DATE     );
			boardVo.setRES_COST(         RES_COST         );
			boardVo.setRES_ORG(          RES_ORG          );
			boardVo.setRES_AREA(         RES_AREA         );
			boardVo.setRES_YEAR(         RES_YEAR         );
			boardVo.setBOARD_CONTENT(    BOARD_CONTENT    );
			boardVo.setREAD_CNT(         READ_CNT         );
			boardVo.setUSE_YN(           USE_YN           );
			*/
			if(BOARD_NO       != null) boardVo.setBOARD_NO(         new String(BOARD_NO      .getBytes("8859_1"),"KSC5601")   );
			if(BOARD_SEQ      != null) boardVo.setBOARD_SEQ(        new String(BOARD_SEQ     .getBytes("8859_1"),"KSC5601")   );
			if(BOARD_TITLE    != null) boardVo.setBOARD_TITLE(      new String(BOARD_TITLE   .getBytes("8859_1"),"KSC5601")   );
			if(RES_OWNER      != null) boardVo.setRES_OWNER(        new String(RES_OWNER     .getBytes("8859_1"),"KSC5601")   );
			if(RES_START_DATE != null) boardVo.setRES_START_DATE(   new String(RES_START_DATE.getBytes("8859_1"),"KSC5601")   );
			if(RES_END_DATE   != null) boardVo.setRES_END_DATE(     new String(RES_END_DATE  .getBytes("8859_1"),"KSC5601")   );
			if(RES_COST       != null) boardVo.setRES_COST(         new String(RES_COST      .getBytes("8859_1"),"KSC5601")   );
			if(RES_ORG        != null) boardVo.setRES_ORG(          new String(RES_ORG       .getBytes("8859_1"),"KSC5601")   );
			if(RES_AREA       != null) boardVo.setRES_AREA(         new String(RES_AREA      .getBytes("8859_1"),"KSC5601")   );
			if(RES_YEAR       != null) boardVo.setRES_YEAR(         new String(RES_YEAR      .getBytes("8859_1"),"KSC5601")   );
			if(BOARD_CONTENT  != null) boardVo.setBOARD_CONTENT(    new String(BOARD_CONTENT .getBytes("8859_1"),"KSC5601")   );
			if(READ_CNT       != null) boardVo.setREAD_CNT(         new String(READ_CNT      .getBytes("8859_1"),"KSC5601")   );
			if(USE_YN         != null) boardVo.setUSE_YN(           new String(USE_YN        .getBytes("8859_1"),"KSC5601")   );
			
			

	//System.out.println("XXXXXXXXXXX3");		
			TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
			
			String SESSION_USER_ID = tuserVO.getUSER_ID();
//			String SESSION_USER_NM = tuserVO.getUSER_NM();

		int ret =0;
			try{
				if(boardVo.getBOARD_SEQ()!= null && boardVo.getBOARD_SEQ().length() > 0){
					ret = BoardService.board_modify(boardVo);
				}else{
					ret = BoardService.board_insert(boardVo);
				}
			}catch(Exception e){
				System.out.println(e.toString()+"/"+e.getMessage());
			}
			if(ret > 0){
				
	//			out1.print("success");
			}else{
	//			out1.print("fail");
			}
			}catch(Exception e){
	//			System.out.println(e.toString()+"/"+e.getMessage());
			}
			if("1".equals(BOARD_NO)){
				//return "redirect:" + "/board/warterBrd.do";
				//return  "/board/warterBrd.do";
				return "<script language='javascript'>document.location.href='/nakdong/waterBrd.do';</script>";
		
			}else if("2".equals(BOARD_NO)){
				return "<script language='javascript'>document.location.href='/nakdong/hydroBrd.do';</script>";
			}else if("3".equals(BOARD_NO)){
				return "<script language='javascript'>document.location.href='/nakdong/envBrd.do';</script>";
			}else if("4".equals(BOARD_NO)){	
				return "<script language='javascript'>document.location.href='/nakdong/envBrd2.do';</script>";
			}else{
				return null;
			}
		}
		
	
	//글상세보기
	@RequestMapping(value={"/","board_view.json"})
	public String selectsublist(@RequestParam(value="BOARD_SEQ", required=false) String BOARD_SEQ
			,HttpServletResponse response,Model model) throws Exception{
		response.setContentType("text/html; charset=UTF-8");
				
		if(BOARD_SEQ != null){
			//조회수 증가 
			BoardService.board_count(BOARD_SEQ);
		}
		model.addAttribute("result", BoardService.board_view(BOARD_SEQ));
		
		return "board_view";
	}
	
	//글수정
	@RequestMapping(value={"/","selectmodify.json"})
	public String selectmodify(
			 @RequestParam(value="BOARD_NO"      , required=false) String   BOARD_NO         
			,@RequestParam(value="BOARD_SEQ"     , required=false) String   BOARD_SEQ        
			,@RequestParam(value="BOARD_TITLE"   , required=false) String   BOARD_TITLE      
			,@RequestParam(value="RES_OWNER"     , required=false) String   RES_OWNER        
			,@RequestParam(value="RES_START_DATE", required=false) String   RES_START_DATE   
			,@RequestParam(value="RES_END_DATE"  , required=false) String   RES_END_DATE     
			,@RequestParam(value="RES_COST"      , required=false) String   RES_COST         
			,@RequestParam(value="RES_ORG"       , required=false) String   RES_ORG          
			,@RequestParam(value="RES_AREA"      , required=false) String   RES_AREA         
			,@RequestParam(value="RES_YEAR"      , required=false) String   RES_YEAR         
			,@RequestParam(value="BOARD_CONTENT" , required=false) String   BOARD_CONTENT    
			,@RequestParam(value="FILE_NAME"     , required=false) String   FILE_NAME        
			,@RequestParam(value="REAL_FILE_PATH", required=false) String   REAL_FILE_PATH   
			,@RequestParam(value="READ_CNT"      , required=false) String   READ_CNT         
			,@RequestParam(value="USE_YN"        , required=false) String   USE_YN        
			,Model model) throws Exception{
		BoardVO boardVo = new BoardVO();
		boardVo.setBOARD_NO(         BOARD_NO         );
		boardVo.setBOARD_SEQ(        BOARD_SEQ        );
		boardVo.setBOARD_TITLE(      BOARD_TITLE      );
		boardVo.setRES_OWNER(        RES_OWNER        );
		boardVo.setRES_START_DATE(   RES_START_DATE   );
		boardVo.setRES_END_DATE(     RES_END_DATE     );
		boardVo.setRES_COST(         RES_COST         );
		boardVo.setRES_ORG(          RES_ORG          );
		boardVo.setRES_AREA(         RES_AREA         );
		boardVo.setRES_YEAR(         RES_YEAR         );
		boardVo.setBOARD_CONTENT(    BOARD_CONTENT    );
		boardVo.setFILE_NAME(        FILE_NAME        );
		boardVo.setREAL_FILE_PATH(   REAL_FILE_PATH   );
		boardVo.setREAD_CNT(         READ_CNT         );
		boardVo.setUSE_YN(           USE_YN           );
		
		BoardService.board_modify(boardVo);		
		
		model.addAttribute("result", BoardService.board_modify(boardVo));
		
		return null;
	}
	
	//글 삭제
	@RequestMapping(value={"/","deleteBoard.json"})
	public String deleteBoard(HttpServletRequest request, HttpServletResponse response
			,@RequestParam(value="BOARD_SEQ", required=false) String BOARD_SEQ
			,Model model) throws Exception{
		
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		int ret = BoardService.board_delete(BOARD_SEQ);
		
		if(ret > 0){
			
			out.print("success");
		}else{
			out.print("fail");
		}
			
		return null;
	}
	
	@RequestMapping(value ="/fileUploadAjax")
	@ResponseBody
	 public String fileUploadAjax(MultipartRequest multipartRequest) throws IOException{
	  MultipartFile file = multipartRequest.getFile("upload");  //뷰에서 form으로 넘어올 때 name에 적어준 이름입니다.​
	 
	  Calendar cal = Calendar.getInstance();
	  String fileName = file.getOriginalFilename();
	  String fileType = fileName.substring(fileName.lastIndexOf("."), fileName.length());
	  String replaceName = cal.getTimeInMillis() + fileType;  //파일 이름의 중복을 막기 위해서 이름을 재설정합니다.​
	 
	  
	  String path = "d:/myData/file/upload";  //제 바탕화면의 upload 폴더라는 경로입니다. 자신의 경로를 쓰세요.​
	 
	  fileUpload(file, path, replaceName);
	  return replaceName;
	 }
	
	public static void fileUpload(MultipartFile fileData, String path, String fileName) throws IOException {
		  String originalFileName = fileData.getOriginalFilename();
		  String contentType = fileData.getContentType();
		  long fileSize = fileData.getSize();
		/*
		  System.out.println("file Info");
		  System.out.println("fileName " + fileName);
		  System.out.println("originalFileName :" + originalFileName);
		  System.out.println("contentType :" + contentType);
		  System.out.println("fileSize :" + fileSize);
		*/
		  InputStream is = null;
		  OutputStream out = null;
		  try {
		   if (fileSize > 0) {
		    is = fileData.getInputStream();
		    File realUploadDir = new File(path);
		    if (!realUploadDir.exists()) {             //경로에 폴더가 존재하지 않으면 생성합니다.
		     realUploadDir.mkdirs();
		    }
		    out = new FileOutputStream(path +"/"+ fileName);
		    FileCopyUtils.copy(is, out);            //InputStream에서 온 파일을 outputStream으로 복사
		   }else{
		    new IOException("잘못된 파일을 업로드 하셨습니다.");
		   }
		  } catch (IOException e) {
		   e.printStackTrace();
		   new IOException("파일 업로드에 실패하였습니다.");
		  }finally{
		   if(out != null){out.close();}
		   if(is != null){is.close();}
		  }
		 }
		
	
}

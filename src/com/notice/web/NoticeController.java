package com.notice.web;


import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;






import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.login.model.TuserVO;
import com.notice.model.NoticeVO;
import com.notice.service.NoticeService;
import com.util.TmdlmsUtil;

@Controller
@RequestMapping(value="/notice/", method={RequestMethod.GET, RequestMethod.POST})
public class NoticeController {
	
    @Autowired
	NoticeService NoticeService;
	
	//글목록
	@RequestMapping(value={"/", "abcdefg.json"})
	public String abcdefg(Model model) {
		model.addAttribute("result", NoticeService.USER_test2());
		return "/notice.do";
	}

	//글입력
	@RequestMapping(value={"/","notice_insert.json"})
	public String admin_insert(HttpServletRequest request, HttpServletResponse response
			,@RequestParam(value="NOTICE_CODE", required=false) String NOTICE_CODE
			,@RequestParam(value="NOTICE_TITLE", required=false) String NOTICE_TITLE
			,@RequestParam(value="NOTICE_CONTENTS", required=false) String NOTICE_CONTENTS
			,@RequestParam(value="USER_YN", required=false) String USER_YN
			,Model model) throws Exception{
		
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		NoticeVO NoticeVO = new NoticeVO();
		NoticeVO.setNOTICE_CODE(NOTICE_CODE);
		NoticeVO.setNOTICE_TITLE(NOTICE_TITLE);
		NoticeVO.setNOTICE_CONTENTS(NOTICE_CONTENTS);
		NoticeVO.setUSER_YN(USER_YN);
		
		TuserVO tuserVO = new TmdlmsUtil().getSessionUserManage(request);
		
		String SESSION_USER_ID = tuserVO.getUSER_ID();
//		String SESSION_USER_NM = tuserVO.getUSER_NM();

		NoticeVO.setUPDTAE_USER_ID(SESSION_USER_ID);

		int ret = NoticeService.notice_insert(NoticeVO);
		
		if(ret > 0){
			
			out.print("success");
		}else{
			out.print("fail");
		}
		return null;
	}
	
	//글상세보기
	@RequestMapping(value={"/","selectsublist.json"})
	public String selectsublist(@RequestParam(value="NOTICE_CODE", required=false) String NOTICE_CODE
			,HttpServletResponse response,Model model) throws Exception{
		response.setContentType("text/html; charset=UTF-8");
				
		if(NOTICE_CODE != null){
			//조회수 증가 
			NoticeService.selectupcount(NOTICE_CODE);
		}
		model.addAttribute("result", NoticeService.selectsublist(NOTICE_CODE));
		
		return "/notice_listview.do";
	}
	
	//글수정
	@RequestMapping(value={"/","selectmodify.json"})
	public String selectmodify(@RequestParam(value="NOTICE_CODE", required=false) String NOTICE_CODE
			,@RequestParam(value="NOTICE_TITLE", required=false) String NOTICE_TITLE
			,@RequestParam(value="USER_YN", required=false) String USER_YN
			,@RequestParam(value="FILE_PATH", required=false) String FILE_PATH
			,@RequestParam(value="NOTICE_CONTENTS", required=false) String NOTICE_CONTENTS
			,Model model) throws Exception{
		NoticeVO NoticeVO = new NoticeVO();
		NoticeVO.setNOTICE_CODE(NOTICE_CODE);
		NoticeVO.setNOTICE_TITLE(NOTICE_TITLE);
		NoticeVO.setUSER_YN(USER_YN);
		NoticeVO.setFILE_PATH(FILE_PATH);
		NoticeVO.setNOTICE_CONTENTS(NOTICE_CONTENTS);
		
		NoticeService.selectmodify(NoticeVO);		
		
		model.addAttribute("result", NoticeService.selectmodify(NoticeVO));
		
		return "/notice.do";
	}
	
	//글 삭제
	@RequestMapping(value={"/","deleteNotice.json"})
	public String deleteNotice(HttpServletRequest request, HttpServletResponse response
			,@RequestParam(value="NOTICE_CODE", required=false) String NOTICE_CODE
			,Model model) throws Exception{
		
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		int ret = NoticeService.deleteNotice(NOTICE_CODE);
		
		if(ret > 0){
			
			out.print("success");
		}else{
			out.print("fail");
		}
			
		return null;
	}
	
}

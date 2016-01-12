package com.login.web;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.login.model.TuserVO;
import com.login.service.UesrManageService;


@Controller
@RequestMapping(value="/login/", method={RequestMethod.GET, RequestMethod.POST})
public class UserManageController {
	
	@Autowired
	UesrManageService userService;
	
	
		//사용자 관리
		@RequestMapping(value={"/", "abcdefg.json"})
		public String abcdefg(@RequestParam(value="SEARCH_VALUE", required=false) String SEARCH_VALUE
							,Model model) throws Exception{
			model.addAttribute("result", userService.USER_test2(SEARCH_VALUE));
			return "/admin4.do";
		}
		
		//사용자관리 상세보기
		@RequestMapping(value={"/","selectsublist.json"})
		public String selectsublist(@RequestParam(value="USER_ID", required=false) String USER_ID
				,Model model) throws Exception{
			
			model.addAttribute("result", userService.selectsublist(USER_ID));
			
			return "/admin_subList.do";
		}
		
		//사용자 관리 수정페이지
		@RequestMapping(value={"/","admin_modify.json"})
		public String admin_modify(@RequestParam(value="USER_ID", required=false) String USER_ID
				,@RequestParam(value="USER_PW", required=false) String USER_PW
				,@RequestParam(value="USER_NM", required=false) String USER_NM
				,@RequestParam(value="CONFIRM_YN", required=false) String CONFIRM_YN
				,@RequestParam(value="DN_STR", required=false) String DN_STR
				,Model model) throws Exception{
					
			TuserVO tuserVO = new TuserVO();
			tuserVO.setUSER_ID(USER_ID);
			tuserVO.setUSER_PW(USER_PW);
			tuserVO.setUSER_NM(USER_NM);
			tuserVO.setCONFIRM_YN(CONFIRM_YN);
			tuserVO.setDN_STR(DN_STR);
			userService.admin_modify(tuserVO);
			
			
			model.addAttribute("result", userService.admin_modify(tuserVO));
			
			return "/admin_subList.do";
		}
		
		//입력부분 아이디 체크
		@RequestMapping(value={"/","idCheck.json"})
		public String idCheck(HttpServletRequest request, HttpServletResponse response)throws Exception{
			
	    	response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			
			String USER_ID = request.getParameter("USER_ID");
			
			TuserVO tuserVO = new TuserVO();
			tuserVO.setUSER_ID(USER_ID);
			
			String id = userService.IdCheck(tuserVO);
			if(id == null){
				out.print("success");
			}else{
				out.print("fail");
				
			}
			
			return null;
		}
		//관리자 페이지 입력
		@RequestMapping(value={"/","admin_insert.json"})
		public String admin_insert(HttpServletRequest request, HttpServletResponse response
				,@RequestParam(value="USER_ID", required=false) String USER_ID
				,@RequestParam(value="USER_PW", required=false) String USER_PW
				,@RequestParam(value="USER_NM", required=false) String USER_NM
				,@RequestParam(value="CONFIRM_YN", required=false) String CONFIRM_YN
				,@RequestParam(value="DN_STR", required=false) String DN_STR
				,@RequestParam(value="LEVEL_CD", required=false) String LEVEL_CD
				,Model model) throws Exception{
			
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			
			TuserVO tuserVO = new TuserVO();
			tuserVO.setUSER_ID(USER_ID);
			tuserVO.setUSER_PW(USER_PW);
			tuserVO.setUSER_NM(USER_NM);
			tuserVO.setCONFIRM_YN(CONFIRM_YN);
			tuserVO.setDN_STR(DN_STR);
			tuserVO.setLEVEL_CD(LEVEL_CD);
			int ret = userService.admin_insert(tuserVO);
			
			if(ret > 0){
				
				out.print("success");
			}else{
				out.print("fail");
			}
			return null;			
		}
		
		//사용자 관리 삭제부분
		@RequestMapping(value={"/","deleteID.json"})
		public String deleteID(HttpServletRequest request, HttpServletResponse response
				,@RequestParam(value="USER_ID", required=false) String USER_ID
				,Model model) throws Exception{
			
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			
			int ret = userService.deleteID(USER_ID);
			
			if(ret > 0){
				
				out.print("success");
			}else{
				out.print("fail");
			}
			
			return null;
		}
		
		//로그인체크 체크
				@RequestMapping(value={"/","LoginCheck.action"})
				public String LoginCheck(HttpServletRequest request, HttpServletResponse response,HttpSession session,
						@RequestParam(value="userId", required=false) String userId,
						@RequestParam(value="pw", required=false) String pw,
						Model model) throws Exception {
			    	response.setContentType("text/html; charset=UTF-8");
					PrintWriter out = response.getWriter();
					
					TuserVO tuserVO = new TuserVO();
					tuserVO.setUSER_ID(userId);
					tuserVO.setUSER_PW(pw);
					String id = userService.LoginCheck(tuserVO);
					System.out.println("tuserVO==============="+userService.LoginCheck(tuserVO));
					if(id == null){
						out.print("fail");
					}else{
							
						
						TuserVO TuserVO = new TuserVO();
						TuserVO = userService.selectLoginTuser(tuserVO);
						session.setAttribute("tuserVO",TuserVO);
						out.print("success");
					}
					
					return null;
				}
				
				/**
				 * 로그아웃 
				 * @param session
				 * @param request
				 * @return
				 * @throws Exception
				 */
				@RequestMapping(value={"/","logout.action"})
				public String logOutProcess(HttpSession session, HttpServletRequest request,HttpServletResponse response) throws Exception {
					response.setContentType("text/html; charset=UTF-8");
					PrintWriter out = response.getWriter();
					session.invalidate();
					out.print("success");
					
					return null;
					
					
				}
	
}

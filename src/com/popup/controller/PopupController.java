package com.popup.controller;

import java.io.PrintWriter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.cmm.controller.CmmController;
import com.popup.service.PopupService;

@Controller
public class PopupController extends CmmController{
	@Resource(name="popupService")
	PopupService popupService;
	
	/**
	 * ajax 요청에 대한 출력 결과이므로 return null 처리하고 해당 함수에서 바로 결과값을 출력시킨다
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value ="/popup/insertSurvey.json")
	public ModelAndView insertSurvey(HttpServletResponse response) throws Exception {
		ModelAndView mav = new ModelAndView();
		
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		//-- set the value of the DB
		String strRet = popupService.insertSurvey(cMap);
		int retNum = Integer.parseInt(strRet);
		if(retNum > 0){
			out.print("Y");
		}else{
			out.print("N");
		}
	    return null;
	}
	
	

}

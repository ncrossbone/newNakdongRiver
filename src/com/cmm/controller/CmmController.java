package com.cmm.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ModelAttribute;

public class CmmController {
	
	protected Log log = LogFactory.getLog(getClass());
	
	protected HttpServletRequest request;
	protected Map<String, Object> commandMap;
	protected Map<String, Object> cMap;

	
	/**초기값 바인딩 
	 * @param request
	 * @param commandMap
	 * @throws Exception
	 */
	@ModelAttribute("init")
	protected void init(HttpServletRequest request, Map<String, Object> commandMap) throws Exception  {
		System.out.println("init--//=cMap==" + commandMap);
		this.request = request;
		this.commandMap = commandMap;
		this.cMap = commandMap;
	}


}

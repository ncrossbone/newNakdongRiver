package com.base.web;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

public class BaseController {

	protected Logger logger = Logger.getLogger(getClass());

	public void debug(Object message) {
		if (logger.isDebugEnabled())
			logger.debug(message);
	}

	public void info(Object message) {
		if (logger.isInfoEnabled())
			logger.info(message);
	}

	public void trace(Object message) {
		if (logger.isTraceEnabled())
			logger.trace(message);
	}

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		dateFormat.setLenient(false);
		binder.registerCustomEditor(Date.class, null, new CustomDateEditor(dateFormat, true));
	}

}

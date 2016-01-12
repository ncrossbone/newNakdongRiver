package com.base.service;

import org.apache.log4j.Logger;

public class BaseService {

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
}

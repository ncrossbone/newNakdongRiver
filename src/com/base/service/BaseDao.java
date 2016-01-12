package com.base.service;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.ibatis.sqlmap.client.SqlMapClient;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

public class BaseDao extends EgovAbstractDAO {

	@Resource(name="sqlMapClient")
	public void setSuperSqlMapClient(SqlMapClient sqlMapClient) {
		super.setSqlMapClient(sqlMapClient);
	}

	protected final Logger logger = Logger.getLogger(this.getClass());

	public void error(Object message) {
		logger.error(message);
	}

	public void warn(Object message) {
		logger.warn(message);
	}

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

package com.ndk.etf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;

@Repository
public class EtfDaoImpl extends BaseDao {// implements MenuDao {

	// common
	public List<?> common_mw() {
		return getSqlMapClientTemplate().queryForList("common.mw");
	}
	
	public List<?> common_sw(String mw) {
		return getSqlMapClientTemplate().queryForList("common.sw", mw);
	}
	
	public List<?> common_sido() {
		return getSqlMapClientTemplate().queryForList("common.sido");
	}
	
	public List<?> common_sgg(String sido) {
		return getSqlMapClientTemplate().queryForList("common.sgg", sido);
	}

	// etfStatus
	public List<?> etfStatus_search() {
		return getSqlMapClientTemplate().queryForList("etfStatus.search");
	}
	
	// 환경기초시설 검색
	public List<?> etfStatus_chart1(String search_type_type,String search_type_mw,String search_type_sido,String search_type_sgg) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_type", search_type_type);  
		paramM.put("search_type_mw", search_type_mw);  
		paramM.put("search_type_sido", search_type_sido);
		paramM.put("search_type_sgg", search_type_sgg);
		
		return getSqlMapClientTemplate().queryForList("etfStatus.etfStatus_chart1",paramM);
	}
}

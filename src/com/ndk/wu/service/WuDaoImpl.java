package com.ndk.wu.service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import com.base.service.BaseDao;

@Repository
public class WuDaoImpl extends BaseDao {// implements MenuDao {

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

	// wuStatus
	public List<?> wuStatus_search() {
		return getSqlMapClientTemplate().queryForList("wuStatus.search");
	}
	
	public List<?> wuStatus_chart1(String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("wuStatus.chart1", paramM);
	}
	
	public List<?> wuStatus_chart2(String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("wuStatus.chart2", paramM);
	}

	// wuSewer
	public List<?> wuSewer_search() {
		return getSqlMapClientTemplate().queryForList("wuSewer.search");
	}
	
	public List<?> wuSewer_chart1(String start_year, String end_year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("start_year", start_year);  
		paramM.put("end_year", end_year);  
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("wuSewer.chart1", paramM);
	}
	
	public List<?> wuSewer_year1(String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("wuSewer.year1", paramM);
	}
	
	public List<?> wuSewer_chart2(String start_year, String end_year, String sido, String sgg) {
		Map<String, String> paramM = new HashMap<String, String>();  

		paramM.put("start_year", start_year);
		paramM.put("end_year", end_year);
		
		try {
			paramM.put("sido", URLDecoder.decode(sido, "UTF-8")); 
			paramM.put("sgg", URLDecoder.decode(sgg, "UTF-8")); 
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		return getSqlMapClientTemplate().queryForList("wuSewer.chart2", paramM);
	}
	
	public List<?> wuSewer_year2(String sido,String sgg) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		try {
			paramM.put("sido", URLDecoder.decode(sido, "UTF-8")); 
			paramM.put("sgg", URLDecoder.decode(sgg, "UTF-8")); 
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		return getSqlMapClientTemplate().queryForList("wuSewer.year2", paramM);
	}

	// wuFarm
	public List<?> wuFarm_search() {
		return getSqlMapClientTemplate().queryForList("wuFarm.search");
	}
	
	//2013-10-16 test 물이용현황>현황	
	public List<?> wuStatus_mwsearchresult() {
		return getSqlMapClientTemplate().queryForList("wuStatus.mwsearchresult");
	}
	
	//2013-10-17 test 물이용현황>하수도	
	public List<?> wuSewer_mwsearchresult() {
		return getSqlMapClientTemplate().queryForList("wuSewer.mwsearchresult");
	}
	
	//2013-10-17 test 물이용현황>하수도	(시.구.군)
	public List<?> wuSewer_SigunguSearchResult() {
		return getSqlMapClientTemplate().queryForList("wuSewer.SigunguSearchResult");
	
	}
}

package com.ndk.we.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;

@Repository
public class WeDaoImpl extends BaseDao {// implements MenuDao {

	// common
	public List<?> common_mw() {
		return getSqlMapClientTemplate().queryForList("common.mw");
	}
	
	public List<?> common_swAll() {
		return getSqlMapClientTemplate().queryForList("common.swAll");
	}
	
	// 수생태평가지점
	public List<?> common_tpmv() {
		return getSqlMapClientTemplate().queryForList("common.tpmv");
	}
	
	public List<?> common_tpmvInfo(String tpmvcode) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("tpmvcode", tpmvcode);  
		
		return getSqlMapClientTemplate().queryForList("common.tpmvInfo", paramM);
	}
	
	// weStatus
	public List<?> weStatus_search1(String year, String month, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("month", month);  
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("weStatus.search1", paramM);
	}
	
	public List<?> weStatus_search2(String year, String month, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("month", month);  
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("weStatus.search2", paramM);
	}
	
	public List<?> weStatus_search3(String ptno) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("ptno", ptno);  
		
		return getSqlMapClientTemplate().queryForList("weStatus.search3", paramM);
	}
	
	public List<?> weStatus_photo(String ptno) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("ptno", ptno);  
		
		return getSqlMapClientTemplate().queryForList("weStatus.photo", paramM);
	}
	
	public List<?> weStatus_movie(String ptno) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("ptno", ptno);  
		
		return getSqlMapClientTemplate().queryForList("weStatus.movie", paramM);
	}
	
	public List<?> weStatus_chart1(String ptno) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("ptno", ptno);  
		
		return getSqlMapClientTemplate().queryForList("weStatus.chart1", paramM);
	}
	
	public List<?> weStatus_chart2(String ptno, String year) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("ptno", ptno);  
		paramM.put("year", year);
		
		return getSqlMapClientTemplate().queryForList("weStatus.chart2", paramM);
	}
	
	public List<?> weStatus_year() {
		return getSqlMapClientTemplate().queryForList("weStatus.year");
	}
	
	// weWater
	public List<?> weWater_chart1(String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("weWater.chart1", paramM);
	}
	
	// 좋은물현황 차트
		public List<?> weWater_chart2(String search_type_year,String search_type_mw) {
			Map<String, String> paramM = new HashMap<String, String>();  
			paramM.put("search_type_year", search_type_year); 
			paramM.put("search_type_mw", search_type_mw); 
			return getSqlMapClientTemplate().queryForList("weWater.chart2", paramM);
		}
	
	//2013-10-17 test 수질,수생태> 좋은물현황	
	public List<?> weWater_mwsearchresult(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		paramM.put("search_type_year", search_type_year); 
		paramM.put("search_type_mw", search_type_mw); 
		return getSqlMapClientTemplate().queryForList("weWater.mwsearchresult", paramM);
	}

	// 생활환경기준 BOD 지도용 데이터
	public List<?> waterDataForMap() {
		return getSqlMapClientTemplate().queryForList("weWater.waterDataForMap");
	}

	
}

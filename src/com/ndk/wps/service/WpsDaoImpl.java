package com.ndk.wps.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import com.base.service.BaseDao;

@Repository
public class WpsDaoImpl extends BaseDao {// implements MenuDao {

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
	
	// wpsStatus
	public List<?> wpsStatus_year() {
		return getSqlMapClientTemplate().queryForList("wpsStatus.year");
	}
	
	public List<?> wpsStatus_chart11(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart11", paramM);
	}
	
	public List<?> wpsStatus_chart12(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart12", paramM);
	}
	
	public List<?> wpsStatus_chart21(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart21", paramM);
	}
	
	public List<?> wpsStatus_chart22(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart22", paramM);
	}
	
	public List<?> wpsStatus_chart31(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart31", paramM);
	}
	
	public List<?> wpsStatus_chart32(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart32", paramM);
	}
	
	public List<?> wpsStatus_chart41(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart41", paramM);
	}
	
	public List<?> wpsStatus_chart51(String year, String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("mw", mw); 
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart51", paramM);
	}
	
	public List<?> wpsStatus_chart_animal(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_ani) {
		Map<String, String> paramM = new HashMap<String, String>();  
		paramM.put("search_type_mw", search_type_mw);  
		paramM.put("search_type_sw", search_type_sw);
		paramM.put("search_type_sido", search_type_sido);  
		paramM.put("search_type_sgg", search_type_sgg);
		paramM.put("search_type_ani", search_type_ani);  
				
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart_animal",paramM);
	}
	
	public List<?> wpsStatus_chart_water(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_num) {
		Map<String, String> paramM = new HashMap<String, String>();
		paramM.put("search_type_mw", search_type_mw);  
		paramM.put("search_type_sw", search_type_sw);
		paramM.put("search_type_sido", search_type_sido);  
		paramM.put("search_type_sgg", search_type_sgg);
		paramM.put("search_type_num", search_type_num);
		
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart_water",paramM);
	}
	
	public List<?> wpsStatus_chart_air(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_num) {
		Map<String, String> paramM = new HashMap<String, String>();
		paramM.put("search_type_mw", search_type_mw);  
		paramM.put("search_type_sw", search_type_sw);
		paramM.put("search_type_sido", search_type_sido);  
		paramM.put("search_type_sgg", search_type_sgg);
		paramM.put("search_type_num", search_type_num);
		
		
		return getSqlMapClientTemplate().queryForList("wpsStatus.chart_air",paramM);
	}
	
}

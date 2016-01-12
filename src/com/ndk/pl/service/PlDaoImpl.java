package com.ndk.pl.service;

import org.springframework.stereotype.Repository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.base.service.BaseDao;

@Repository
public class PlDaoImpl extends BaseDao {
	
	
	// common 중권역 검색
	public List<?> common_mw() {
		return getSqlMapClientTemplate().queryForList("common.mw");
	}
	
	//시도 리스트 
	public List<?> common_sido() {
		return getSqlMapClientTemplate().queryForList("common.sido");
	}
	
	//시군구 리스트
	public List<?> common_sgg(String sido) {
		return getSqlMapClientTemplate().queryForList("common.sgg", sido);
	}
	
	//발생부하량 생활계 test chart
	public List<?> plload_chart1(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		  
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart1",paramM);
	}
	
	//발생부하량 산업계 test chart
	public List<?> plload_chart2(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart2",paramM);
	}
	
	//발생부하량 축산계 test chart
	public List<?> plload_chart3(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart3",paramM);
	}
	
	//발생부하량 양식계 test chart
	public List<?> plload_chart4(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart4",paramM);
	}
	
	//발생부하량 토지계 test chart
	public List<?> plload_chart5(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart5",paramM);
	}
	//발생부하량 매립계 test chart
	public List<?> plload_chart6(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart6",paramM);
	}
	
	public List<?> plload_chart7(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart7",paramM);
	}
	
	public List<?> plload_chart8(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart8",paramM);
	}
	
	//배출부하량 생활계 test chart
	public List<?> plload_chart11(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart11",paramM);
	}
	//배출부하량 산업계 test chart
	public List<?> plload_chart12(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart12",paramM);
	}
	
	//배출부하량 축산계 test chart
	public List<?> plload_chart13(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart13",paramM);
	}
	
	//배출부하량 양식계 test chart
	public List<?> plload_chart14(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart14",paramM);
	}
	
	//배출부하량 토지계 test chart
	public List<?> plload_chart15(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart15",paramM);
	}
	
	public List<?> plload_chart16(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>();
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart16",paramM);
	}
	
	public List<?> plload_chart17(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart17",paramM);
	}
	
	public List<?> plload_chart18(String search_type_year,String search_type_mw) {
		Map<String, String> paramM = new HashMap<String, String>(); 
		
		paramM.put("search_type_year", search_type_year);  
		paramM.put("search_type_mw", search_type_mw);
		
		return getSqlMapClientTemplate().queryForList("plLoad.chart18",paramM);
	}

}

package com.ndk.db.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;

@Repository
public class DbDaoImpl extends BaseDao {// implements MenuDao {

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
	
	// 보관측소
	public List<?> common_bo(String year, String month, String day, String hour) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("month", month);  
		paramM.put("day", day);  
		paramM.put("hour",  hour);  
		
		return getSqlMapClientTemplate().queryForList("common.bo", paramM);
	}
	
	public List<?> common_boInfo(String bocode, String year) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("bocode", bocode);  
		paramM.put("year", year);  
		
		return getSqlMapClientTemplate().queryForList("common.boInfo", paramM);
	}
	
	// 댐관측소
	public List<?> common_dam(String year, String month, String day, String hour) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("year", year);  
		paramM.put("month", month);  
		paramM.put("day", day);  
		paramM.put("hour",  hour);  
		
		return getSqlMapClientTemplate().queryForList("common.dam", paramM);
	}
	
	public List<?> common_damInfo(String damcode, String year) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("damcode", damcode);  
		paramM.put("year", year);  
		
		return getSqlMapClientTemplate().queryForList("common.damInfo", paramM);
	}
	
	// 우량관측소
	public List<?> common_rain() {
		return getSqlMapClientTemplate().queryForList("common.rain");
	}
	
	public List<?> common_rainInfo(String raincode) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("raincode", raincode);  
		
		return getSqlMapClientTemplate().queryForList("common.rainInfo", paramM);
	}
	
	public List<?> common_rainInfoChart1(String raincode) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("raincode", raincode);  
		
		return getSqlMapClientTemplate().queryForList("common.rainInfoChart1", paramM);
	}
	
	public List<?> common_rainInfoChart2(String raincode) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("raincode", raincode);  
		
		return getSqlMapClientTemplate().queryForList("common.rainInfoChart2", paramM);
	}
	
	// 기상관측소
	public List<?> common_weather() {
		return getSqlMapClientTemplate().queryForList("common.weather");
	}
	
	public List<?> common_weatherInfo(String weathercode) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("weathercode", weathercode);  
		
		return getSqlMapClientTemplate().queryForList("common.weatherInfo", paramM);
	}
	
	public List<?> common_weatherInfoChart1(String weathercode) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("weathercode", weathercode);  
		
		return getSqlMapClientTemplate().queryForList("common.weatherInfoChart1", paramM);
	}
	
	public List<?> common_weatherInfoChart2(String weathercode) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("weathercode", weathercode);  
		
		return getSqlMapClientTemplate().queryForList("common.weatherInfoChart2", paramM);
	}

	// dbStatus
	public List<?> dbStatus_search() {
		return getSqlMapClientTemplate().queryForList("dbStatus.search");
	}
	
	public List<?> dbStatus_chart11(String mw, String sw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		paramM.put("sw", sw); 
		
		return getSqlMapClientTemplate().queryForList("dbStatus.chart11", paramM);
	}
	
	public List<?> dbStatus_chart12(String mw, String sw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		paramM.put("sw", sw); 
		
		return getSqlMapClientTemplate().queryForList("dbStatus.chart12", paramM);
	}
	
	public List<?> dbStatus_chart13(String mw, String sw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		paramM.put("sw", sw); 
		
		return getSqlMapClientTemplate().queryForList("dbStatus.chart13", paramM);
	}

	public List<?> dbStatus_chart21(String sgg) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("sgg", sgg);  
		
		return getSqlMapClientTemplate().queryForList("dbStatus.chart21", paramM);
	}

	public List<?> dbStatus_chart22(String sgg) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("sgg", sgg);  
		
		return getSqlMapClientTemplate().queryForList("dbStatus.chart22", paramM);
	}

	// dbLand
	public List<?> dbLand_search() {
		return getSqlMapClientTemplate().queryForList("dbLand.search");
	}
	
	public List<?> dbLand_chart1(String mw, String year) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		paramM.put("year",year); 
		
		return getSqlMapClientTemplate().queryForList("dbLand.chart1", paramM);
	}

	// dbRiver
	public List<?> dbRiver_search() {
		return getSqlMapClientTemplate().queryForList("dbRiver.search");
	}
	
	public List<?> dbRiver_chart1(String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("dbRiver.chart1", paramM);
	}

	// 유역현황 - 하천유량 검색
	public List<?> dbRiver_chart2(String mw, String obs, String year) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		paramM.put("obs", obs);  
		paramM.put("year", year);  
		
		return getSqlMapClientTemplate().queryForList("dbRiver.chart2", paramM);
	}

	// 유역현황 - 하천유량 년도
	public List<?> dbRiver_chart2_year(String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("dbRiver.chart2_year", paramM);
	}

	// 유역현황 - 하천유량 측정소
	public List<?> dbRiver_chart2_obs(String mw) {
		Map<String, String> paramM = new HashMap<String, String>();  
		
		paramM.put("mw", mw);  
		
		return getSqlMapClientTemplate().queryForList("dbRiver.chart2_obs", paramM);
	}

	//test
		public List<?> common_search(String search_M_CODE,String L_CODE,String M_CODE) {
		    Map<String, String> param = new HashMap<String, String>();  
		    param.put("search_M_CODE", search_M_CODE);
		    param.put("L_CODE",L_CODE);
		    param.put("M_CODE",M_CODE);
		    return getSqlMapClientTemplate().queryForList("common.search",param);
		}
		
		//test
				public List<?> common_search1(String L_CODE,String M_CODE) {
				    Map<String, String> param = new HashMap<String, String>();  
				    param.put("L_CODE",L_CODE);
				    param.put("M_CODE", M_CODE);
				    
				    return getSqlMapClientTemplate().queryForList("common.search1",param);
				}
		
		//test
		public List<?> common_code(String L_CODE,String M_CODE) {
			 Map<String, String> param = new HashMap<String, String>();  
			    param.put("L_CODE",L_CODE);
			    param.put("M_CODE", M_CODE);
			return getSqlMapClientTemplate().queryForList("common.code",param);
		}
		//test
		public List<?> common_year() {
			return getSqlMapClientTemplate().queryForList("common.year");
		}
		
		//test
			public List<?> common_month() {
				return getSqlMapClientTemplate().queryForList("common.month");
			}
			//2013-10-16 test 유역현황>토지이용현황	
		public List<?> dbLand_mwsearchresult() {
			return getSqlMapClientTemplate().queryForList("dbLand.mwsearchresult");
		}

		// 메인 페이지 지도 관련 데이터 - BOD, COD, TN 최근 데이터
		public List<?> dsnMapData1() {
			return getSqlMapClientTemplate().queryForList("dbStatus.dsnMapData1");
		}
	
}
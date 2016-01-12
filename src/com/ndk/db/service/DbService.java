package com.ndk.db.service;

import java.util.List;

public interface DbService {

	// common
	public List<?> common_mw();
	public List<?> common_sw(String mw);
	public List<?> common_sido();
	public List<?> common_sgg(String sido);
	
	public List<?> common_bo(String year, String month, String day, String hour);
	public List<?> common_boInfo(String bocode, String year);
	
	public List<?> common_dam(String year, String month, String day, String hour);
	public List<?> common_damInfo(String damcode, String year);
	
	public List<?> common_rain();
	public List<?> common_rainInfo(String raincode);
	public List<?> common_rainInfoChart1(String raincode);
	public List<?> common_rainInfoChart2(String raincode);
	
	public List<?> common_weather();
	public List<?> common_weatherInfo(String weathercode);
	public List<?> common_weatherInfoChart1(String weathercode);
	public List<?> common_weatherInfoChart2(String weathercode);
	
	//test
	public List<?> common_search(String search_M_CODE, String L_CODE,String M_CODE);
	public List<?> common_search1(String L_CODE, String M_CODE);
	public List<?> common_code(String L_CODE,String M_CODE);
	public List<?> common_year();
	public List<?> common_month();
	
	//2013-10-16 test 유역현황>토지이용현황
	public List<?> dbLand_mwsearchresult();	
	
	// dbStatus
	public List<?> dbStatus_search();
	public List<?> dbStatus_chart11(String mw, String sw);
	public List<?> dbStatus_chart12(String mw, String sw);
	public List<?> dbStatus_chart13(String mw, String sw);
	public List<?> dbStatus_chart21(String sgg);
	public List<?> dbStatus_chart22(String sgg);
	
	// dbLand
	public List<?> dbLand_search();
	public List<?> dbLand_chart1(String mw, String year);
	
	// dbRiver
	public List<?> dbRiver_search();
	public List<?> dbRiver_chart1(String mw);
	
	// 유역현황 - 하천유량 검색
	public List<?> dbRiver_chart2(String mw, String obs, String year);
	public List<?> dbRiver_chart2_year(String mw);
	public List<?> dbRiver_chart2_obs(String mw);

	// 메인 페이지 지도 관련 데이터 - BOD, COD, TN 최근 데이터
	public List<?> dsnMapData1();
	
	
	
}

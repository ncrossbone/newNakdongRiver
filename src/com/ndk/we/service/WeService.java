package com.ndk.we.service;

import java.util.List;

public interface WeService {

	// common
	public List<?> common_mw();
	public List<?> common_swAll();
	
	public List<?> common_tpmv();
	public List<?> common_tpmvInfo(String tpmvcode);
	
	// weStatus
	public List<?> weStatus_search1(String year, String month, String mw);
	public List<?> weStatus_search2(String year, String month, String mw);
	public List<?> weStatus_search3(String ptno);
	public List<?> weStatus_photo(String ptno);
	public List<?> weStatus_movie(String ptno);
	public List<?> weStatus_chart1(String ptno);
	public List<?> weStatus_chart2(String ptno, String year);
	public List<?> weStatus_year();

	// weWater
	public List<?> weWater_chart1(String mw);
	//public List<?> weWater_chart3();
	
	// weWater
		public List<?> weWater_chart2(String search_type_year,String search_type_mw);
	
	//2013-10-17 test 수질,수생태> 좋은물현황
	public List<?> weWater_mwsearchresult(String search_type_year,String search_type_mw);
	
	// 생활환경기준 BOD 지도용 데이터
	public List<?> waterDataForMap();
	
}

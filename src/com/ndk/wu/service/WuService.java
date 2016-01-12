package com.ndk.wu.service;

import java.util.List;

public interface WuService {

	// common
	public List<?> common_mw();
	public List<?> common_sw(String mw);
	public List<?> common_sido();
	public List<?> common_sgg(String sido);
	
	// wuStatus
	public List<?> wuStatus_search();
	public List<?> wuStatus_chart1(String mw);
	public List<?> wuStatus_chart2(String mw);
	
	// wuSewer
	public List<?> wuSewer_search();
	public List<?> wuSewer_chart1(String start_year, String end_year, String mw);
	public List<?> wuSewer_year1(String mw);
	public List<?> wuSewer_chart2(String start_year, String end_year, String sido, String sgg);
	public List<?> wuSewer_year2(String sido,String sgg);
	
	// wuFarm
	public List<?> wuFarm_search();
	
	//2013-10-16 test 물이용현황>현황
	
	public List<?> wuStatus_mwsearchresult();
	
	//2013-10-17 test 물이용현황>하수도관련 검색
	
	public List<?> wuSewer_mwsearchresult();
	
	//2013-10-17 test 물이용현황>하수도관련 검색(시.구.군)
	
	public List<?> wuSewer_SigunguSearchResult();
}

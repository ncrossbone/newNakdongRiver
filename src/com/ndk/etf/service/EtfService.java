package com.ndk.etf.service;

import java.util.List;

public interface EtfService {

	// common
	public List<?> common_mw();
	public List<?> common_sw(String mw);
	public List<?> common_sido();
	public List<?> common_sgg(String sido);
	
	// etfStatus
	public List<?> etfStatus_search();
	// 환경기초시설 검색
	public List<?> etfStatus_chart1(String search_type_type,String search_type_mw,String search_type_sido,String search_type_sgg);
}

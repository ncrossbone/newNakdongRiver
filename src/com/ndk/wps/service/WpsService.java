package com.ndk.wps.service;

import java.util.List;

public interface WpsService {

	// common
	public List<?> common_mw();
	public List<?> common_sw(String mw);
	public List<?> common_sido();
	public List<?> common_sgg(String sido);
	
	// wpsStatus
	public List<?> wpsStatus_year();
	public List<?> wpsStatus_chart11(String year, String mw);
	public List<?> wpsStatus_chart12(String year, String mw);
	public List<?> wpsStatus_chart21(String year, String mw);
	public List<?> wpsStatus_chart22(String year, String mw);
	public List<?> wpsStatus_chart31(String year, String mw);
	public List<?> wpsStatus_chart32(String year, String mw);
	public List<?> wpsStatus_chart41(String year, String mw);
	public List<?> wpsStatus_chart51(String year, String mw);

	public List<?> wpsStatus_chart_animal(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_ani);
	
	public List<?> wpsStatus_chart_water(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_num);
	
	public List<?> wpsStatus_chart_air(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_num);

}

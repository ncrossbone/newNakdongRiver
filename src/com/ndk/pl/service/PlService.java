package com.ndk.pl.service;

import java.util.List;

public interface PlService {
	
	//중권역 검색
	public List<?> common_mw();
	//시도 리스트
	public List<?> common_sido();
	//시군구 리스트
	public List<?> common_sgg(String sido);
	
	//발생부하량 생활계 test chart
	public List<?> plload_chart1(String search_type_year,String search_type_mw);
	//발생부하량 산업계 test chart
	public List<?> plload_chart2(String search_type_year,String search_type_mw);
	//발생부하량 축산계 test chart
	public List<?> plload_chart3(String search_type_year,String search_type_mw);
	//발생부하량 양식계 test chart
	public List<?> plload_chart4(String search_type_year,String search_type_mw);
	//발생부하량 토지계 test chart
	public List<?> plload_chart5(String search_type_year,String search_type_mw);
	//발생부하량 매립계 test chart
	public List<?> plload_chart6(String search_type_year,String search_type_mw);
	public List<?> plload_chart7(String search_type_year,String search_type_mw);
	public List<?> plload_chart8(String search_type_year,String search_type_mw);
	
	//배출부하량 생활계 test chart
	public List<?> plload_chart11(String search_type_year,String search_type_mw);
	//배출부하량 산업계 test chart
	public List<?> plload_chart12(String search_type_year,String search_type_mw);	
	//배출부하량 축산계 test chart
	public List<?> plload_chart13(String search_type_year,String search_type_mw);
	//배출부하량 양식계 test chart
	public List<?> plload_chart14(String search_type_year,String search_type_mw);
	//배출부하량 양식계 test chart
	public List<?> plload_chart15(String search_type_year,String search_type_mw);
	public List<?> plload_chart16(String search_type_year,String search_type_mw);
	public List<?> plload_chart17(String search_type_year,String search_type_mw);
	public List<?> plload_chart18(String search_type_year,String search_type_mw);
}

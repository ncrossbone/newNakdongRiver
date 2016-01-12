package com.ndk.wps.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.service.BaseService;

@Service
public class WpsServiceImpl extends BaseService implements WpsService {
	@Autowired
	WpsDaoImpl wpsDao;

	// common
	public List<?> common_mw() {
		return wpsDao.common_mw();
	}
	
	public List<?> common_sw(String mw) {
		return wpsDao.common_sw(mw);
	}
	
	public List<?> common_sido() {
		return wpsDao.common_sido();
	}
	
	public List<?> common_sgg(String sido) {
		return wpsDao.common_sgg(sido);
	}

	// wpsStatus
	public List<?> wpsStatus_year() {
		return wpsDao.wpsStatus_year();
	}
	
	public List<?> wpsStatus_chart11(String year, String mw) {
		return wpsDao.wpsStatus_chart11(year, mw);
	}
	
	public List<?> wpsStatus_chart12(String year, String mw) {
		return wpsDao.wpsStatus_chart12(year, mw);
	}
	
	public List<?> wpsStatus_chart21(String year, String mw) {
		return wpsDao.wpsStatus_chart21(year, mw);
	}
	
	public List<?> wpsStatus_chart22(String year, String mw) {
		return wpsDao.wpsStatus_chart22(year, mw);
	}
	
	public List<?> wpsStatus_chart31(String year, String mw) {
		return wpsDao.wpsStatus_chart31(year, mw);
	}
	
	public List<?> wpsStatus_chart32(String year, String mw) {
		return wpsDao.wpsStatus_chart32(year, mw);
	}
	
	public List<?> wpsStatus_chart41(String year, String mw) {
		return wpsDao.wpsStatus_chart41(year, mw);
	}
	
	public List<?> wpsStatus_chart51(String year, String mw) {
		return wpsDao.wpsStatus_chart51(year, mw);
	}
	
	public List<?> wpsStatus_chart_animal(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_ani) {
		return wpsDao.wpsStatus_chart_animal(search_type_mw,search_type_sw,search_type_sido,search_type_sgg,search_type_ani);
	}
	
	public List<?> wpsStatus_chart_water(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_num) {
		return wpsDao.wpsStatus_chart_water(search_type_mw,search_type_sw,search_type_sido,search_type_sgg,search_type_num);
	}
	
	public List<?> wpsStatus_chart_air(String search_type_mw,String search_type_sw,String search_type_sido,String search_type_sgg,String search_type_num) {
		return wpsDao.wpsStatus_chart_air(search_type_mw,search_type_sw,search_type_sido,search_type_sgg,search_type_num);
	}
}
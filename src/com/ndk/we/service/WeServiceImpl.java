package com.ndk.we.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.base.service.BaseService;

@Service
public class WeServiceImpl extends BaseService implements WeService {
	@Autowired
	WeDaoImpl weDao;

	// common
	public List<?> common_mw() {
		return weDao.common_mw();
	}
	
	public List<?> common_swAll() {
		return weDao.common_swAll();
	}
	
	// 수생태평가지점
	public List<?> common_tpmv() {
		return weDao.common_tpmv();
	}
	
	public List<?> common_tpmvInfo(String tpmvcode) {
		return weDao.common_tpmvInfo(tpmvcode);
	}
	
	// weStatus
	public List<?> weStatus_search1(String year, String month, String mw) {
		return weDao.weStatus_search1(year, month, mw);
	}
	
	public List<?> weStatus_search2(String year, String month, String mw) {
		return weDao.weStatus_search2(year, month, mw);
	}
	
	public List<?> weStatus_search3(String ptno) {
		return weDao.weStatus_search3(ptno);
	}
	
	public List<?> weStatus_photo(String ptno) {
		return weDao.weStatus_photo(ptno);
	}
	
	public List<?> weStatus_movie(String ptno) {
		return weDao.weStatus_movie(ptno);
	}
	
	public List<?> weStatus_chart1(String ptno) {
		return weDao.weStatus_chart1(ptno);
	}
	
	public List<?> weStatus_chart2(String ptno, String year) {
		return weDao.weStatus_chart2(ptno, year);
	}
	
	public List<?> weStatus_year() {
		return weDao.weStatus_year();
	}
	
	// weWater
	public List<?> weWater_chart1(String mw) {
		return weDao.weWater_chart1(mw);
	}
	
	// 좋은물 현황 차트
		public List<?> weWater_chart2(String search_type_year,String search_type_mw) {
			return weDao.weWater_chart2(search_type_year,search_type_mw);
		}
	
	//2013-10-17 test 수질,수생태> 좋은물현황
	public List<?> weWater_mwsearchresult(String search_type_year,String search_type_mw){
		return weDao.weWater_mwsearchresult(search_type_year,search_type_mw);
	}

	// 생활환경기준 BOD 지도용 데이터
	public List<?> waterDataForMap() {
		return weDao.waterDataForMap();
	}

}
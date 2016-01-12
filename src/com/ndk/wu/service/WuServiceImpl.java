package com.ndk.wu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.base.service.BaseService;

@Service
public class WuServiceImpl extends BaseService implements WuService {
	@Autowired
	WuDaoImpl wuDao;

	// common
	public List<?> common_mw() {
		return wuDao.common_mw();
	}
	
	public List<?> common_sw(String mw) {
		return wuDao.common_sw(mw);
	}
	
	public List<?> common_sido() {
		return wuDao.common_sido();
	}
	
	public List<?> common_sgg(String sido) {
		return wuDao.common_sgg(sido);
	}

	// wuStatus
	public List<?> wuStatus_search() {
		return wuDao.wuStatus_search();
	}
	
	public List<?> wuStatus_chart1(String mw) {
		return wuDao.wuStatus_chart1(mw);
	}
	
	public List<?> wuStatus_chart2(String mw) {
		return wuDao.wuStatus_chart2(mw);
	}

	// wuSewer
	public List<?> wuSewer_search() {
		return wuDao.wuSewer_search();
	}
	
	public List<?> wuSewer_chart1(String start_year, String end_year, String mw) {
		return wuDao.wuSewer_chart1(start_year, end_year, mw);
	}
	
	public List<?> wuSewer_year1(String mw) {
		return wuDao.wuSewer_year1(mw);
	}
	
	public List<?> wuSewer_chart2(String start_year, String end_year, String sido, String sgg) {
		return wuDao.wuSewer_chart2(start_year, end_year, sido, sgg);
	}
	
	public List<?> wuSewer_year2(String sido,String sgg) {
		return wuDao.wuSewer_year2(sido,sgg);
	}

	// wuFarm
	public List<?> wuFarm_search() {
		return wuDao.wuFarm_search();
	}
	//2013-10-16 test 물이용현황>현황
	public List<?> wuStatus_mwsearchresult() {
		return wuDao.wuStatus_mwsearchresult();
		}
	
	
	//2013-10-17 test 물이용현황>하수도관련 검색
	
	public List<?> wuSewer_mwsearchresult(){
		return wuDao.wuSewer_mwsearchresult();
		}
	
	//2013-10-17 test 물이용현황>하수도관련 검색(시.구.군)
	
	public List<?> wuSewer_SigunguSearchResult(){
		return wuDao.wuSewer_SigunguSearchResult();
	}
	

}
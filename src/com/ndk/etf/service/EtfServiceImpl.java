package com.ndk.etf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.base.service.BaseService;

@Service
public class EtfServiceImpl extends BaseService implements EtfService {
	@Autowired
	EtfDaoImpl etfDao;

	// common
	public List<?> common_mw() {
		return etfDao.common_mw();
	}

	public List<?> common_sw(String mw) {
		return etfDao.common_sw(mw);
	}

	public List<?> common_sido() {
		return etfDao.common_sido();
	}

	public List<?> common_sgg(String sido) {
		return etfDao.common_sgg(sido);
	}

	// etfStatus
	public List<?> etfStatus_search() {
		return etfDao.etfStatus_search();
	}

	// 환경기초시설 검색
	public List<?> etfStatus_chart1(String search_type_type,String search_type_mw,String search_type_sido,String search_type_sgg) {
		System.out.println("search_type_type======"+search_type_type);
		System.out.println("search_type_mw======"+search_type_mw);
		System.out.println("search_type_sido======"+search_type_sido);
		System.out.println("search_type_sgg======"+search_type_sgg);
		return etfDao.etfStatus_chart1(search_type_type,search_type_mw,search_type_sido,search_type_sgg);
	}

}
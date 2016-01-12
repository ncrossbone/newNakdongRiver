package com.ndk.db.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.base.service.BaseService;

@Service
public class DbServiceImpl extends BaseService implements DbService {
	@Autowired
	DbDaoImpl dbDao;

	// common
	public List<?> common_mw() {
		return dbDao.common_mw();
	}
	
	public List<?> common_sw(String mw) {
		return dbDao.common_sw(mw);
	}
	
	public List<?> common_sido() {
		return dbDao.common_sido();
	}
	
	public List<?> common_sgg(String sido) {
		return dbDao.common_sgg(sido);
	}
	
	// 보관측소
	public List<?> common_bo(String year, String month, String day, String hour) {
		return dbDao.common_bo(year, month, day, hour);
	}
	
	public List<?> common_boInfo(String bocode, String year) {
		return dbDao.common_boInfo(bocode, year);
	}
	
	// 댐관측소
	public List<?> common_dam(String year, String month, String day, String hour) {
		return dbDao.common_dam(year, month, day, hour);
	}
	
	public List<?> common_damInfo(String damcode, String year) {
		return dbDao.common_damInfo(damcode, year);
	}
	
	// 우량관측소
	public List<?> common_rain() {
		return dbDao.common_rain();
	}
	
	public List<?> common_rainInfo(String raincode) {
		return dbDao.common_rainInfo(raincode);
	}
	
	public List<?> common_rainInfoChart1(String raincode) {
		return dbDao.common_rainInfoChart1(raincode);
	}
	
	public List<?> common_rainInfoChart2(String raincode) {
		return dbDao.common_rainInfoChart2(raincode);
	}
	
	// 기상관측소
	public List<?> common_weather() {
		return dbDao.common_weather();
	}
	
	public List<?> common_weatherInfo(String weathercode) {
		return dbDao.common_weatherInfo(weathercode);
	}
	
	public List<?> common_weatherInfoChart1(String weathercode) {
		return dbDao.common_weatherInfoChart1(weathercode);
	}
	
	public List<?> common_weatherInfoChart2(String weathercode) {
		return dbDao.common_weatherInfoChart2(weathercode);
	}

	// dbStatus
	public List<?> dbStatus_search() {
		return dbDao.dbStatus_search();
	}
	
	public List<?> dbStatus_chart11(String mw, String sw) {
		return dbDao.dbStatus_chart11(mw, sw);
	}
	
	public List<?> dbStatus_chart12(String mw, String sw) {
		return dbDao.dbStatus_chart12(mw, sw);
	}
	
	public List<?> dbStatus_chart13(String mw, String sw) {
		return dbDao.dbStatus_chart13(mw, sw);
	}
	
	public List<?> dbStatus_chart21(String sgg) {
		return dbDao.dbStatus_chart21(sgg);
	}
	
	public List<?> dbStatus_chart22(String sgg) {
		return dbDao.dbStatus_chart22(sgg);
	}

	// dbLand
	public List<?> dbLand_search() {
		return dbDao.dbLand_search();
	}
	
	public List<?> dbLand_chart1(String mw, String year) {
		return dbDao.dbLand_chart1(mw, year);
	}

	// dbRiver
	public List<?> dbRiver_search() {
		return dbDao.dbRiver_search();
	}
	
	public List<?> dbRiver_chart1(String mw) {
		return dbDao.dbRiver_chart1(mw);
	}

	// 유역현황 - 하천유량 검색
	public List<?> dbRiver_chart2(String mw, String obs, String year) {
		return dbDao.dbRiver_chart2(mw, obs, year);
	}

	// 유역현황 - 하천유량 년도
	public List<?> dbRiver_chart2_year(String mw) {
		return dbDao.dbRiver_chart2_year(mw);
	}
	
	// 유역현황 - 하천유량 측정소
	public List<?> dbRiver_chart2_obs(String mw) {
		return dbDao.dbRiver_chart2_obs(mw);
	}
	
	//관리자 페이지 test 
	public List<?> common_search(String search_M_CODE, String L_CODE,String M_CODE) {
		return dbDao.common_search(search_M_CODE,L_CODE,M_CODE);
	}
	//관리자 페이지 test 	
	@Override
	public List<?> common_code(String L_CODE,String M_CODE) {
		return dbDao.common_code(L_CODE,M_CODE);
	}
	//관리자 페이지 test 
	@Override
	public List<?> common_year() {
		return dbDao.common_year();
	}
	//관리자 페이지 test 
	@Override
	public List<?> common_month() {
		return dbDao.common_month();
	}
	
	//2013-10-16 test 유역현황>토지이용현황
	public List<?> dbLand_mwsearchresult() {
		return dbDao.dbLand_mwsearchresult();
		}
	
	//관리자 페이지 test 
	public List<?> common_search1(String L_CODE, String M_CODE) {
		return dbDao.common_search1(L_CODE,M_CODE);
	}

		// 메인 페이지 지도 관련 데이터 - BOD, COD, TN 최근 데이터
	public List<?> dsnMapData1() {
		return dbDao.dsnMapData1();
	}
		
	

}
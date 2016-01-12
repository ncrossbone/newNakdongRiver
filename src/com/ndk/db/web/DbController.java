package com.ndk.db.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.web.BaseController;
import com.ndk.db.service.DbService;

@Controller
@RequestMapping(value="/db/", method={RequestMethod.GET, RequestMethod.POST})
public class DbController extends BaseController {

	@Autowired
	DbService dbService;

	// common
	@RequestMapping(value={"/", "common_mw"})
	public void common_mw(
			@RequestParam(value="common_mw", required=false) String common_mw,
			Model model) {

		model.addAttribute("result", dbService.common_mw());
	}
	
	@RequestMapping(value={"/", "common_sw"})
	public String common_sw(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		model.addAttribute("result", dbService.common_sw(mw));
		
		return "db/common_sw";
	}
	
	@RequestMapping(value={"/", "common_sido"})
	public void common_sido(
			@RequestParam(value="common_sido", required=false) String common_sido,
			Model model) {

		model.addAttribute("result", dbService.common_sido());
	}
	
	@RequestMapping(value={"/", "common_sgg"})
	public String common_sgg(
			@RequestParam(value="sido", required=false) String sido,
			Model model) {

		model.addAttribute("result", dbService.common_sgg(sido));
		return "db/common_sgg";
	}
	
	// 보관측소
	@RequestMapping(value={"/", "common_bo"})
	public String common_bo(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="month", required=false) String month,
			@RequestParam(value="day", required=false) String day,
			@RequestParam(value="hour", required=false) String hour,
			Model model) {

		model.addAttribute("result", dbService.common_bo(year, month, day, hour));
		return "db/common_bo";
	}
	
	@RequestMapping(value={"/", "common_boInfo"})
	public String common_boInfo(
			@RequestParam(value="bocode", required=false) String bocode,
			@RequestParam(value="year", required=false) String year,
			Model model) {
		
		model.addAttribute("result", dbService.common_boInfo(bocode, year));
		return "db/common_boInfo";
	}
	
	// 댐관측소
	@RequestMapping(value={"/", "common_dam"})
	public String common_dam(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="month", required=false) String month,
			@RequestParam(value="day", required=false) String day,
			@RequestParam(value="hour", required=false) String hour,
			Model model) {
		
		model.addAttribute("result", dbService.common_dam(year, month, day, hour));
		return "db/common_dam";
	}
	
	@RequestMapping(value={"/", "common_damInfo"})
	public String common_damInfo(
			@RequestParam(value="damcode", required=false) String damcode,
			@RequestParam(value="year", required=false) String year,
			Model model) {
		
		model.addAttribute("result", dbService.common_damInfo(damcode, year));
		return "db/common_damInfo";
	}
	
	// 우량관측소
	@RequestMapping(value={"/", "common_rain"})
	public String common_rain(
			Model model) {
		
		model.addAttribute("result", dbService.common_rain());
		return "db/common_rain";
	}
	
	@RequestMapping(value={"/", "common_rainInfo"})
	public String common_rainInfo(
			@RequestParam(value="raincode", required=false) String raincode,
			Model model) {
		
		model.addAttribute("result", dbService.common_rainInfo(raincode));
		return "db/common_rainInfo";
	}
	
	@RequestMapping(value={"/", "common_rainInfoChart1"})
	public String common_rainInfoChart1(
			@RequestParam(value="raincode", required=false) String raincode,
			Model model) {
		
		model.addAttribute("result", dbService.common_rainInfoChart1(raincode));
		return "db/common_rainInfoChart1";
	}
	
	@RequestMapping(value={"/", "common_rainInfoChart2"})
	public String common_rainInfoChart2(
			@RequestParam(value="raincode", required=false) String raincode,
			Model model) {
		
		model.addAttribute("result", dbService.common_rainInfoChart2(raincode));
		return "db/common_rainInfoChart2";
	}
	
	// 기상관측소
	@RequestMapping(value={"/", "common_weather"})
	public String common_weather(
			Model model) {
		
		model.addAttribute("result", dbService.common_weather());
		return "db/common_weather";
	}
	
	@RequestMapping(value={"/", "common_weatherInfo"})
	public String common_weatherInfo(
			@RequestParam(value="weathercode", required=false) String weathercode,
			Model model) {
		
		model.addAttribute("result", dbService.common_weatherInfo(weathercode));
		return "db/common_weatherInfo";
	}
	
	@RequestMapping(value={"/", "common_weatherInfoChart1"})
	public String common_weatherInfoChart1(
			@RequestParam(value="weathercode", required=false) String weathercode,
			Model model) {
		
		model.addAttribute("result", dbService.common_weatherInfoChart1(weathercode));
		return "db/common_weatherInfoChart1";
	}
	
	@RequestMapping(value={"/", "common_weatherInfoChart2"})
	public String common_weatherInfoChart2(
			@RequestParam(value="weathercode", required=false) String weathercode,
			Model model) {
		
		model.addAttribute("result", dbService.common_weatherInfoChart2(weathercode));
		return "db/common_weatherInfoChart2";
	}
	
	// dbStatus
	@RequestMapping(value={"/", "dbStatus_search"})
	public void dbStatus_search(
			@RequestParam(value="dbStatus_search", required=false) String dbStatus_search,
			Model model) {

		model.addAttribute("result", dbService.dbStatus_search());
	}
	
	@RequestMapping(value={"/", "dbStatus_chart11"})
	public String dbStatus_chart11(
			@RequestParam(value="mw", required=false) String mw,
			@RequestParam(value="sw", required=false) String sw,
			Model model) {
		model.addAttribute("result", dbService.dbStatus_chart11(mw, sw));
		return "db/dbStatus_chart11";
	}
	
	@RequestMapping(value={"/", "dbStatus_chart12"})
	public String dbStatus_chart12(
			@RequestParam(value="mw", required=false) String mw,
			@RequestParam(value="sw", required=false) String sw,
			Model model) {		
		model.addAttribute("result", dbService.dbStatus_chart12(mw, sw));
		return "db/dbStatus_chart12";
	}
	
	@RequestMapping(value={"/", "dbStatus_chart13"})
	public String dbStatus_chart13(
			@RequestParam(value="mw", required=false) String mw,
			@RequestParam(value="sw", required=false) String sw,
			Model model) {		
		model.addAttribute("result", dbService.dbStatus_chart13(mw, sw));
		return "db/dbStatus_chart13";
	}
	
	@RequestMapping(value={"/", "dbStatus_chart21"})
	public String dbStatus_chart21(
			@RequestParam(value="sgg", required=false) String sgg,
			Model model) {
		
		model.addAttribute("result", dbService.dbStatus_chart21(sgg));
		return "db/dbStatus_chart21";
	}
	
	@RequestMapping(value={"/", "dbStatus_chart22"})
	public String dbStatus_chart22(
			@RequestParam(value="sgg", required=false) String sgg,
			Model model) {
		
		model.addAttribute("result", dbService.dbStatus_chart22(sgg));
		return "db/dbStatus_chart22";
	}
	
	// dbLand
	@RequestMapping(value={"/", "dbLand_search"})
	public void dbLand_search(
			@RequestParam(value="dbLand_search", required=false) String dbLand_search,
			Model model) {

		model.addAttribute("result", dbService.dbLand_search());
	}
	
	@RequestMapping(value={"/", "dbLand_chart1"})
	public String dbLand_chart1(
			@RequestParam(value="mw", required=false) String mw,
			@RequestParam(value="year", required=false) String year,
			Model model) {
		
		model.addAttribute("result", dbService.dbLand_chart1(mw, year));
		return "db/dbLand_chart1";
	}

	// dbRiver
	@RequestMapping(value={"/", "dbRiver_search"})
	public void dbRiver_search(
			@RequestParam(value="dbRiver_search", required=false) String dbRiver_search,
			Model model) {

		model.addAttribute("result", dbService.dbRiver_search());
	}
	
	@RequestMapping(value={"/", "dbRiver_chart1"})
	public String dbRiver_chart1(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", dbService.dbRiver_chart1(mw));
		return "db/dbRiver_chart1";
	}
	
	// 유역현황 - 하천유량 검색
	@RequestMapping(value={"/", "dbRiver_chart2"})
	public String dbRiver_chart2(
			@RequestParam(value="mw", required=false) String mw,
			@RequestParam(value="obs", required=false) String obs,
			@RequestParam(value="year", required=false) String year,
			Model model) {
		
		model.addAttribute("result", dbService.dbRiver_chart2(mw, obs, year));
		
		return "db/dbRiver_chart2";
	}
	
	// 유역현황 - 하천유량 년도
	@RequestMapping(value={"/", "dbRiver_chart2_year"})
	public String dbRiver_chart2_year(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", dbService.dbRiver_chart2_year(mw));
		
		return "db/dbRiver_chart2_year";
	}
	
	// 유역현황 - 하천유량 측정소
	@RequestMapping(value={"/", "dbRiver_chart2_obs"})
	public String dbRiver_chart2_obs(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", dbService.dbRiver_chart2_obs(mw));
		
		return "db/dbRiver_chart2_obs";
	}

	//관리자 페이지 test
	@RequestMapping(value={"/", "common_code"})
	public String common_code(
			@RequestParam(value="L_CODE", required=false) String L_CODE,
			@RequestParam(value="M_CODE", required=false) String M_CODE,
			Model model) {

		model.addAttribute("result", dbService.common_code(L_CODE,M_CODE));
		System.out.println("dbService.common_code(L_CODE)>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+ dbService.common_code(L_CODE,M_CODE));
		System.out.println("L_CODE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+L_CODE);
		System.out.println("M_CODE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+M_CODE);
		return "db/common_code";
	}
	//관리자 페이지 test
	@RequestMapping(value={"/", "common_year"})
	public void common_year(
			@RequestParam(value="year", required=false) String common_year,
			Model model) {

		model.addAttribute("result", dbService.common_year());
		System.out.println("dbService.common_year()>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+ dbService.common_year());
	}
	
	//관리자 페이지 test
		@RequestMapping(value={"/", "common_month"})
		public void common_month(
				@RequestParam(value="L_CODE", required=false) String L_CODE,
				Model model) {

			model.addAttribute("result", dbService.common_month());
			System.out.println("common_month>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+ dbService.common_month());
		}
		

		//관리자 페이지 test
		@RequestMapping(value={"/", "common_search"})
			public String common_search(
					@RequestParam(value="search_M_CODE", required=false) String search_M_CODE,
					@RequestParam(value="L_CODE", required=false) String L_CODE,
					@RequestParam(value="M_CODE", required=false) String M_CODE,
					Model model) {

				model.addAttribute("result", dbService.common_search(search_M_CODE,L_CODE,M_CODE));
				System.out.println("common_search>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+ dbService.common_search(search_M_CODE,L_CODE,M_CODE).size());
				System.out.println("search_M_CODE>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+ search_M_CODE);
				return "db/common_search";
			}
		
		//2013-10-16 test 유역현황>토지현황>검색 
		@RequestMapping(value={"/", "dbLand_mw_search_result"})
		public void dbLand_mw_search_result(
				@RequestParam(value="dbLand_search_val", required=false) String dbLand_search_val,
				Model model) {

			model.addAttribute("result", dbService.dbLand_mwsearchresult());
			System.out.println("dbService.dbLand_mwsearchresult()>>>>>>>>>>>>>>>>>>>>>"+dbService.dbLand_mwsearchresult());
			
		}
		
		//관리자 페이지 test
				@RequestMapping(value={"/", "common_search1"})
				public void common_search1(
						@RequestParam(value="L_CODE", required=false) String L_CODE,
						@RequestParam(value="M_CODE", required=false) String M_CODE,
						Model model) {

					model.addAttribute("result", dbService.common_search1(L_CODE,M_CODE));
					System.out.println("***************************************************");
					System.out.println("L_CODE==========================="+L_CODE);
					System.out.println("M_CODE==========================="+M_CODE);
					System.out.println("result==========================="+dbService.common_search1(L_CODE,M_CODE));
					System.out.println("***************************************************");
				}
				
				
				@RequestMapping(value={"/", "common_search2"})
				public String common_search2(
						@RequestParam(value="L_CODE", required=false) String L_CODE,
						@RequestParam(value="M_CODE", required=false) String M_CODE,
						Model model) {
					System.out.println("TESTAJAX");
					System.out.println(L_CODE);
					System.out.println(M_CODE);
					
					
					model.addAttribute("result", dbService.common_search1(L_CODE,M_CODE));


					return "db/common_search2";
				}
				
				

	// 메인 페이지 지도 관련 데이터 - BOD, TN  최근 데이터
	@RequestMapping(value={"/", "dsnMapData1"})
	public void dsnMapData1(Model model) {
		model.addAttribute("result", dbService.dsnMapData1());
	}	

}

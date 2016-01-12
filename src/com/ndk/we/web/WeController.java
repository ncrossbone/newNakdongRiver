package com.ndk.we.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.web.BaseController;
import com.ndk.we.service.WeService;

@Controller
@RequestMapping(value="/we/", method={RequestMethod.GET, RequestMethod.POST})
public class WeController extends BaseController {

	@Autowired
	WeService weService;
	
	// common
	@RequestMapping(value={"/", "common_mw"})
	public void common_mw(
			@RequestParam(value="common_mw", required=false) String common_mw,
			Model model) {

		model.addAttribute("result", weService.common_mw());
	}
	
	@RequestMapping(value={"/", "common_swAll"})
	public void common_sw(
			@RequestParam(value="common_swAll", required=false) String common_swAll,
			Model model) {

		model.addAttribute("result", weService.common_swAll());
	}
	
	// 수생태평가지점
	@RequestMapping(value={"/", "common_tpmv"})
	public String common_tpmv(
			Model model) {
		
		model.addAttribute("result", weService.common_tpmv());
		return "we/common_tpmv";
	}
	
	@RequestMapping(value={"/", "common_tpmvInfo"})
	public String common_tpmvInfo(
			@RequestParam(value="tpmvcode", required=false) String tpmvcode,
			Model model) {
		
		model.addAttribute("result", weService.common_tpmvInfo(tpmvcode));
		return "we/common_tpmvInfo";
	}
	
	// weStatus
	// 확정 전 수질 측정 결과
	@RequestMapping(value={"/", "weStatus_search1"})
	public String weStatus_search1(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="month", required=false) String month,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", weService.weStatus_search1(year, month, mw));
		
		return "we/weStatus_search1";
	}

	// 확정 후 수질 측정 결과
	@RequestMapping(value={"/", "weStatus_search2"})
	public String weStatus_search2(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="month", required=false) String month,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", weService.weStatus_search2(year, month, mw));
		
		return "we/weStatus_search2";
	}
	
	// gis -> 확정 후 수질 측정 결과
	@RequestMapping(value={"/", "weStatus_search3"})
	public String weStatus_search3(
			@RequestParam(value="ptno", required=false) String ptno,
			Model model) {
		
		model.addAttribute("result", weService.weStatus_search3(ptno));
		
		return "we/weStatus_search3";
	}
	
	@RequestMapping(value={"/", "weStatus_photo"})
	public String weStatus_photo(
			@RequestParam(value="ptno", required=false) String ptno,
			Model model) {
		
		model.addAttribute("result", weService.weStatus_photo(ptno));
		
		return "we/weStatus_photo";
	}
	
	@RequestMapping(value={"/", "weStatus_movie"})
	public String weStatus_movie(
			@RequestParam(value="ptno", required=false) String ptno,
			Model model) {
		
		model.addAttribute("result", weService.weStatus_movie(ptno));
		
		return "we/weStatus_movie";
	}
	
	@RequestMapping(value={"/", "weStatus_chart1"})
	public String weStatus_chart1(
			@RequestParam(value="ptno", required=false) String ptno,
			Model model) {
		
		model.addAttribute("result", weService.weStatus_chart1(ptno));
		
		return "we/weStatus_chart1";
	}
	
	@RequestMapping(value={"/", "weStatus_chart2"})
	public String weStatus_chart2(
			@RequestParam(value="ptno", required=false) String ptno,
			@RequestParam(value="year", required=false) String year,
			Model model) {
		
		model.addAttribute("result", weService.weStatus_chart2(ptno, year));
		
		return "we/weStatus_chart2";
	}
	
	@RequestMapping(value={"/", "weStatus_year"})
	public void weStatus_year(
			@RequestParam(value="weStatus_year", required=false) String weStatus_year,
			Model model) {

		model.addAttribute("result", weService.weStatus_year());
	}
	
	// weWater
	@RequestMapping(value={"/", "weWater_chart1"})
	public String weWater_chart1(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", weService.weWater_chart1(mw));
		return "we/weWater_chart1";
	}
	
	
	// weWater3 (신규 12-21 김두성)
		/*@RequestMapping(value={"/", "weWater_chart3"})
		public String weWater_chart3(Model model) {
			
			model.addAttribute("result", weService.weWater_chart3());
			return "we/weWater_chart3";
		}
	*/
	
	// 좋은물 현황 차트
		@RequestMapping(value={"/", "weWater_chart2.json"})
		public String weWater_chart2(
				@RequestParam(value="search_type_year", required=false) String search_type_year,
				@RequestParam(value="search_type_mw", required=false) String search_type_mw,
				Model model) {
			System.out.println("year====="+search_type_year);
			System.out.println("mw====="+search_type_mw);
			
			
			model.addAttribute("result", weService.weWater_chart2(search_type_year,search_type_mw));
			return "we/weWater_chart2";
		}
	
	/**
	 * @Method Name  : weStatus_mw_search_result
	 * @작성일   : 2013. 10. 17. 
	 * @작성자   : KimDooSung
	 * @변경이력  :
	 * @Method 설명 : 수질,수생태 검색 메서드
	 * @param wuStatus_search_val
	 * @param model
	 */
	@RequestMapping(value={"/", "weWater_mw_search_result"})
	public void weWater_mw_search_result(
			@RequestParam(value="search_type_year", required=false) String search_type_year,
			@RequestParam(value="search_type_mw", required=false) String search_type_mw,
			Model model
			){
		
		model.addAttribute("result", weService.weWater_mwsearchresult(search_type_year,search_type_mw));	
	}
	
	// 생활환경기준 BOD 지도용 데이터
	@RequestMapping(value={"/", "waterDataForMap"})
	public void waterDataForMap(Model model) {
		model.addAttribute("result", weService.waterDataForMap());
	}	
}

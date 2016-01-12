package com.ndk.wu.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.web.BaseController;
import com.ndk.wu.service.WuService;

@Controller
@RequestMapping(value="/wu/", method={RequestMethod.GET, RequestMethod.POST})
public class WuController extends BaseController {

	@Autowired
	WuService wuService;

	// common
	@RequestMapping(value={"/", "common_mw"})
	public void common_mw(
			@RequestParam(value="common_mw", required=false) String common_mw,
			Model model) {

		model.addAttribute("result", wuService.common_mw());
	}
	
	@RequestMapping(value={"/", "common_sw"})
	public String common_sw(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wuService.common_sw(mw));
		return "db/common_sw";
	}
	
	@RequestMapping(value={"/", "common_sido"})
	public void common_sido(
			@RequestParam(value="common_sido", required=false) String common_sido,
			Model model) {

		model.addAttribute("result", wuService.common_sido());
	}
	
	@RequestMapping(value={"/", "common_sgg"})
	public String common_sgg(
			@RequestParam(value="sido", required=false) String sido,
			Model model) {

		model.addAttribute("result", wuService.common_sgg(sido));
		return "db/common_sgg";
	}

	// wuStatus
	@RequestMapping(value={"/", "wuStatus_search"})
	public void wuStatus_search(
			@RequestParam(value="wuStatus_search", required=false) String wuStatus_search,
			Model model) {

		model.addAttribute("result", wuService.wuStatus_search());
	}
	
	@RequestMapping(value={"/", "wuStatus_chart1"})
	public String wuStatus_chart1(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", wuService.wuStatus_chart1(mw));
		return "wu/wuStatus_chart1";
	}
	
	@RequestMapping(value={"/", "wuStatus_chart2"})
	public String wuStatus_chart2(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", wuService.wuStatus_chart2(mw));
		return "wu/wuStatus_chart2";
	}

	// wuSewer
	@RequestMapping(value={"/", "wuSewer_search"})
	public void wuSewer_search(
			@RequestParam(value="wuSewer_search", required=false) String wuSewer_search,
			Model model) {

		model.addAttribute("result", wuService.wuSewer_search());
	}
	
	@RequestMapping(value={"/", "wuSewer_chart1"})
	public String wuSewer_chart1(
			@RequestParam(value="start_year", required=false) String start_year,
			@RequestParam(value="end_year", required=false) String end_year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", wuService.wuSewer_chart1(start_year, end_year, mw));
		return "wu/wuSewer_chart1";
	}
	
	@RequestMapping(value={"/", "wuSewer_year1"})
	public String wuSewer_year1(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		
		model.addAttribute("result", wuService.wuSewer_year1(mw));
		return "wu/wuSewer_year1";
	}
	
	@RequestMapping(value={"/", "wuSewer_chart2"})
	public String wuSewer_chart2(
			@RequestParam(value="start_year", required=false) String start_year,
			@RequestParam(value="end_year", required=false) String end_year,
			@RequestParam(value="sido", required=false) String sido,
			@RequestParam(value="sgg", required=false) String sgg,
			Model model) {
		
		model.addAttribute("result", wuService.wuSewer_chart2(start_year, end_year, sido, sgg));
		return "wu/wuSewer_chart2";
	}
	
	@RequestMapping(value={"/", "wuSewer_year2"})
	public String wuSewer_year2(
			@RequestParam(value="sido", required=false) String sido,
			@RequestParam(value="sgg", required=false) String sgg,
			Model model) {
		model.addAttribute("result", wuService.wuSewer_year2(sido,sgg));
		return "wu/wuSewer_year2";
	}

	// wuFarm
	@RequestMapping(value={"/", "wuFarm_search"})
	public void wuFarm_search(
			@RequestParam(value="wuFarm_search", required=false) String wuFarm_search,
			Model model) {

		model.addAttribute("result", wuService.wuFarm_search());
	}
	
	/**
	 * @Method Name  : wuStatus_mw_search_result
	 * @작성일   : 2013. 10. 16. 
	 * @작성자   : KimDooSung
	 * @변경이력  :
	 * @Method 설명 : 유역현황>현황 행정구역별 면적 검색 요청을 받는 메서드
	 * @param wuStatus_search_val
	 * @param model
	 */
	@RequestMapping(value={"/", "wuStatus_mw_search_result"})
	public void wuStatus_mw_search_result(
			@RequestParam(value="wuStatus_search_val", required=false) String wuStatus_search_val,
			Model model
			){
		
		model.addAttribute("result", wuService.wuStatus_mwsearchresult());	
	}
	
	/**
	 * @Method Name  : wuStatus_mw_search_result
	 * @작성일   : 2013. 10. 16. 
	 * @작성자   : KimDooSung
	 * @변경이력  :
	 * @Method 설명 : 물이용현황>하수도  메서드
	 * @param wuStatus_search_val
	 * @param model
	 */
	@RequestMapping(value={"/", "wuSewer_mw_search_result"})
	public void wuSewer_mw_search_result(
			@RequestParam(value="wuSewer_search_val", required=false) String wuSewer_search_val,
			Model model
			){
		
		model.addAttribute("result", wuService.wuSewer_mwsearchresult());	
	}
	
	/**
	 * @Method Name  : wuStatus_mw_search_result
	 * @작성일   : 2013. 10. 17. 
	 * @작성자   : KimDooSung
	 * @변경이력  :
	 * @Method 설명 : 물이용현황>하수도(시.구.군)  메서드
	 * @param wuStatus_search_val
	 * @param model
	 */
	@RequestMapping(value={"/", "wuSewer_sigungu_search_result"})
	public void wuSewer_sigungu_search_result(
			@RequestParam(value="sigungu_search_val", required=false) String sigungu_search_val,
			Model model
			){
		
		model.addAttribute("result", wuService.wuSewer_SigunguSearchResult());	
	}

}

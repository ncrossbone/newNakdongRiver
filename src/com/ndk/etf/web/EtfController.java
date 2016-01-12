package com.ndk.etf.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.web.BaseController;
import com.ndk.etf.service.EtfService;

@Controller
@RequestMapping(value="/etf/", method={RequestMethod.GET, RequestMethod.POST})
public class EtfController extends BaseController {

	@Autowired
	EtfService etfService;

	// common
	@RequestMapping(value={"/", "common_mw"})
	public void common_mw(
			@RequestParam(value="common_mw", required=false) String common_mw,
			Model model) {

		model.addAttribute("result", etfService.common_mw());
	}
	
	@RequestMapping(value={"/", "common_sw"})
	public String common_sw(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", etfService.common_sw(mw));
		return "db/common_sw";
	}
	
	@RequestMapping(value={"/", "common_sido"})
	public void common_sido(
			@RequestParam(value="common_sido", required=false) String common_sido,
			Model model) {

		model.addAttribute("result", etfService.common_sido());
	}
	
	@RequestMapping(value={"/", "common_sgg"})
	public String common_sgg(
			@RequestParam(value="sido", required=false) String sido,
			Model model) {

		model.addAttribute("result", etfService.common_sgg(sido));
		return "db/common_sgg";
	}

	// etfStatus
	@RequestMapping(value={"/", "etfStatus_search"})
	public void etfStatus_search(
			@RequestParam(value="etfStatus_search", required=false) String etfStatus_search,
			Model model) {

		model.addAttribute("result", etfService.etfStatus_search());
	}
	
	// 환경기초시설 검색
		@RequestMapping(value={"/", "etfStatus_chart1"})
		public String etfStatus_chart1(
				@RequestParam(value="search_type_type", required=false) String search_type_type,
				@RequestParam(value="search_type_mw", required=false) String search_type_mw,
				@RequestParam(value="search_type_sido", required=false) String search_type_sido,
				@RequestParam(value="search_type_sgg", required=false) String search_type_sgg,
				Model model) {
			if("none".equals(search_type_type)){
				search_type_type = null;
			}
			if("none".equals(search_type_mw)){
				search_type_mw = null;
			}
			if("none".equals(search_type_sido)){
				search_type_sido = null;
			}
			if("none".equals(search_type_sgg)){
				search_type_sgg = null;
			}
			model.addAttribute("result", etfService.etfStatus_chart1(search_type_type,search_type_mw,search_type_sido,search_type_sgg));
			
			return "etf/etfStatus_chart1";
		}
}

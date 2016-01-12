package com.ndk.wps.web;


import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.web.BaseController;
import com.ndk.wps.service.WpsService;

@Controller
@RequestMapping(value="/wps/", method={RequestMethod.GET, RequestMethod.POST})
public class WpsController extends BaseController {

	@Autowired
	WpsService wpsService;

	// common
	@RequestMapping(value={"/", "common_mw"})
	public void common_mw(
			@RequestParam(value="common_mw", required=false) String common_mw,
			Model model) {

		model.addAttribute("result", wpsService.common_mw());
	}
	
	@RequestMapping(value={"/", "common_sw"})
	public String common_sw(
			@RequestParam(value="mw", required=false) String mw,
			Model model) {
		model.addAttribute("result", wpsService.common_sw(mw));
		
		return "db/common_sw";
	}
	
	@RequestMapping(value={"/", "common_sido"})
	public void common_sido(
			@RequestParam(value="common_sido", required=false) String common_sido,
			Model model) {

		model.addAttribute("result", wpsService.common_sido());
	}
	
	@RequestMapping(value={"/", "common_sgg"})
	public String common_sgg(
			@RequestParam(value="sido", required=false) String sido,
			Model model) {

		model.addAttribute("result", wpsService.common_sgg(sido));
		return "db/common_sgg";
	}

	// wpsStatus
	@RequestMapping(value={"/", "wpsStatus_year"})
	public void wpsStatus_year(
			@RequestParam(value="wpsStatus_year", required=false) String wpsStatus_year,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_year());
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart11"})
	public String wpsStatus_chart11(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart11(year, mw));
		return "wps/wpsStatus_chart11";
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart12"})
	public String wpsStatus_chart12(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart12(year, mw));
		return "wps/wpsStatus_chart12";
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart21"})
	public String wpsStatus_chart21(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart21(year, mw));
		return "wps/wpsStatus_chart21";
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart22"})
	public String wpsStatus_chart22(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart22(year, mw));
		return "wps/wpsStatus_chart22";
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart31"})
	public String wpsStatus_chart31(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart31(year, mw));
		return "wps/wpsStatus_chart31";
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart32"})
	public String wpsStatus_chart32(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart32(year, mw));
		return "wps/wpsStatus_chart32";
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart41"})
	public String wpsStatus_chart41(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart41(year, mw));
		return "wps/wpsStatus_chart41";
	}
	
	@RequestMapping(value={"/", "wpsStatus_chart51"})
	public String wpsStatus_chart51(
			@RequestParam(value="year", required=false) String year,
			@RequestParam(value="mw", required=false) String mw,
			Model model) {

		model.addAttribute("result", wpsService.wpsStatus_chart51(year, mw));
		return "wps/wpsStatus_chart51";
	}
	
	@RequestMapping(value={"/", "wpsStatus_animal.json"})
	public String wpsStatus_chart_animal(
			@RequestParam(value="search_type_mw", required=false) String search_type_mw,
			@RequestParam(value="search_type_sw", required=false) String search_type_sw,
			@RequestParam(value="search_type_sido", required=false) String search_type_sido,
			@RequestParam(value="search_type_sgg", required=false) String search_type_sgg,
			@RequestParam(value="search_type_work", required=false) String search_type_work,
			@RequestParam(value="search_type_num", required=false) String search_type_num,
			@RequestParam(value="search_type_ani", required=false) String search_type_ani,
			Model model) {
		
		try {
			search_type_mw = URLDecoder.decode(search_type_mw, "UTF-8");
			search_type_sw =  URLDecoder.decode(search_type_sw, "UTF-8");
			search_type_sido = URLDecoder.decode(search_type_sido, "UTF-8");
			search_type_sgg = URLDecoder.decode(search_type_sgg, "UTF-8");
			search_type_ani = URLDecoder.decode(search_type_ani, "UTF-8");
		} catch (UnsupportedEncodingException e) {

			e.printStackTrace();
		}
		
		//null체크
		if("none".equals(search_type_mw)||"중권역".equals(search_type_mw)){
			search_type_mw= null;			
		}
		
		if("none".equals(search_type_sw)||"소권역".equals(search_type_sw)){
			search_type_sw= null;			
		}
		
		if("none".equals(search_type_sido)||"시도".equals(search_type_sido)){
			search_type_sido= null;	
			System.out.println("search_type_sido===="+search_type_sido);
		}
		
		if("none".equals(search_type_sgg)||"시군구".equals(search_type_sgg)){
			search_type_sgg= null;
			System.out.println("search_type_sgg===="+search_type_sgg);
		}
		
		if("none".equals(search_type_num)){
			search_type_num= null;			
		}
		
		if("none".equals(search_type_ani)){
			search_type_ani= null;			
		}
		
		
		//업종 구별 하는 곳 
		if("air".equals(search_type_work)){
			model.addAttribute("result", wpsService.wpsStatus_chart_air(search_type_mw,search_type_sw,search_type_sido,search_type_sgg,search_type_num));
		}

		if("water".equals(search_type_work)){
			model.addAttribute("result", wpsService.wpsStatus_chart_water(search_type_mw,search_type_sw,search_type_sido,search_type_sgg,search_type_num));
		}
		
		if("animal".equals(search_type_work)){
			model.addAttribute("result", wpsService.wpsStatus_chart_animal(search_type_mw,search_type_sw,search_type_sido,search_type_sgg,search_type_ani));
		}

		
		return "wps/wpsStatus_animal";
	}

}

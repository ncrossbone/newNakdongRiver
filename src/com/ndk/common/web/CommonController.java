package com.ndk.common.web;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.web.BaseController;
import com.ndk.common.service.CommonService;
import com.util.ConvertImage;

@Controller
@RequestMapping(value = "/common/", method = { RequestMethod.GET,
		RequestMethod.POST })
public class CommonController extends BaseController {

	@Autowired
	CommonService commonService;

	@RequestMapping(value = { "/", "common_mwmove" })
	public void common_mwmove(
			@RequestParam(value = "common_mwmove", required = false) String common_mwmove,
			Model model) {

		model.addAttribute("result", commonService.common_mwmove());
	}

	// 추가작업 2013 - 11 -09 김두성

	// 댐정보
	@RequestMapping(value = { "/", "common_testchart.json" })
	public String common_testchart(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testchart());
		return "common/common_testchart";
	}

	@RequestMapping(value = { "/", "common_testchart1.json" })
	public String common_testchart1(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testchart());
		return "common/common_testchart1";
	}

	// 보정보
	@RequestMapping(value = { "/", "common_testDMOBSIF.json" })
	public String common_testDMOBSIF(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testDMOBSIF());
		return "common/common_testDMOBSIF";
	}

	@RequestMapping(value = { "/", "common_testDMHR.json" })
	public String common_testDMHR(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testDMHR());
		return "common/common_testDMHR";
	}

	// 우량관측소(그리드)
	@RequestMapping(value = { "/", "common_testRFHR.json" })
	public String common_testRFHR(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testRFHR());
		return "common/common_testDMHR";
	}

	// 우량관측소(차트 좌측)
	@RequestMapping(value = { "/", "common_testRFHR2.json" })
	public String common_testRFHR2(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testRFHR2());
		return "common/common_testDMHR2";
	}

	// 우량관측소(차트 좌측)
	@RequestMapping(value = { "/", "common_testRFHR3.json" })
	public String common_testRFHR3(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testRFHR3());
		return "common/common_testDMHR3";
	}

	// 기상관측소(그리드)
	@RequestMapping(value = { "/", "common_testWATER_RNDY.json" })
	public String common_testWATER_RNDY(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testWATER_RNDY());
		return "common/common_testWATER_RNDY";
	}

	// 기상관측소(차트좌측)
	@RequestMapping(value = { "/", "common_testWATER_RNDY2.json" })
	public String common_testWATER_RNDY2(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testWATER_RNDY2());
		return "common/common_testWATER_RNDY2";
	}

	// 기상관측소(차트우측)
	@RequestMapping(value = { "/", "common_testWATER_RNDY3.json" })
	public String common_testWATER_RNDY3(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testWATER_RNDY3());
		return "common/common_testWATER_RNDY3";
	}

	// 수생태평가지점
	@RequestMapping(value = { "/", "common_testKESTI_TPMV.json" })
	public String common_testKESTI_TPMV(
			@RequestParam(value = "sgg", required = false) String sgg,
			Model model) {

		model.addAttribute("result", commonService.common_testKESTI_TPMV());
		return "common/common_testKESTI_TPMV";
	}
	
	// 수생태평가지점
	@RequestMapping(value = { "/", "common_chart_image_save.json" })
	public List<?> common_chart_image_save(
			@RequestParam(value = "svg", required = false) String svgTag, Model model) {
		
		ConvertImage convertImage = new ConvertImage();
		String fileName = convertImage.getImageStream(svgTag);
		
		model.addAttribute("fileName", fileName);
		List<Hashtable<String, String>> list = new ArrayList<Hashtable<String,String>>();
		Hashtable<String, String> result = new Hashtable<String, String>();
		result.put("fileName", fileName);
		list.add(result);
		return list;
	}
}

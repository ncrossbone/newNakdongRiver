package com.ndk.common.service;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.service.BaseService;
import com.util.ConvertImage;

@Service
public class CommonServiceImpl extends BaseService implements CommonService {
	@Autowired
	CommonDaoImpl commonDao;

	public List<?> common_mwmove() {
		return commonDao.common_mwmove();
	}

	// 2013-11-08 test 보정보 그리드 json
	public List<?> common_testchart() {
		return commonDao.common_testchart();
	}

	// 2013-11-08 test 보정보 차트 json
	public List<?> common_testchart1() {
		return commonDao.common_testchart1();
	}

	// 2013-11-09 test 보정보 그리드 json
	public List<?> common_testDMOBSIF() {
		return commonDao.common_testDMOBSIF();
	}

	// 2013-11-09 test 보정보 차트 json
	public List<?> common_testDMHR() {
		return commonDao.common_testDMHR();
	}

	// 2013-11-09 test 우량관측소 json
	public List<?> common_testRFHR() {
		return commonDao.common_testRFHR();
	}

	// 2013-11-09 test 우량관측소 차트우측 json
	public List<?> common_testRFHR2() {
		return commonDao.common_testRFHR2();
	}

	// 2013-11-09 test 우량관측소 차트우측 json
	public List<?> common_testRFHR3() {
		return commonDao.common_testRFHR3();
	}

	// 2013-11-09 test 기상관측소 그리드 json
	public List<?> common_testWATER_RNDY() {
		return commonDao.common_testWATER_RNDY();
	}

	// 2013-11-09 test 기상관측소 차트좌측 json
	public List<?> common_testWATER_RNDY2() {
		return commonDao.common_testWATER_RNDY2();
	}

	// 2013-11-09 test 기상관측소 차트우측 json
	public List<?> common_testWATER_RNDY3() {
		return commonDao.common_testWATER_RNDY3();
	}

	// 2013-11-09 test 수생태평가지점
	public List<?> common_testKESTI_TPMV() {
		return commonDao.common_testKESTI_TPMV();
	}

	// 수생태평가지점
	public List<?> common_chart_image_save(
			@RequestParam(value = "svg", required = false) String svgTag,
			Model model) {

		ConvertImage convertImage = new ConvertImage();
		String fileName = convertImage.getImageStream(svgTag);

		model.addAttribute("fileName", fileName);
		List<Hashtable<String, String>> list = new ArrayList<Hashtable<String, String>>();
		Hashtable<String, String> result = new Hashtable<String, String>();
		result.put("fileName", fileName);
		list.add(result);
		return list;
	}
}
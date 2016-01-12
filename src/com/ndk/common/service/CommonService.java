package com.ndk.common.service;

import java.util.List;

public interface CommonService {

	public List<?> common_mwmove();
	//2013 - 11 - 08 추가작업 (보,댐,우량관측소,수생태평가지점)
	//댐
	public List<?> common_testchart();	
	public List<?> common_testchart1();
	//보
	public List<?> common_testDMOBSIF();	
	public List<?> common_testDMHR();
	
	//우량관측소
	public List<?> common_testRFHR();//그리드TEST
	public List<?> common_testRFHR2();//차트좌측
	public List<?> common_testRFHR3();//차트우측
	
	//기상관측소
	
	public List<?> common_testWATER_RNDY();//그리드TEST
	public List<?> common_testWATER_RNDY2();//차트좌측
	public List<?> common_testWATER_RNDY3();//차트우측
	
	//수생태평가지점
	
	public List<?> common_testKESTI_TPMV();//차트
	
}

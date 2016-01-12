package com.ndk.common.service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.*;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;

@Repository
public class CommonDaoImpl extends BaseDao {// implements MenuDao {

	public List<?> common_mwmove() {
		return getSqlMapClientTemplate().queryForList("common.mwmove");
	}
	
	
	//2013-11-08 댐 그리드
	public List<?> common_testchart() {
		return getSqlMapClientTemplate().queryForList("common.BOOBSIF");
	}
	//2013-11-08 댐차트	
	public List<?> common_testchart1() {
		return getSqlMapClientTemplate().queryForList("common.BOHR");
	}
	
	//2013-11-09 보차트
		public List<?> common_testDMOBSIF() {
			return getSqlMapClientTemplate().queryForList("common.DMOBSIF");
		}
	
	
	//2013-11-09 보차트
	public List<?> common_testDMHR() {
		return getSqlMapClientTemplate().queryForList("common.DMHR");
	}
	
	//2013-11-09 우량관측소
		public List<?> common_testRFHR() {
			return getSqlMapClientTemplate().queryForList("common.RFHR");
		}
	
	//2013-11-09 우량관측소(차트 좌측)
			public List<?> common_testRFHR2() {
				return getSqlMapClientTemplate().queryForList("common.RFHR2");
			}
	
	//2013-11-09 우량관측소(차트 우측)
			public List<?> common_testRFHR3() {
				return getSqlMapClientTemplate().queryForList("common.RFHR3");
			}
	//2013 - 11 -09 기상관측소(그리드)
			public List<?> common_testWATER_RNDY() {
				return getSqlMapClientTemplate().queryForList("common.WATER_RNDY");
			}
			
	//2013 - 11 -09 기상관측소(차트 좌측)
			public List<?> common_testWATER_RNDY2() {
				return getSqlMapClientTemplate().queryForList("common.WATER_RNDY2");
			}
			
	//2013 - 11 -09 기상관측소(차트 우측)
			public List<?> common_testWATER_RNDY3() {
				return getSqlMapClientTemplate().queryForList("common.WATER_RNDY3");
			}
			
	//2013 - 11 -09 수생태평가지점
			public List<?> common_testKESTI_TPMV() {
				return getSqlMapClientTemplate().queryForList("common.KESTI_TPMV");
			}

}

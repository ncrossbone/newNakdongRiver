package com.login.service;

import java.util.List;

import com.login.model.TuserVO;

public interface UesrManageService {

	// 로그인 처리
	TuserVO selectLoginTuser(TuserVO tuserVo) throws Exception;

	public List<TuserVO> selectLoginTuser2(TuserVO tuserVo) throws Exception;

	public TuserVO USER_Login(TuserVO tuserVO);

	public List<?> USER_test2(String SEARCH_VALUE); 

	public List<?> selectsublist(String USER_ID);

	public int admin_modify(TuserVO tuserVo);

	public String IdCheck(TuserVO tuserVo);
	
	public String LoginCheck(TuserVO tuserVo);

	public int admin_insert(TuserVO tuserVO);

	public int deleteID(String uSER_ID);

}

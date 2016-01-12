package com.login.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;
import com.login.model.TuserVO;


@Repository("UserManageDAO")
public class UserManageDAO extends BaseDao {

	public TuserVO selectLoginTuser(TuserVO tuserVO) throws Exception {
		
		
		return (TuserVO) getSqlMapClientTemplate().queryForObject("common.selectLoginTuser",tuserVO);
	}

	public List<TuserVO> selectLoginTuser2(TuserVO tuserVO) throws Exception {
		return getSqlMapClientTemplate().queryForList("common.selectLoginTuser",tuserVO);
	}
	
	public TuserVO USER_Login(TuserVO tuserVO) {
		
		return (TuserVO) getSqlMapClientTemplate().queryForList("common.selectLoginTuser",tuserVO);
	}
	
	public List<?> USER_test2(String SEARCH_VALUE) {
		return getSqlMapClientTemplate().queryForList("common.selectLoginTuser2",SEARCH_VALUE);
	}
	
	public List<?> selectsublist(String USER_ID) {
		return getSqlMapClientTemplate().queryForList("common.selectsublist",USER_ID);
	}
	public int admin_modify(TuserVO tuserVO) {
		return getSqlMapClientTemplate().update("common.admin_modify",tuserVO);
	}
	
	public String LoginCheck(TuserVO tuserVO){
		return(String) getSqlMapClientTemplate().queryForObject("common.LoginCheck",tuserVO);
	}
	
	public String IdCheck(TuserVO tuserVO){
		return(String) getSqlMapClientTemplate().queryForObject("common.IdCheck",tuserVO);
	}

	public int admin_insert(TuserVO tuserVO) {

		return getSqlMapClientTemplate().update("common.admin_insert",tuserVO);
	}
	
	public int deleteID(String USER_ID) {

		return getSqlMapClientTemplate().update("common.deleteID",USER_ID);
	}
	

}

package com.login.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.base.service.BaseService;
import com.login.model.TuserVO;

@Service("UserManagerService")
public class UserManageServiceImpl extends BaseService implements UesrManageService {
	
	@Resource(name="UserManageDAO")
	private UserManageDAO userDAO;
	
	public TuserVO selectLoginTuser(TuserVO tuserVO) throws Exception {
		return userDAO.selectLoginTuser(tuserVO);
	}
	
	public List<TuserVO> selectLoginTuser2(TuserVO tuserVO) throws Exception {
		return userDAO.selectLoginTuser2(tuserVO);
	}
	
	public TuserVO USER_Login(TuserVO tuserVO) {
		return userDAO.USER_Login(tuserVO);
		}
	
	public List<?> USER_test2(String SEARCH_VALUE) {
		return userDAO.USER_test2(SEARCH_VALUE);
	}
	
	public List<?> selectsublist(String USER_ID) {
		return userDAO.selectsublist(USER_ID);
		}
	
	public int admin_modify(TuserVO tuserVO) {
		return userDAO.admin_modify(tuserVO);
		}
	
	public String IdCheck(TuserVO tuserVO){
		return userDAO.IdCheck(tuserVO);
	}
	

	public String LoginCheck(TuserVO tuserVO){
		return userDAO.LoginCheck(tuserVO);
	}

	@Override
	public int admin_insert(TuserVO tuserVO) {
		return userDAO.admin_insert(tuserVO);
		
	}
	
	@Override
	public int deleteID(String USER_ID) {
		return userDAO.deleteID(USER_ID);
		
	}
	
}

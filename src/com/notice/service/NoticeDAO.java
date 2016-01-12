package com.notice.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;
import com.login.model.TuserVO;
import com.notice.model.NoticeVO;

@Repository("NoticeDAO")
public class NoticeDAO extends BaseDao {

	public List<?> USER_test2() {
		
		return getSqlMapClientTemplate().queryForList("notice.notice_List");
	}

	public int notice_insert(NoticeVO noticeVO) {
		
		return getSqlMapClientTemplate().update("notice.notice_insert",noticeVO);
	}

	public List<?> selectsublist(String NOTICE_CODE) {
		return getSqlMapClientTemplate().queryForList("notice.selectsublist",NOTICE_CODE);
	}
	
	public int selectupcount(String NOTICE_CODE) {
		return getSqlMapClientTemplate().update("notice.selectupcount",NOTICE_CODE);
	}
	
	
	public int selectmodify(NoticeVO noticeVO) {
		return getSqlMapClientTemplate().update("notice.selectmodify",noticeVO);
	}
	
	public int deleteNotice(String NOTICE_CODE) {

		return getSqlMapClientTemplate().update("notice.deleteNotice",NOTICE_CODE);
	}
	
	

	

}

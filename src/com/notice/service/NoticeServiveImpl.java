package com.notice.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.base.service.BaseService;
import com.notice.model.NoticeVO;
import com.notice.service.NoticeService;
import com.notice.service.NoticeDAO;


@Service("NoticeService")
public class NoticeServiveImpl extends BaseService implements NoticeService{
	
	@Resource(name="NoticeDAO")
	private NoticeDAO NoticeDAO;
	
	public List<?> USER_test2() {
		return NoticeDAO.USER_test2();
		}

	@Override
	public int notice_insert(NoticeVO NoticeVO) {
		return NoticeDAO.notice_insert(NoticeVO);
		
	}
	
	public List<?> selectsublist(String NOTICE_CODE) {
		return NoticeDAO.selectsublist(NOTICE_CODE);
		}
	
	public int selectupcount(String NOTICE_CODE) {
		return NoticeDAO.selectupcount(NOTICE_CODE);
		}
	
	public int selectmodify(NoticeVO NoticeVO) {
		
		return NoticeDAO.selectmodify(NoticeVO);
		}
	@Override
	public int deleteNotice(String NOTICE_CODE) {
		return NoticeDAO.deleteNotice(NOTICE_CODE);
		
	}
}

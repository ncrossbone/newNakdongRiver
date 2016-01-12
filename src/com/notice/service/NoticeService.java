package com.notice.service;

import java.util.List;

import com.notice.model.NoticeVO;

public interface NoticeService {

	public  List<?>  USER_test2();
	
	public  int  notice_insert(NoticeVO NoticeVO);

	public List<?> selectsublist(String NOTICE_CODE);
	
	public int selectupcount(String NOTICE_CODE);
	
	public int selectmodify(NoticeVO NoticeVO);
	
	public int  deleteNotice(String NOTICE_CODE);
	

}

package com.popup.service;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.popup.dao.PopupDao;

@Service("popupService")
public class PopupServiceImpl implements PopupService{
	@Resource(name="popupDao")
	PopupDao popupDao;

	@Override
	public String insertSurvey(Map<String, Object> cMap) throws Exception {
		return popupDao.insertSurvey(cMap);
	}
	
	

	
}

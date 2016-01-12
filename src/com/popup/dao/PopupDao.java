package com.popup.dao;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;

@Repository("popupDao")
public class PopupDao  extends BaseDao {

	/**쿼리 실행결과가  1이면 성공, 0이면 실패임
	 * @param cMap
	 * @return
	 * @throws Exception
	 */
	public String insertSurvey(Map<String, Object> cMap) throws Exception{
		return String.valueOf(update("popup.insertSurvey", cMap));
	}

}

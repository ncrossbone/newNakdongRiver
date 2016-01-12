package com.board.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.base.service.BaseDao;
import com.login.model.TuserVO;
import com.board.model.BoardVO;

@Repository("BoardDAO")
public class BoardDAO extends BaseDao {

	public List<?> board_list(String BOARD_NO, String START_NO, String END_NO, String SEARCH_TYPE, String SEARCH_TEXT, String SEARCH_YEAR) {
		Map<String, String> param = new HashMap<String, String>();
		param.put("BOARD_NO",BOARD_NO);
	    param.put("START_NO", START_NO);
	    param.put("END_NO", END_NO);
	    param.put("SEARCH_TYPE", SEARCH_TYPE);
	    param.put("SEARCH_TEXT", SEARCH_TEXT);
	    param.put("SEARCH_YEAR", SEARCH_YEAR);
		return getSqlMapClientTemplate().queryForList("board.board_list", param);
	}
	
	public List<?> board_total_cnt(String BOARD_NO) {
		Map<String, String> param = new HashMap<String, String>();
		param.put("BOARD_NO", BOARD_NO);
		return getSqlMapClientTemplate().queryForList("board.board_total_cnt",param);
	}
	
	public List<?> board_res_year(String BOARD_NO) {
		Map<String, String> param = new HashMap<String, String>();
		param.put("BOARD_NO", BOARD_NO);
		return getSqlMapClientTemplate().queryForList("board.board_res_year",param);
	}

	public int board_insert(BoardVO boardVO) {
		return getSqlMapClientTemplate().update("board.board_insert",boardVO);
	}

	public List<?> board_view(String board_CODE) {
		return getSqlMapClientTemplate().queryForList("board.board_view",board_CODE);
	}
	
	public int board_count(String board_CODE) {
		return getSqlMapClientTemplate().update("board.board_count",board_CODE);
	}
	
	
	public int board_modify(BoardVO boardVO) {
		return getSqlMapClientTemplate().update("board.board_modify",boardVO);
	}
	
	public int board_delete(String board_CODE) {

		return getSqlMapClientTemplate().update("board.board_delete",board_CODE);
	}
	
	
	

	

}

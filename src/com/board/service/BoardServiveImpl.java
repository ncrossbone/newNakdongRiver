package com.board.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.base.service.BaseService;
import com.board.model.BoardVO;
import com.board.service.BoardService;
import com.board.service.BoardDAO;


@Service("BoardService")
public class BoardServiveImpl extends BaseService implements BoardService{
	
	@Resource(name="BoardDAO")
	private BoardDAO boardDAO;
	
	public List<?> board_list(String BOARD_NO, String START_NO, String END_NO, String SEARCH_TYPE, String SEARCH_TEXT, String SEARCH_YEAR) {
		return boardDAO.board_list( BOARD_NO,  START_NO,  END_NO, SEARCH_TYPE, SEARCH_TEXT, SEARCH_YEAR);
		}
	public List<?> board_total_cnt(String BOARD_NO) {
		return boardDAO.board_total_cnt(BOARD_NO);
	}
	@Override
	public int board_insert(BoardVO boardVO) {
		return boardDAO.board_insert(boardVO);
		
	}
	public List<?> board_res_year(String BOARD_NO) {
		return boardDAO.board_res_year(BOARD_NO);
	}
	public List<?> board_view(String board_CODE) {
		return boardDAO.board_view(board_CODE);
		}
	
	public int board_count(String board_CODE) {
		return boardDAO.board_count(board_CODE);
		}
	
	public int board_modify(BoardVO boardVO) {
		
		return boardDAO.board_modify(boardVO);
		}
	@Override
	public int board_delete(String board_CODE) {
		return boardDAO.board_delete(board_CODE);
		
	}
}

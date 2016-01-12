package com.board.service;

import java.util.List;

import com.board.model.BoardVO;

public interface BoardService {

	public  List<?>  board_list(String BOARD_NO, String START_NO, String END_NO, String SEARCH_TYPE, String SEARCH_TEXT, String SEARCH_YEAR);
	
	public  List<?>  board_total_cnt(String BOARD_NO);
	
	public  int  board_insert(BoardVO boardVO);

	public List<?> board_view(String board_CODE);
	
	public int board_count(String board_CODE);
	
	public int board_modify(BoardVO boardVO);
	
	public int  board_delete(String board_CODE);
	
	public List<?> board_res_year(String BOARD_NO);
	

}

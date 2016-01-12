package com.board.model;

public class BoardVO {
	
	/**
	 * @return 공지사항 VO
	 */
	
	private String BOARD_NO         ;         //게시판번호
	private String BOARD_SEQ        ;         //게시물번호
	private String BOARD_TITLE      ;         //제목
	private String RES_OWNER        ;         //연구책임자
	private String RES_START_DATE   ;         //연구시작일자
	private String RES_END_DATE     ;         //연구종료일자
	private String RES_COST         ;         //연구비
	private String RES_ORG          ;         //연구기관
	private String RES_AREA         ;         //분야
	private String RES_YEAR         ;         //년도
	private String BOARD_CONTENT    ;         //내용
	private String FILE_NAME        ;         //파일명
	private String REAL_FILE_PATH   ;         //파일위치
	private String CREATE_DATE      ;         //생성일자
	private String MODIFY_DATE      ;         //수정일자
	private String READ_CNT         ;         //조회수
	private String USE_YN           ;         //사용여부
	private int    PAGE_NO			;		  //페이지 번호
	private int    PAGE_PER_CNT   	; 		  //페이지당 글 갯수
	private int	   TOTAL_CNT		;		  // TOTAL_CNT
	private int    START_NO			;
	private int    END_NO			;
	private String SEARCH_TYPE		;
	private String SEARCH_TEXT		;
	private String SEARCH_YRAR		;
	
	public String getBOARD_NO() {
		return BOARD_NO;
	}
	public void setBOARD_NO(String bOARD_NO) {
		BOARD_NO = bOARD_NO;
	}
	public String getBOARD_SEQ() {
		return BOARD_SEQ;
	}
	public void setBOARD_SEQ(String bOARD_SEQ) {
		BOARD_SEQ = bOARD_SEQ;
	}
	public String getBOARD_TITLE() {
		return BOARD_TITLE;
	}
	public void setBOARD_TITLE(String bOARD_TITLE) {
		BOARD_TITLE = bOARD_TITLE;
	}
	public String getRES_OWNER() {
		return RES_OWNER;
	}
	public void setRES_OWNER(String rES_OWNER) {
		RES_OWNER = rES_OWNER;
	}
	public String getRES_START_DATE() {
		return RES_START_DATE;
	}
	public void setRES_START_DATE(String rES_START_DATE) {
		RES_START_DATE = rES_START_DATE;
	}
	public String getRES_END_DATE() {
		return RES_END_DATE;
	}
	public void setRES_END_DATE(String rES_END_DATE) {
		RES_END_DATE = rES_END_DATE;
	}
	public String getRES_COST() {
		return RES_COST;
	}
	public void setRES_COST(String rES_COST) {
		RES_COST = rES_COST;
	}
	public String getRES_ORG() {
		return RES_ORG;
	}
	public void setRES_ORG(String rES_ORG) {
		RES_ORG = rES_ORG;
	}
	public String getRES_AREA() {
		return RES_AREA;
	}
	public void setRES_AREA(String rES_AREA) {
		RES_AREA = rES_AREA;
	}
	public String getRES_YEAR() {
		return RES_YEAR;
	}
	public void setRES_YEAR(String rES_YEAR) {
		RES_YEAR = rES_YEAR;
	}
	public String getBOARD_CONTENT() {
		return BOARD_CONTENT;
	}
	public void setBOARD_CONTENT(String bOARD_CONTENT) {
		BOARD_CONTENT = bOARD_CONTENT;
	}
	public String getFILE_NAME() {
		return FILE_NAME;
	}
	public void setFILE_NAME(String fILE_NAME) {
		FILE_NAME = fILE_NAME;
	}
	public String getREAL_FILE_PATH() {
		return REAL_FILE_PATH;
	}
	public void setREAL_FILE_PATH(String rEAL_FILE_PATH) {
		REAL_FILE_PATH = rEAL_FILE_PATH;
	}
	public String getCREATE_DATE() {
		return CREATE_DATE;
	}
	public void setCREATE_DATE(String cREATE_DATE) {
		CREATE_DATE = cREATE_DATE;
	}
	public String getMODIFY_DATE() {
		return MODIFY_DATE;
	}
	public void setMODIFY_DATE(String mODIFY_DATE) {
		MODIFY_DATE = mODIFY_DATE;
	}
	public String getREAD_CNT() {
		return READ_CNT;
	}
	public void setREAD_CNT(String rEAD_CNT) {
		READ_CNT = rEAD_CNT;
	}
	public String getUSE_YN() {
		return USE_YN;
	}
	public void setUSE_YN(String uSE_YN) {
		USE_YN = uSE_YN;
	}
	public int getPAGE_NO() {
		return PAGE_NO;
	}
	public void setPAGE_NO(int pAGE_NO) {
		PAGE_NO = pAGE_NO;
	}
	public int getPAGE_PER_CNT() {
		return PAGE_PER_CNT;
	}
	public void setPAGE_PER_CNT(int pAGE_PER_CNT) {
		PAGE_PER_CNT = pAGE_PER_CNT;
	}
	public int getTOTAL_CNT() {
		return TOTAL_CNT;
	}
	public void setTOTAL_CNT(int tOTAL_CNT) {
		TOTAL_CNT = tOTAL_CNT;
	}
	public int getSTART_NO() {
		return START_NO;
	}
	public void setSTART_NO(int sTART_NO) {
		START_NO = sTART_NO;
	}
	public int getEND_NO() {
		return END_NO;
	}
	public void setEND_NO(int eND_NO) {
		END_NO = eND_NO;
	}
	public String getSEARCH_TYPE() {
		return SEARCH_TYPE;
	}
	public void setSEARCH_TYPE(String sEARCH_TYPE) {
		SEARCH_TYPE = sEARCH_TYPE;
	}
	public String getSEARCH_TEXT() {
		return SEARCH_TEXT;
	}
	public void setSEARCH_TEXT(String sEARCH_TEXT) {
		SEARCH_TEXT = sEARCH_TEXT;
	}
	public String getSEARCH_YRAR() {
		return SEARCH_YRAR;
	}
	public void setSEARCH_YRAR(String sEARCH_YRAR) {
		SEARCH_YRAR = sEARCH_YRAR;
	}
	
	
	
	
	
	

}

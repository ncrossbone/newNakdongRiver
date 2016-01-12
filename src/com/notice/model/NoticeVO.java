package com.notice.model;

public class NoticeVO {
	
	/**
	 * @return 공지사항 VO
	 */
	
	private String  NOTICE_CODE;
	private String  NOTICE_TITLE;
	private String	NOTICE_CONTENTS;
	private String	UPDTAE_USER_ID;
	private int  HIT_COUNT;
	private String  FILE_PATH;
	private String  USER_YN;
	
	
	
	/**
	 * @return the nOTICE_CODE
	 */
	public String getNOTICE_CODE() {
		return NOTICE_CODE;
	}
	/**
	 * @param nOTICE_CODE the nOTICE_CODE to set
	 */
	public void setNOTICE_CODE(String nOTICE_CODE) {
		NOTICE_CODE = nOTICE_CODE;
	}
	/**
	 * @return the nOTICE_TITLE
	 */
	public String getNOTICE_TITLE() {
		return NOTICE_TITLE;
	}
	/**
	 * @param nOTICE_TITLE the nOTICE_TITLE to set
	 */
	public void setNOTICE_TITLE(String nOTICE_TITLE) {
		NOTICE_TITLE = nOTICE_TITLE;
	}
	/**
	 * @return the nOTICE_CONTENTS
	 */
	public String getNOTICE_CONTENTS() {
		return NOTICE_CONTENTS;
	}
	/**
	 * @param nOTICE_CONTENTS the nOTICE_CONTENTS to set
	 */
	public void setNOTICE_CONTENTS(String nOTICE_CONTENTS) {
		NOTICE_CONTENTS = nOTICE_CONTENTS;
	}
	/**
	 * @return the uPDTAE_USER_ID
	 */
	public String getUPDTAE_USER_ID() {
		return UPDTAE_USER_ID;
	}
	/**
	 * @param uPDTAE_USER_ID the uPDTAE_USER_ID to set
	 */
	public void setUPDTAE_USER_ID(String uPDTAE_USER_ID) {
		UPDTAE_USER_ID = uPDTAE_USER_ID;
	}
	/**
	 * @return the hIT_COUNT
	 */
	public int getHIT_COUNT() {
		return HIT_COUNT;
	}
	/**
	 * @param hIT_COUNT the hIT_COUNT to set
	 */
	public void setHIT_COUNT(int hIT_COUNT) {
		HIT_COUNT = hIT_COUNT;
	}
	/**
	 * @return the fILE_PATH
	 */
	public String getFILE_PATH() {
		return FILE_PATH;
	}
	/**
	 * @param fILE_PATH the fILE_PATH to set
	 */
	public void setFILE_PATH(String fILE_PATH) {
		FILE_PATH = fILE_PATH;
	}
	/**
	 * @return the uSER_YN
	 */
	public String getUSER_YN() {
		return USER_YN;
	}
	/**
	 * @param uSER_YN the uSER_YN to set
	 */
	public void setUSER_YN(String uSER_YN) {
		USER_YN = uSER_YN;
	}
	
	
	
	

}

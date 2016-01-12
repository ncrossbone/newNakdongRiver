package com.util;

import java.util.Enumeration;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


import com.login.model.TuserVO;

import org.springframework.stereotype.Service;

/**
 * @ClassName : TmdlmsUtil.java
 * @Description : 세션에 저장되어 있는 사용자 정보를 가져오는 클래스
 * @Modification Information
 * <pre>
 * @  수정일         수정자              수정내용
 * @ -----------    --------    ---------------------------
 * @ 2012.08.14     허찬영     최초 생성
 * </pre>
 */

@Service("TmdlmsUtil")
public class TmdlmsUtil {
	
	
	
    /**
     * 세션에 저장된 사용자 정보를 객체로 변환하여 리턴
     * 
     * @param request
     * @return UserManageVO
     */
    public TuserVO getSessionUserManage(HttpServletRequest request) {

    	/*
    	 * 운영서버 적용 시
    	 */
        HttpSession session = request.getSession();
        
        TuserVO tuserVO = (TuserVO)session.getAttribute("tuserVO");
        return tuserVO;
        
    }
    
    

    public String getURL(HttpServletRequest request)  {   
    	
    	String forwordUrl = (String) request.getAttribute("javax.servlet.forward.request_uri");
    	String strUrl = forwordUrl.split("/")[1];
    	
    	return strUrl;
    }
}

package com.ndk.pl.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.base.web.BaseController;
import com.ndk.pl.service.PlService;

@Controller
@RequestMapping(value="/pl/", method={RequestMethod.GET, RequestMethod.POST})
public class PlController extends BaseController {
	
	@Autowired
	PlService plService; 
	
	// common 중권역 검색
		@RequestMapping(value={"/", "common_mw"})
		public void common_mw(
				@RequestParam(value="common_mw", required=false) String common_mw,
				Model model) {

			model.addAttribute("result", plService.common_mw());
		}
		
		//시도 리스트
			@RequestMapping(value={"/", "common_sido"})
		public void common_sido(
				@RequestParam(value="common_sido", required=false) String common_sido,
				Model model) {

			model.addAttribute("result", plService.common_sido());
		}
			
			//시군구 리스트
		@RequestMapping(value={"/", "common_sgg"})
		public String common_sgg(
				@RequestParam(value="sido", required=false) String sido,
				Model model) {
	
			model.addAttribute("result", plService.common_sgg(sido));
			return "pl/common_sgg";
		}
	
	//발생부하량 생활계 test chart
	@RequestMapping(value={"/", "plload_chart1"})
	public String plload_chart1(
			@RequestParam(value="search_type_type", required=false) String search_type_type,
			@RequestParam(value="search_type_year", required=false) String search_type_year,
			@RequestParam(value="search_type_mw", required=false) String search_type_mw,
			@RequestParam(value="search_type_buha", required=false) String search_type_buha,
			@RequestParam(value="PG_GUBUN", required=false) String PG_GUBUN,
			Model model) {
		//발생부하량
		if("01".equals(search_type_buha)){
			//생활계
			if("01".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart1(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart2(search_type_year,search_type_mw));
				}
				
			}
			//산업계
			if("02".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart3(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart4(search_type_year,search_type_mw));
				}
				
			}
			//축산계
			if("03".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart5(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart6(search_type_year,search_type_mw));
				}
				
			}
			//토지계
			if("04".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart7(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart8(search_type_year,search_type_mw));
				}
				
			}
			
		}
		//배출부하량
		if("02".equals(search_type_buha)){
			//생활계
			if("01".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart11(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart12(search_type_year,search_type_mw));
				}
				
			}
			//산업계
			if("02".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart13(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart14(search_type_year,search_type_mw));
				}
				
			}
			//축산계
			if("03".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart15(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart16(search_type_year,search_type_mw));
				}
				
			}
			//토지계
			if("04".equals(search_type_type)){
				//시군구
				if("01".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart17(search_type_year,search_type_mw));
				}
				//소권역
				if("02".equals(PG_GUBUN)){
					model.addAttribute("result", plService.plload_chart18(search_type_year,search_type_mw));
				}
				
			}
			
		}
				
		return "pl/plload_chart1";
	}
	
	
}

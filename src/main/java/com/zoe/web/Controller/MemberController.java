package com.zoe.web.Controller;

import com.zoe.web.Entity.Member;
import com.zoe.web.Service.MemberService;
import jakarta.persistence.TableGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/login")
    public String login() {
        return "member/login";
    }

    @GetMapping("/join")
    public String join() {
        return "member/join";
    }


    // requestbody : json 통해서 전송
    // modelAttribute : 바로 보냄
    @PostMapping("/member/join/new")
    public ModelAndView MemberNew(@ModelAttribute Member member) {
        ModelAndView mav = new ModelAndView();
        int res = memberService.SaveMember(member);

        if (res == 1) {
            // 성공 시 리다이렉트할 URL 설정
            mav.setViewName("redirect:/joinSuccess"); // 성공 페이지 URL로 변경
        } else {
            mav.setViewName("redirect:/error-page"); // 실패 페이지 URL로 변경
        }
        return mav;
    }


    @GetMapping("/joinSuccess")
    public String JoinSuccess(){
        return "member/joinSuccess";
    }
}
//    @PostMapping("api/user")
//    public ResponseDto<Integer> save(@RequestBody MemberDto userDto){
//        //System.out.println("@@@@@ MemberApiController");
//        memberDto.setRole(RoleType.USER);
//        int result = memberService.join(memberDto);
//        return new ResponseDto<Integer>(HttpStatus.OK.value(), result);
//
//    }


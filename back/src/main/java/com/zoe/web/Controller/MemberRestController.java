package com.zoe.web.Controller;

import com.zoe.web.Entity.Member;
import com.zoe.web.Service.MemberService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;


// API 만 담

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberRestController {

    private final MemberService memberService;

    @PostMapping("/join/new")
    public ResponseEntity<?> join(@RequestBody Member member, HttpServletRequest request) {
        int res = memberService.SaveMember(member);

        if (res == 1) {
//            Cookie idCookie = new Cookie("memberId", String.valueOf(member.getMemberId()));
//            response.addCookie(idCookie);

//            HttpSession session = request.getSession();
//            session.setAttribute(sessionconst);


            return ResponseEntity.ok(Map.of("status", "OK", "message", "회원가입 성공"));

        } else if(res == 2){
            return ResponseEntity.badRequest().body(Map.of("status", "ID DUPLICATE", "message", "중복된 이메일입니다."));
        }
        else {
            return ResponseEntity.badRequest().body(Map.of("status", "FAIL", "message", "회원가입 실패"));
        }
    }
//
//    @PostMapping("/login/check")
//    public ResponseEntity<?> login()
//    {
//        return ResponseEntity.ok(Map.of("status", "1"));
//    }


    @PostMapping("/login/check")
    public ResponseEntity<?> login(@RequestBody Member member)
    {
        Member me =  memberService.LoginCheck(member);
        if(me!=null){
            log.info(me.getMemberId());
            log.info( me.getMemberPwd());
            return ResponseEntity.ok(Map.of("status", "OK", "data", me));
        }
        return ResponseEntity.badRequest().body(Map.of("status", "NG"));
    }
}

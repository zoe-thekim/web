package com.zoe.web.Service;

import com.zoe.web.Config.SecurityConfig;
import com.zoe.web.Entity.Member;
import com.zoe.web.Repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final SecurityConfig cfg;
    // 회원가입
    @Transactional
    public int SaveMember(Member member){
        try {
            log.info(member.getMemberId());

            if(memberRepository.existsByMemberId(member.getMemberId())){
                return 2;   // 중복
            }
//            Member newMember = new Member();
//
//            newMember.setMemberId(member.getMemberId());
//            newMember.setMemberPwd(member.getMemberPwd());

            log.info("MemberService");

            log.info("ID : " + member.getMemberId());
            log.info("PWD : " + member.getMemberPwd());

            memberRepository.save(member);

           return 1;
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return -1;
    }

    public Member LoginCheck(Member member){
        Member m = memberRepository.findByMemberId(member.getMemberId())
            .orElseThrow(() -> new IllegalArgumentException("아이디 또는 비밀번호가 올바르지 않습니다."));
        // 여기서 throw 하면 react단에서는 그냥 500에러 발생


//        if(!cfg.passwordEncoder().matches(rawPassword, member.getMemberPwd())){
//            throw new IllegalArgumentException("비밀번호 오류");
//        }
        return m;
    }

}

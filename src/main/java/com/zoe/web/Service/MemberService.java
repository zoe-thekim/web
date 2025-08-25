package com.zoe.web.Service;

import com.zoe.web.Entity.Member;
import com.zoe.web.Repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    // 회원가입
    @Transactional
    public int SaveMember(Member member){
        try {
            Member newMember = new Member();

            newMember.setMEMBER_ID(member.getMEMBER_ID());
            newMember.setMEMBER_PWD(member.getMEMBER_PWD());

//            newMember.setMEMBER_ID("admin");
//            newMember.setMEMBER_PWD("admin");
            memberRepository.save(newMember);

           return 1;
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return -1;
    }
}

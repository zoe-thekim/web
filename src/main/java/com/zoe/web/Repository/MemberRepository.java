package com.zoe.web.Repository;

import com.zoe.web.Entity.Member;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;
	
    // H2 DB에 member 엔티티에 해당하는 데이터 생성
    public int save(Member member) {
        em.persist(member);
        return member.getMEMBER_NO();	// member 가 잘 생성되었는지 확인하기 위한 id 컬럼 조회
    }
	
    // 
    public Member find(int no) {
        return em.find(Member.class, no); // 해당 id 값을 가지는 레코드 조회
    }
}
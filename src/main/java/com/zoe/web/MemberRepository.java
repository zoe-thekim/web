package com.zoe.web;

import org.springframework.stereotype.Repository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;
	
    // H2 DB에 member 엔티티에 해당하는 데이터 생성
    public Long save(Member member) {
        em.persist(member);
        return member.getId();	// member 가 잘 생성되었는지 확인하기 위한 id 컬럼 조회
    }
	
    // 
    public Member find(Long id) {
        return em.find(Member.class, id); // 해당 id 값을 가지는 레코드 조회
    }
}
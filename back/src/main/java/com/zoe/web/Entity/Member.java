package com.zoe.web.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_no")
    private int memberNo;


    @Column(name = "member_id", nullable = false, length = 30)
    private String memberId;

    @Column(name = "member_pwd", nullable = false)
    private String memberPwd;
}

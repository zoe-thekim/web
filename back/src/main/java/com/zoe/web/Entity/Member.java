package com.zoe.web.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int MEMBER_NO;

    @Column(nullable = false, length = 30)
    private String MEMBER_ID;

    @Column(nullable = false, length = 30)
    private String MEMBER_PWD;
}

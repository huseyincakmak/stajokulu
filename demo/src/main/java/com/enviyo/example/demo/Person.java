package com.enviyo.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "person")
public class Person {
    @Id
    private Long id;
    private String name;
    private String surname;
}

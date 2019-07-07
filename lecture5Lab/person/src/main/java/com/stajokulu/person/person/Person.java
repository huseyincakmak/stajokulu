package com.stajokulu.person.person;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="person")
@Data
public class Person {

    @Id
    private Long id;
    private String name;
    private String surname;
}

package com.enviyo.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DemoController {

    @Autowired
    PersonRepository personRepository;

    @GetMapping("/hello")
    public String sayHello(){
        return "Hello Staj Okulu";
    }

    @GetMapping("/person")
    public List<Person> getPersons() {
        return personRepository.findAll();
    }

}

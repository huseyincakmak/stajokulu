package com.stajokulu.person.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class PersonController {


    @Autowired
    PersonService personService;

    @GetMapping("/person")
    public List<Person>  getPersons()  {
        return personService.getPersons();
    }

    @GetMapping("/person/{id}")
    public Person getPersonById(@PathVariable Long id) {
       return personService.getPersonById(id);
    }

    @PostMapping("/person")
    public Person savePerson(@RequestBody Person person) {
        return personService.savePerson(person);
    }

    @PutMapping("/person")
    public Person updatePerson(@RequestBody Person person) {
        return personService.updatePerson(person);
    }

    @DeleteMapping("/person/{id}")
    public void deletePerson(@PathVariable  Long id) {
        personService.deletePerson(id);
    }

}

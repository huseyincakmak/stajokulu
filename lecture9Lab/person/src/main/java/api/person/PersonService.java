package api.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> getPersons()  {
        return personRepository.findAll();
    }


    public Person getPersonById( Long id) {
        Optional<Person> personOptional =  personRepository.findById(id);
        if(personOptional.isPresent()) {
            return personOptional.get();
        }

        return null;
    }

    public Person savePerson( Person person) {
        return personRepository.save(person);
    }

    public Person updatePerson( Person person) {
        return personRepository.save(person);
    }

    public void deletePerson( Long id) {
        personRepository.deleteById(id);
    }

}

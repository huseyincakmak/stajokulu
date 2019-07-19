package api.person;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="person")
@Data
public class Person {

    @Id
    private Long id;
    private String name;
    private String surname;
}

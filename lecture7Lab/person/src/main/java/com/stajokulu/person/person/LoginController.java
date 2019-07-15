package com.stajokulu.person.person;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {

    @PostMapping("/login")
    public boolean tryLogin(@RequestBody UserDto userDto) {

        // TODO: Validate user
        return true;
    }

}

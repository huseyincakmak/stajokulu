package api.login;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class LoginController {

    private String LOGIN_URL =  "http://localhost:8080/oauth/token?";

    @PostMapping("/login")
    public LoginResponse tryLogin(@RequestBody UserDto userDto) {

        Map<String, String> headerMap = new HashMap<>();
        headerMap.put("Content-Type","application/json");
        headerMap.put("Authorization","Basic c3Rham9rdWx1OjEyMzQ1Ng==");

        final  String url = LOGIN_URL + "grant_type=password&username="+userDto.getUsername()+"&password="+userDto.getPassword();
        RestTemplate restTemplate = new RestTemplate();
        LoginResponse loginResponse = restTemplate.getForObject(url, LoginResponse.class, headerMap);

        return loginResponse;
    }

}

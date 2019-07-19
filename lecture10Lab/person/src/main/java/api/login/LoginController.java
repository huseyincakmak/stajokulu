package api.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    private TokenStore tokenStore;

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

    @GetMapping("/my-logout")
    public void logout(@RequestHeader HttpHeaders headers) {
        String authHeader = headers.get("authorization").get(0);
        if (authHeader != null) {
            String tokenValue = authHeader.replace("bearer", "").trim();
            OAuth2AccessToken accessToken = tokenStore.readAccessToken(tokenValue);
            tokenStore.removeAccessToken(accessToken);
        }
    }

}

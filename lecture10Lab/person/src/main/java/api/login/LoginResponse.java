package api.login;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;

@Getter
@Setter
public class LoginResponse {
    private String access_token;
    private String token_type;
    private Integer expires_in;
    private String scope;
}

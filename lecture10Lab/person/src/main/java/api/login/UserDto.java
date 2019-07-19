package api.login;

import lombok.Data;

@Data
public class UserDto {
    private Long userId;
    private String email;
    private String username;
    private String password;
    private String name;
    private String surname;
}

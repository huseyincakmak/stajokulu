package api.registration;

import api.config.CustomUserDetailRepository;
import api.config.CustomUserDetails;
import api.login.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    @Autowired
    CustomUserDetailRepository customUserDetailRepository;

    @PostMapping("/registration")
    public void saveUser(@RequestBody UserDto userDto) {
            final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            userDto.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));
            CustomUserDetails customUserDetails = CustomUserDetails.builder()
                    .userId(userDto.getUserId())
                    .username(userDto.getUsername())
                    .name(userDto.getName())
                    .surname(userDto.getSurname())
                    .email(userDto.getEmail())
                    .password(userDto.getPassword())
                    .build();
            customUserDetailRepository.save(customUserDetails);
    }
}

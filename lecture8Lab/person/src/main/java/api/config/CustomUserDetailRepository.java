package api.config;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomUserDetailRepository extends JpaRepository<CustomUserDetails, Long> {

    public CustomUserDetails findByUsername(String userName);

}

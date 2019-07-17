package api.config.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    private static final String[] AUTH_WHITELIST = {
            "/registration/**",
            "/registration",
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/h2-console/**",
            "/webjars/**"
    };

    @Override
    public void configure(HttpSecurity http) throws Exception {


        http.requestMatchers().antMatchers("/**").and().
                authorizeRequests().antMatchers(AUTH_WHITELIST).permitAll().and().
                authorizeRequests().antMatchers("/person/**").authenticated();


        http.headers().frameOptions().disable();
    }
}

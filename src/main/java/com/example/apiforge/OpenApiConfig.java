package com.example.apiforge;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI apiForgeOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("APIForge - API Testing Platform")
                        .description("Automated API Testing and Documentation Platform")
                        .version("1.0.0"));
    }
}
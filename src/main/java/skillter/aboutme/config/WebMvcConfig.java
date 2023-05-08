package skillter.aboutme.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/**")
    .addResourceLocations("file:src/main/resources/templates/")
    .addResourceLocations("file:src/main/resources/static/")
    // .setCachePeriod(3600)
    .resourceChain(true)
    .addResolver(new PathResourceResolver());
    }

    @Override
    public void addCorsMappings(final CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("POST", "GET");
        // .allowedHeaders("header1", "header2", "header3")
        // .exposedHeaders("header1", "header2")

    }

}

// file:src/main/resources/templates/
// spring.web.resources.static-locations[1]=file:src/main/resources/static/
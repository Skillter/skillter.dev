package skillter.aboutme.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping()
public class HomeController {


    //The HttpServletRequest is used to read the HTML form data provided by the user.
    //The Model contains the request data and provides it to view page.
    @GetMapping(path = "/")
        public String main(Model model, HttpServletRequest request) {
            model.addAttribute("atUrl", request.getRequestURI());
            return "index";
    }

    @GetMapping(path = "/home")
        public String home(Model model, HttpServletRequest request) {
            return main(model, request);
}







}

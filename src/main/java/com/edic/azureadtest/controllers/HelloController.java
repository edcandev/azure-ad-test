package com.edic.azureadtest.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class HelloController {


    @RequestMapping("/foo")
    void handleFoo(HttpServletResponse response) throws IOException {
        response.sendRedirect("/Admin");
    }


    @GetMapping("Admin")
    @ResponseBody
    @PreAuthorize("isAuthenticated()")
    public String Admin() {
        return "Iniciando contiaenrs....";

    }
}
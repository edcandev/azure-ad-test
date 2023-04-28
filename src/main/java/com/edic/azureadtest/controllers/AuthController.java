package com.edic.azureadtest.controllers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {


    @RequestMapping("/azuread/")
    void handleFoo(HttpServletResponse response) throws IOException {
        response.sendRedirect("/Admin");
    }


    @GetMapping("/azuread")
    @ResponseBody
    @PreAuthorize("isAuthenticated()")
    public void auth(HttpServletResponse response) throws IOException {
        response.sendRedirect("/exam/home");
    }
}
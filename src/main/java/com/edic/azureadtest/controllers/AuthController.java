package com.edic.azureadtest.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/")
@CrossOrigin("*")
public class AuthController {
    /*
    @GetMapping("/")
    @ResponseBody
    @PreAuthorize("hasAuthority('APPROLE_Admin')")
    public void auth(HttpServletResponse response, Authentication authentication
    ) throws IOException {

        //System.out.println(graphClient.getAccessToken().getTokenValue());
        System.out.println(authentication.getPrincipal());
        response.sendRedirect("/exam/home");
    }*/
}
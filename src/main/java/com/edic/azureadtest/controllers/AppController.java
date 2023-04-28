package com.edic.azureadtest.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class AppController {

    @RequestMapping("/exam/home")
    public String helloWorld(Model model) {
        return "screen_03";
    }
}
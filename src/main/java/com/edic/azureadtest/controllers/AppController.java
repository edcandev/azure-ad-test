package com.edic.azureadtest.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;


@Controller
public class AppController {

    @RequestMapping("/exam/home")
    public String helloWorl(Model model) {
        return "screen_03";
    }

    @GetMapping(value = "/exam/end")
    public String perritoAsu(Model model) {
        //System.out.println(body);
        return "screen_04";
    }

    @PostMapping(value = "/exam/end", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String helloWorld(@RequestBody String body) {
        System.out.println(body);
        return "ok";
    }


}
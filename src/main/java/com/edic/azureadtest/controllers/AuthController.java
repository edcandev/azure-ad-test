package com.edic.azureadtest.controllers;
import com.google.gson.JsonObject;
import com.microsoft.graph.authentication.TokenCredentialAuthProvider;
import com.microsoft.graph.models.User;
import com.microsoft.graph.requests.GraphServiceClient;
import com.microsoft.graph.requests.UserRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Objects;

@Controller
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @GetMapping("/azuread")
    @ResponseBody
    @PreAuthorize("isAuthenticated()")
    public void auth(HttpServletResponse response,
                     @RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphClient, Authentication authentication
    ) throws IOException {

        //System.out.println(graphClient.getAccessToken().getTokenValue());
        System.out.println(authentication.getPrincipal());
        response.sendRedirect("/exam/home");
    }
}
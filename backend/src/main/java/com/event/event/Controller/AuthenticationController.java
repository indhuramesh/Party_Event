package com.event.event.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.event.Service.AuthenticationService;
import com.event.event.dto.request.AuthenticationRequest;
import com.event.event.dto.request.RegisterRequest;
import com.event.event.dto.response.AuthenticationResponse;
import com.event.event.model.User;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class AuthenticationController {
        @Autowired
    private final AuthenticationService authenticationService;
    

    @PostMapping("/register") 
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
     @GetMapping("/getUsers")
public ResponseEntity<List<User>> getAllEvents() {
    List<User> users = authenticationService.getAllUsers();
    return new ResponseEntity<>(users, HttpStatus.OK);
}
}

package com.example.crud.service;

import com.example.crud.model.User;
import com.example.crud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "Email already exists!";
        }
        userRepository.save(user);
        return "User registered successfully!";
    }

    public ResponseEntity<String> loginUser(String email, String password) {
        User userDetails = userRepository.findByEmail(email);
        if(userDetails.getEmail().equals(email)&&userDetails.getPassword().equals(password)){
            return new ResponseEntity<>(userDetails.getUsername(), HttpStatusCode.valueOf(200));
        }
        return new ResponseEntity<>("Unauthorized", HttpStatusCode.valueOf(401));
    }

    public List<User> getUsers() {
       return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public ResponseEntity<String> userNameData(String data) {
        User user =userRepository.findByUsername(data);
        if(userRepository.existsByUsername(data)){
            return new ResponseEntity<>("Welcome "+user.getUsername(), HttpStatusCode.valueOf(200));
        }
        return new ResponseEntity<>("Unauthorized", HttpStatusCode.valueOf(401));
    }
}

package backend.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import backend.demo.Dtos.AuthRequest;
import backend.demo.Service.UserAuthService;

public class UserController {
 @Autowired
    private UserAuthService service;
    @PostMapping("/register")
    public AuthRequest register(@RequestBody AuthRequest user){
        return service.register(user);

    }

    
}

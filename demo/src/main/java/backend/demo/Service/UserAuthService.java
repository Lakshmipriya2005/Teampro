package backend.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import backend.demo.Dtos.AuthRequest;
import backend.demo.Repo.UserRepo;

public class UserAuthService {
 @Autowired
    private UserRepo repo;
    private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);
   
    public AuthRequest register(AuthRequest user){
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);

    }
    
}

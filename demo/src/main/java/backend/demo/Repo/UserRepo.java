package backend.demo.Repo;



import org.springframework.data.jpa.repository.JpaRepository;

import backend.demo.Entity.UserEntity;



public interface UserRepo extends JpaRepository<UserEntity, Long> {
}


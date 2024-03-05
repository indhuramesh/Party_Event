package com.event.event.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}

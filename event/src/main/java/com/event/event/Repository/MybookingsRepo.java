package com.event.event.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.event.event.model.Mybookings;

@Repository
public interface MybookingsRepo extends JpaRepository<Mybookings,Long> {
    Optional<Mybookings> findByFullName(String fullName);
    void deleteByFullName(String fullName);
    Mybookings findByDateAndTimeAndLocation (LocalDate date,LocalTime time, String location);

}

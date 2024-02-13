package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.event.event.model.Events;
import java.util.Optional;
 @Repository
public interface eventsRepo extends JpaRepository<Events,Long>{
    Optional<Events> findByEventName(String eventName);
    void deleteByEventName(String eventName);
}

package com.event.event.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.event.event.Service.eventService;
import com.event.event.dto.response.EventResponse;
import com.event.event.model.Events;
@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class EventController {
    @Autowired(required=true)
    eventService eservice;
    @GetMapping("/getEvents")
public ResponseEntity<List<Events>> getAllEvents() {
    List<Events> events = eservice.getAllEvents();
    return new ResponseEntity<>(events, HttpStatus.OK);
}

@GetMapping("/getEvents/{eventName}")
public ResponseEntity<EventResponse> getEvents(@PathVariable("eventName") String eventName){
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(eservice.getEvents(eventName));
}


    @PostMapping("/addEvents")
    public String postMethodName(@RequestBody Events entity) {
        eservice.addData(entity);
        return "Added";
    }
    
@PutMapping("updateEvents/{eventName}")
public ResponseEntity<String> updateEventsByEventName(@PathVariable String eventName, @RequestBody Events updatedEvents) {
    Events updatedEvents2 = eservice.updateEventsByEventName(eventName, updatedEvents);
    if (updatedEvents2 != null) {
        return new ResponseEntity<>("Updated Successfully", HttpStatus.OK);
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no such event specified name.");
    }
}

    @DeleteMapping("/deleteEvents/{eventName}")
public ResponseEntity<String> deleteEventsByName(@PathVariable String eventName) {
    boolean deleted = eservice.deleteEventsByEventName(eventName);
    if (deleted) {
        return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no event with the specified name.");
    }
}
}

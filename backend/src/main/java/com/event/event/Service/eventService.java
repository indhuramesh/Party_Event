package com.event.event.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import com.event.event.Repository.eventsRepo;
import com.event.event.dto.response.EventResponse;
import com.event.event.model.Events;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class eventService {
    @Autowired
    eventsRepo eRepo;
    public eventService(eventsRepo eRepo) {
        this.eRepo = eRepo;
    }

public Events addData(Events b)
	{
		return eRepo.save(b);
	}

   public List<Events> getAllEvents() {
    return eRepo.findAll();
}

// public Events getEventsByName(String eventName) {
//     return eRepo.findByEventName(eventName);
// }
public EventResponse getEvents(String eventName){
    Events events=eRepo.findByEventName(eventName).orElseThrow();
    var userEvent=EventResponse.builder().eventId(events.getEventId()).eventName(events.getEventName()).description(events.getDescription()).imageUrl(events.getImageUrl()).build();
    return userEvent; 
}

    
    public Events updateEventsByEventName(String eventName, Events updatedEvents) {
    Events existingBookings = eRepo.findByEventName(eventName).orElseThrow();
    if (existingBookings != null) {
        existingBookings.setEventName(updatedEvents.getEventName());
        existingBookings.setDescription(updatedEvents.getDescription());
        existingBookings.setImageUrl(updatedEvents.getImageUrl());

        existingBookings = eRepo.save(existingBookings);
        return existingBookings;
    } else {
        return null; // Booking not found
    }
}


    
    @Transactional
    public boolean deleteEventsByEventName(String eventName) {
       Events existingBookings = eRepo.findByEventName(eventName).orElseThrow();
        if (existingBookings != null) {
            eRepo.delete(existingBookings);
            return true; // Deletion successful
        } else {
            return false; // User not found
        }
    }
}


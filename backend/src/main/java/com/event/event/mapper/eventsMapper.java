package com.event.event.mapper;

import com.event.event.dto.eventsDto;
import com.event.event.model.Events;

public class eventsMapper {

    public static eventsDto maptoeventsDto(Events events) {
        // Implement the mapping logic
        return new eventsDto(
                events.getEventId(),
                events.getEventName(),
                events.getDescription(),
                events.getImageUrl()
        );
    }

    public static Events maptoEvents(eventsDto eventsdto) {
        // Implement the mapping logic
        return new Events(
                eventsdto.getEventId(),
                eventsdto.getEventName(),
                eventsdto.getDescription(),
                eventsdto.getImageUrl()
        );
    }
}


package com.event.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class EventRequest {
    private Long eventId;
    private String eventName;
    
    private String description;
    private String imageUrl;

}

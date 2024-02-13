package com.event.event.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class EventResponse {
    private Long eventId;
    private String eventName;
    
    private String description;
    private String imageUrl;

}

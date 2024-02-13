package com.event.event.dto.response;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class BookingResponse {
 private Long bookingId;
    private String fullName;
    private String email;
    private Long phone;
    private String country;
    private String eventName;
    private String location;
    private LocalDate date;
    private LocalTime time;
    private String theme;
    private Long guests;
    private String food;
    private String message;
}

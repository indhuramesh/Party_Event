package com.event.event.dto;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MybookingsDto {
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

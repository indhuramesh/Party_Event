package com.event.event.mapper;

import com.event.event.dto.MybookingsDto;
import com.event.event.model.Mybookings;

public class MybookingsMapper {
    public static MybookingsDto maptoMybookingsDto(Mybookings bookings) {
        // Implement the mapping logic
        return new MybookingsDto(
                bookings.getBookingId(),
                bookings.getFullName(),
                bookings.getEmail(),
                bookings.getPhone(),
                bookings.getCountry(),
                bookings.getEventName(),
                bookings.getLocation(),
                bookings.getDate(),
                bookings.getTime(),
                bookings.getTheme(),
                bookings.getGuests(),
                bookings.getFood(),
                bookings.getMessage()
                
        );
    }

    public static Mybookings maptoMybookings(MybookingsDto bookingsdto) {
        // Implement the mapping logic
        return new Mybookings(
            bookingsdto.getBookingId(),
            bookingsdto.getFullName(),
            bookingsdto.getEmail(),
            bookingsdto.getPhone(),
            bookingsdto.getCountry(),
            bookingsdto.getEventName(),
            bookingsdto.getLocation(),
            bookingsdto.getDate(),
            bookingsdto.getTime(),
            bookingsdto.getTheme(),
            bookingsdto.getGuests(),
            bookingsdto.getFood(),
            bookingsdto.getMessage()
        );
    }
}

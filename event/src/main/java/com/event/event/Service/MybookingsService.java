
package com.event.event.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.event.event.Repository.MybookingsRepo;
import com.event.event.dto.response.BookingResponse;
import com.event.event.model.Mybookings;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MybookingsService{
    @Autowired
    MybookingsRepo bRepo;

    public Mybookings addData(Mybookings b)
	{
		return bRepo.save(b);
	}

    public List<Mybookings> getData(){
        return bRepo.findAll();
    }
  public BookingResponse getBooking(String fullName){
    Mybookings bookings=bRepo.findByFullName(fullName).orElseThrow();
    var userBook=BookingResponse.builder().bookingId(bookings.getBookingId()).fullName(bookings.getFullName()).email(bookings.getEmail()).phone(bookings.getPhone()).country(bookings.getCountry()).eventName(bookings.getEventName()).location(bookings.getLocation()).date(bookings.getDate()).time(bookings.getTime()).theme(bookings.getTheme()).guests(bookings.getGuests()).food(bookings.getFood()).message(bookings.getMessage()).build();
    return userBook; 
}
    

public Mybookings updateBookingsByFullName(String fullName,Mybookings updatedBooking) {
    Mybookings existingBooking = bRepo.findByFullName(fullName).orElseThrow();
    if (existingBooking != null) {
            // Update details
            existingBooking.setEmail(updatedBooking.getEmail());
            existingBooking.setPhone(updatedBooking.getPhone());
            existingBooking.setCountry(updatedBooking.getCountry());
            existingBooking.setEventName(updatedBooking.getEventName());
            existingBooking.setLocation(updatedBooking.getLocation());
            existingBooking.setDate(updatedBooking.getDate());
            existingBooking.setTime(updatedBooking.getTime());
            existingBooking.setTheme(updatedBooking.getTheme());
            existingBooking.setGuests(updatedBooking.getGuests());
            existingBooking.setFood(updatedBooking.getFood());
            existingBooking.setMessage(updatedBooking.getMessage());
            existingBooking = bRepo.save(existingBooking);
        return existingBooking;
    } else {
        return null; // Booking not found
    }
    }
    @Transactional
    public boolean deleteBookingsByFullName(String fullName) {
        Mybookings existingBookings = bRepo.findByFullName(fullName).orElseThrow();
         if (existingBookings != null) {
             bRepo.delete(existingBookings);
             return true; // Deletion successful
         } else {
             return false; // User not found
         }
     }
}
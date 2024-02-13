package com.event.event.Controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.event.Service.MybookingsService;
import com.event.event.dto.response.BookingResponse;
import com.event.event.model.Mybookings;

import io.swagger.v3.oas.annotations.tags.Tag;
@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class MybookingsController {
    @Autowired(required=true)
    MybookingsService bservice;
   @Tag(name="Get Bookings",description="Getting Booking Details")
       @GetMapping("/getBookings")
public ResponseEntity<List<Mybookings>> getAllBookings() {
    List<Mybookings> events = bservice.getData();
    return new ResponseEntity<>(events, HttpStatus.OK);
}
@GetMapping("/getBookings/{fullName}")
public ResponseEntity<BookingResponse> getBooking(@PathVariable("fullName") String fullName){
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(bservice.getBooking(fullName));
}

    // @PostMapping("/addBookings")
    // public ResponseEntity<String> addDetails(@RequestBody Mybookings b1){
    //    try {
    //        Mybookings addedBook = bservice.addData(b1);
    //         return ResponseEntity.status(HttpStatus.CREATED).body("Booked successfully");
    //     } catch (RuntimeException e) {
    //         return ResponseEntity.status(HttpStatus.CONFLICT).body("Already booked");
    //     }
    // }
    @PostMapping("/addBookings")
    public String postMethodName(@RequestBody Mybookings entity) {
        //TODO: process POST request
        bservice.addData(entity);
        return "Added";
    }
    
    public Mybookings addInfo(@RequestBody Mybookings b)
	{
		return bservice.addData(b);
	}
    

    @PutMapping("updateBookings/{fullName}")
    public ResponseEntity<String> updateBookingsByFullName(@PathVariable String fullName, @RequestBody Mybookings updatedBookings) {
        Mybookings updatedBookings2 = bservice.updateBookingsByFullName(fullName, updatedBookings);
        if (updatedBookings2 != null) {
            return new ResponseEntity<>("Updated Successfully", HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no such event .");
        }
    }
    
        @DeleteMapping("/deleteBookings/{fullName}")
    public ResponseEntity<String> deleteEventsByName(@PathVariable String fullName) {
        boolean deleted = bservice.deleteBookingsByFullName(fullName);
        if (deleted) {
            return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no bookings with the specified name.");
        }
    }

}

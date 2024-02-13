package com.event.event.model;
import java.time.LocalDate;
import java.time.LocalTime;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bookingdetails")
public class Mybookings {
    @Id
    @GeneratedValue
    private Long bookingId;

    @Column(name = "fullName",nullable = false)
    private String fullName;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "phone",nullable = false)
    private Long phone;
    @Column(name = "country",nullable = false)
    private String country;
    @Column(name = "eventName",nullable = false)
    private String eventName;
    @Column(name = "location",nullable = false)
    private String location;
    @Column(name = "date",nullable = false)
    private LocalDate date;
    @Column(name = "time",nullable = false)
    private LocalTime time;
    @Column(name = "theme",nullable = false)
    private String theme;
    @Column(name = "guests",nullable = false)
    private Long guests;
    @Column(name = "food",nullable = false)
    private String food;
    @Column(name = "message",nullable = false)
    private String message;

}

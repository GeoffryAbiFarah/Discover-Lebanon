package com.example.demo.models;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AreaTour {
	@Id
	@Column(name = "tour_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	
	@Column(name = "tour_name")
	private String name;
	
	@Column(name = "tour_number")
	private String number;
	
	@Column(name = "tour_email")
	private String email;
	
	@Column(name = "tour_area")
	private String area;
	
	@Column(name = "tour_price")
	private float price;
	
	@Column(name = "tour_date")
	private String date;

	public AreaTour(String name, String number, String email, String area, float price, String date) {
		super();
		this.name = name;
		this.number = number;
		this.email = email;
		this.area = area;
		this.price = price;
		this.date = date;
	}
	
	public AreaTour() {}

	public UUID getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getNumber() {
		return number;
	}

	public String getEmail() {
		return email;
	}

	public String getArea() {
		return area;
	}

	public float getPrice() {
		return price;
	}

	public String getDate() {
		return date;
	}
	
	
	
	
}

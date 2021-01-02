package com.example.demo.models;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Place {
	@Id
	@Column(name = "place_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	
	@Column(name = "place_name")
	private String name;
	
	@Column(name = "place_area")
	private String area;
	
	@Column(name = "place_type")
	private String type;
	
	@Column(name = "place_image")
	private String image;

	
	
	public Place(String name, String area, String type, String image) {
		super();
		this.name = name;
		this.area = area;
		this.type = type;
		this.image = image;
	}

	public Place() {}

	public String getType() {
		return type;
	}

	public UUID getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getArea() {
		return area;
	}

	public String getImage() {
		return image;
	}
}

package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.AreaTour;
import com.example.demo.repositories.AreaTourRepository;

@Service
public class AreaTourService {
	
	@Autowired
	private AreaTourRepository areaTourRepository;
	
	public void addAreaTour (AreaTour areaTour) {
        areaTourRepository.save(areaTour);
    }
}

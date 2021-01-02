package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.models.ContactUs;
import com.example.demo.repositories.ContactUsRepository;

@Service
public class ContactUsService {
	@Autowired
	private ContactUsRepository contactUsRepository;
	
	public void addFeedback (ContactUs contactUs) {
        contactUsRepository.save(contactUs);
    }
}

package com.example.demo.api;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.AreaTour;
import com.example.demo.models.ContactUs;
import com.example.demo.models.Place;
import com.example.demo.services.AreaTourService;
import com.example.demo.services.ContactUsService;
import com.example.demo.services.PlaceService;

@RestController
@RequestMapping("api/v1")
public class Controller {
	
	@Autowired
	private PlaceService placeService;
	
	@Autowired
	private AreaTourService areaTourService;
	
	@Autowired
	private ContactUsService contactUsService;
	
	
	// PLACES
	@GetMapping("/places")
	public List<Place> getPlaces(){
		return placeService.getAllPlaces();
	}
	
	@GetMapping("/places-by-name-and-type-and-area")
    public List<Place> getPlaceByNameAndTypeAndArea(@RequestParam String name, @RequestParam String type, @RequestParam String area){
        return placeService.getPlaceByNameAndTypeAndArea(name, type, area);
    }
	
	@GetMapping("/places-by-name-and-type")
    public List<Place> getPlaceByNameAndType(@RequestParam String name, @RequestParam String type){
        return placeService.getPlaceByNameAndType(name, type);
    }
	
	@GetMapping("/places-by-name-and-area")
    public List<Place> getPlaceByNameAndArea(@RequestParam String name, @RequestParam String area){
        return placeService.getPlaceByNameAndArea(name, area);
    }
	
	@GetMapping("/places-by-type-and-area")
    public List<Place> getPlaceByTypeAndArea(@RequestParam String type, @RequestParam String area){
        return placeService.getPlaceByTypeAndArea(type, area);
    }
	
	@GetMapping("/places-by-name")
    public List<Place> getPlaceByName(@RequestParam String name){
        return placeService.getPlaceByName(name);
    }
	
	@GetMapping("/places-by-type")
    public List<Place> getPlaceByType(@RequestParam String type){
        return placeService.getPlaceByType(type);
    }
	
	@GetMapping("/places-by-area")
    public List<Place> getPlaceByArea(@RequestParam String area){
        return placeService.getPlaceByArea(area);
    }

    @GetMapping("/places/id/{id}")
	public Place getPlaceById(@PathVariable UUID id){ return placeService.getPlaceById(id);}

    @PostMapping("/places")
	public Place postPlace(@RequestBody Place place){ return placeService.postPlace(place);}

	@PutMapping("/places/id/{id}")
	public Place putPlace(@PathVariable UUID id,@RequestBody Place place){ return placeService.putPlace(id,place);}

	@DeleteMapping("/places/id/{id}")
	public String deletePlace(@PathVariable UUID id){ return placeService.deletePlace(id);}
	

	//AREA TOUR
	@PostMapping("/add-area-tour")
    public void postPlace(@RequestBody AreaTour areaTour){
        areaTourService.addAreaTour(areaTour);
    }
	
	//Contact Us Feedback
	@PostMapping("/add-feedback")
	public void postFeedback(@RequestBody ContactUs contactUs) {
		contactUsService.addFeedback(contactUs);
	}
	
}

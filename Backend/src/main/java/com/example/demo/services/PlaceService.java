package com.example.demo.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Place;
import com.example.demo.repositories.PlaceRepository;

@Service
public class PlaceService {
	@Autowired
	private PlaceRepository placeRepository;
	
	public List<Place> getAllPlaces(){
		return placeRepository.findAll();
	}
	
	public List<Place> getPlaceByNameAndTypeAndArea (String name, String type, String area){
        return placeRepository.findPlaceByNameStartingWithIgnoreCaseAndTypeIgnoreCaseAndAreaIgnoreCase(name, type, area);
    }
	
	public List<Place> getPlaceByNameAndType (String name, String type){
        return placeRepository.findPlaceByNameStartingWithIgnoreCaseAndTypeIgnoreCase(name, type);
    }
	
	public List<Place> getPlaceByNameAndArea (String name, String area){
        return placeRepository.findPlaceByNameStartingWithIgnoreCaseAndAreaIgnoreCase(name, area);
    }
	
	public List<Place> getPlaceByTypeAndArea (String type, String area){
        return placeRepository.findPlaceByTypeStartingWithIgnoreCaseAndAreaIgnoreCase(type, area);
    }
	
	public List<Place> getPlaceByName (String name){
        return placeRepository.findPlaceByNameStartingWithIgnoreCase(name);
    }
	
	public List<Place> getPlaceByType (String type){
        return placeRepository.findPlaceByTypeIgnoreCase(type);
    }
	
	public List<Place> getPlaceByArea (String area){
        return placeRepository.findPlaceByAreaIgnoreCase(area);
    }

    public Place getPlaceById(UUID id){ return placeRepository.findById(id).orElse(null);}

    public Place postPlace(Place place){return placeRepository.save(place);}

    public Place putPlace(UUID id, Place place){
	    Place existingPlace = placeRepository.findById(id).orElse(null);
	    existingPlace.setName(place.getName());
	    existingPlace.setArea(place.getArea());
	    existingPlace.setImage(place.getImage());
	    existingPlace.setType(place.getType());
	    return placeRepository.save(existingPlace);
    }

    public String deletePlace(UUID id){
	    placeRepository.deleteById(id);
	    return "Place deleted with id: " + id;
    }
}

package com.example.demo.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Place;


@Repository
public interface PlaceRepository extends JpaRepository<Place, UUID>{
	
	public List<Place> findPlaceByNameStartingWithIgnoreCaseAndTypeIgnoreCaseAndAreaIgnoreCase (String name, String type, String area);
	
	public List<Place> findPlaceByNameStartingWithIgnoreCaseAndTypeIgnoreCase (String name, String type);

	public List<Place> findPlaceByNameStartingWithIgnoreCaseAndAreaIgnoreCase (String name, String area);
	
	public List<Place> findPlaceByTypeStartingWithIgnoreCaseAndAreaIgnoreCase (String type, String area);
	
    public List<Place> findPlaceByTypeIgnoreCase (String type);
    
    public List<Place> findPlaceByAreaIgnoreCase (String area);

    public List<Place> findPlaceByNameStartingWithIgnoreCase (String name);
}

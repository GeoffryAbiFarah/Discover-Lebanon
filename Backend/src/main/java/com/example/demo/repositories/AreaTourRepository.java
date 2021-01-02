package com.example.demo.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.AreaTour;


@Repository
public interface AreaTourRepository extends JpaRepository<AreaTour, UUID>{}
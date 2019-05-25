package com.worktracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.worktracker.entity.WorkoutCategory;
import com.worktracker.service.WorkoutCategoryService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value={"/category"})
public class WorkoutCategoryController {
	@Autowired
	WorkoutCategoryService workoutCategoryService;

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<WorkoutCategory> getcategoryById(@PathVariable("id") int id) {
        System.out.println("Fetching category with id " + id);
        WorkoutCategory user = workoutCategoryService.findById(id);
        if (user == null) {
            return new ResponseEntity<WorkoutCategory>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<WorkoutCategory>(user, HttpStatus.OK);
    }
       
	 @GetMapping(value="/getcategorys", headers="Accept=application/json")
	 public List<WorkoutCategory> getAllcategory() {	 
	  List<WorkoutCategory> tasks=workoutCategoryService.getWorkoutCategory();
	  return tasks;
	
	 }
	 @PostMapping(value="/delete",headers="Accept=application/json")
	 public ResponseEntity<Void> deleteWorkoutCategory(@RequestBody WorkoutCategory workoutCategory){
		 workoutCategoryService.deleteWorkoutCategory(workoutCategory);
	     HttpHeaders headers = new HttpHeaders();
	     return new ResponseEntity<Void>(headers, HttpStatus.ACCEPTED);
	 }
	 
	 @PostMapping(value="/create",headers="Accept=application/json")
	 public ResponseEntity<Void> createWorkoutCategory(@RequestBody WorkoutCategory workoutCategory){
		 workoutCategoryService.createWorkoutCategory(workoutCategory);
	     HttpHeaders headers = new HttpHeaders();
	     return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	 }
	 
	
}

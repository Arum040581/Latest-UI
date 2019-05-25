package com.worktracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.worktracker.entity.WorkoutActive;
import com.worktracker.service.WorkoutActiveService;
import com.worktracker.vo.TrackerVO;
import com.worktracker.vo.WorkoutActiveVO;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value={"/workoutactive"})
public class WorkoutActiveController {
	@Autowired
	WorkoutActiveService workoutActiveService;

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<WorkoutActive> getWorkoutActiveById(@PathVariable("id") int id) {
        System.out.println("Fetching User with id " + id);
        WorkoutActive user = workoutActiveService.findById(id);
        if (user == null) {
            return new ResponseEntity<WorkoutActive>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<WorkoutActive>(user, HttpStatus.OK);
    }
    
	 @PostMapping(value="/create",headers="Accept=application/json")
	 public ResponseEntity<WorkoutActiveVO> createWorkoutActive(@RequestBody WorkoutActiveVO workoutActiveVO){
	     System.out.println("Creating User "+workoutActiveVO.getId());
	     workoutActiveService.createWorkoutActive(workoutActiveVO);
	     return new ResponseEntity<WorkoutActiveVO>(workoutActiveVO, HttpStatus.OK);
	 }

	 @PostMapping(value="/update",headers="Accept=application/json")
	 public ResponseEntity<WorkoutActiveVO> updateWorkoutActive(@RequestBody WorkoutActiveVO workoutActiveVO){
	     System.out.println("Creating User "+workoutActiveVO.getId());
	     workoutActiveService.updateWorkoutActive(workoutActiveVO);
	     return new ResponseEntity<WorkoutActiveVO>(workoutActiveVO, HttpStatus.OK);
	 }
	 @GetMapping(value="/get", headers="Accept=application/json")
	 public List<WorkoutActive> getAllWorkoutActive() {	 
	  List<WorkoutActive> tasks=workoutActiveService.getWorkoutActive();
	  return tasks;
	
	 }
	 
	 @GetMapping(value="/track", headers="Accept=application/json")
	 public TrackerVO getTracker() {	 
	  
	  return workoutActiveService.tracker();
	
	 }

	
}

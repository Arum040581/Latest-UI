package com.worktracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.worktracker.entity.WorkoutCollection;
import com.worktracker.service.WorkoutCollectionService;
import com.worktracker.vo.ResultVO;
import com.worktracker.vo.WorkoutCollectionVO;
import com.worktracker.vo.WrkCollection;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value={"/workoutcollection"})
public class WorkoutCollectionController {
	@Autowired
	WorkoutCollectionService workoutCollectionService;

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<WorkoutCollection> getWkCollectionById(@PathVariable("id") int id) {
        System.out.println("Fetching workoutCollectionService with id " + id);
        WorkoutCollection workoutCollection = workoutCollectionService.findById(id);
        if (workoutCollection == null) {
            return new ResponseEntity<WorkoutCollection>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<WorkoutCollection>(workoutCollection, HttpStatus.OK);
    }
    
	 @PostMapping(value="/create",headers="Accept=application/json")
	 public ResponseEntity<Void> createWorkoutCollection(@RequestBody WorkoutCollectionVO workoutCollectionVO){
	     workoutCollectionService.createWorkoutCollection(workoutCollectionVO);
	     HttpHeaders headers = new HttpHeaders();
	     return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	 }

	 
	 @GetMapping(value="/get", headers="Accept=application/json")
	 public String  getWorkoutCollections() throws JsonProcessingException {	 
	  List<WrkCollection> tasks=workoutCollectionService.getWorkoutCollectionList();
	  System.out.println("WorkoutCollection: #### "+tasks);
	  ObjectMapper mapper = new ObjectMapper(); 
	  return mapper.writeValueAsString(tasks);
	
	 }
	 
	 @DeleteMapping(value="/{id}", headers ="Accept=application/json")
		public ResponseEntity<ResultVO> deleteWorkoutCollection(@PathVariable("id") int id){
		 System.out.println("deleteWorkoutCollection id: "+id);
		 WorkoutCollection wrkCol = workoutCollectionService.findById(id);
		 System.out.println(wrkCol);	
		 ResultVO resultVo =  new ResultVO();
		
			if (wrkCol == null) {
				resultVo.setReturnMsg("Data Constrain Error");
				return new ResponseEntity<ResultVO>(resultVo,HttpStatus.NOT_FOUND);
			}
			
			 System.out.println("deleteWorkoutCollection wrkCol: "+wrkCol.toString());
			 try {
				 workoutCollectionService.deleteWrkCollectionById(id);
				 resultVo.setReturnMsg("Successfully deleted!!");
			 }catch(Exception ex) {
				 resultVo.setReturnMsg("Data Constrain Error");
			 }
			
			return new ResponseEntity<ResultVO>(resultVo,HttpStatus.NO_CONTENT);
		}
	 
	/*@PutMapping(value="/update", headers="Accept=application/json")
	public ResponseEntity<String> updateUser(@RequestBody WorkoutActiveDAO currentUser)
	{
		System.out.println("sd");
	WorkoutActiveDAO user = userService.findById(currentUser.getId());
	if (user==null) {
		return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
	}
	userService.update(currentUser, currentUser.getId());
	return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@DeleteMapping(value="/{id}", headers ="Accept=application/json")
	public ResponseEntity<WorkoutActiveDAO> deleteUser(@PathVariable("id") int id){
		WorkoutActiveDAO user = userService.findById(id);
		if (user == null) {
			return new ResponseEntity<WorkoutActiveDAO>(HttpStatus.NOT_FOUND);
		}
		userService.deleteUserById(id);
		return new ResponseEntity<WorkoutActiveDAO>(HttpStatus.NO_CONTENT);
	}
	
	@PatchMapping(value="/{id}", headers="Accept=application/json")
	public ResponseEntity<WorkoutActiveDAO> updateUserPartially(@PathVariable("id") int id, @RequestBody WorkoutActiveDAO currentUser){
		WorkoutActiveDAO user = userService.findById(id);
		if(user ==null){
			return new ResponseEntity<WorkoutActiveDAO>(HttpStatus.NOT_FOUND);
		}
		WorkoutActiveDAO usr =	userService.updatePartially(currentUser, id);
		return new ResponseEntity<WorkoutActiveDAO>(usr, HttpStatus.OK);
	}*/
}

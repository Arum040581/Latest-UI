package com.worktracker.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.worktracker.entity.WorkoutCollection;
import com.worktracker.entity.WorkoutCollectionRepo;


@Repository
public class WorkoutCollectionDAOImp implements WorkoutCollectionDAO{
	@Autowired
	private WorkoutCollectionRepo workoutCollectionRepo;
	  
	

	public List<WorkoutCollection> getWorkoutCollection() {
		// TODO Auto-generated method stub
		List<WorkoutCollection> list= workoutCollectionRepo.findAll();
		return list;
	}

	public WorkoutCollection findById(int id) {
		// TODO Auto-generated method stub
		 Optional<WorkoutCollection> workout=workoutCollectionRepo.findById(id);
		return workout.get();
	}

	public void addWorkoutCollection(WorkoutCollection workoutCollection) {
		// TODO Auto-generated method stub
		workoutCollectionRepo.save(workoutCollection); 
	}
	public void delete(int id) {
		workoutCollectionRepo.deleteById(id); 
	}

}

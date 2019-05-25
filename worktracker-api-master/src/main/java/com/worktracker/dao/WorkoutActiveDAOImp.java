package com.worktracker.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.worktracker.entity.WorkActiveEntityRepo;
import com.worktracker.entity.WorkoutActive;


@Repository
public class WorkoutActiveDAOImp implements WorkoutActiveDAO{
	@Autowired
	private WorkActiveEntityRepo workActiveEntityRepo;
	  
	public void addWorkoutAct(WorkoutActive workout) {
		// TODO Auto-generated method stub
		 workActiveEntityRepo.save(workout); 
	}

	public List<WorkoutActive> getWorkoutAct() {
		// TODO Auto-generated method stub
		@SuppressWarnings("unchecked")
		List<WorkoutActive> list= workActiveEntityRepo.findAll();
		return list;
	}
	
	public List<WorkoutActive> findByWrkoutId(int id) {
		// TODO Auto-generated method stub
		List<WorkoutActive> workout=workActiveEntityRepo.findByWrkoutId(id);
		return workout;
	}

	public WorkoutActive findById(int id) {
		// TODO Auto-generated method stub
		 Optional<WorkoutActive> workout=workActiveEntityRepo.findById(id);
		return workout.get();
	}

	public WorkoutActive update(WorkoutActive val, int id) {
		// TODO Auto-generated method stub
		Optional<WorkoutActive> workout1 =workActiveEntityRepo.findById(id);
		WorkoutActive workout = workout1.get();
		workout.setEnddate(val.getEnddate());
		workout.setStartdate(val.getStartdate());
		workout.setComment(val.getComment());
		workout.setStartTime(val.getStartTime());
		workout.setEndTime(val.getEndTime());
		workout.setStatus(val.isStatus());
		
		workActiveEntityRepo.save(workout);
		return workout;
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		Optional<WorkoutActive> workout1 =workActiveEntityRepo.findById(id);
		WorkoutActive workout = workout1.get();
		workActiveEntityRepo.delete(workout);
	}
	

}

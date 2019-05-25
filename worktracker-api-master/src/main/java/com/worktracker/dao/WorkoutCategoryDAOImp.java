package com.worktracker.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.worktracker.entity.WorkCategoryRepo;
import com.worktracker.entity.WorkoutCategory;


@Repository
public class WorkoutCategoryDAOImp implements WorkoutCategoryDAO{
	@Autowired
	private WorkCategoryRepo workCategoryRepo;
	  
	

	public List<WorkoutCategory> getWorkoutCategory() {
		// TODO Auto-generated method stub
		List<WorkoutCategory> list= workCategoryRepo.findAll();
		return list;
	}

	public WorkoutCategory findById(int id) {
		// TODO Auto-generated method stub
		 Optional<WorkoutCategory> workout=workCategoryRepo.findById(id);
		return workout.get();
	}
	public void createWorkoutCategory(WorkoutCategory WorkoutCategory) {
		workCategoryRepo.save(WorkoutCategory);
	}
	public void deleteWorkoutCategory(int categoryId) {
		workCategoryRepo.deleteById(categoryId);
	}
	

}

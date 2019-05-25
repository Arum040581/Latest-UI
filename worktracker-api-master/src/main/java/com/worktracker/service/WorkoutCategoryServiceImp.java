package com.worktracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worktracker.dao.WorkoutCategoryDAO;
import com.worktracker.entity.WorkoutCategory;

@Service
@Transactional
public class WorkoutCategoryServiceImp implements WorkoutCategoryService {
	@Autowired
	WorkoutCategoryDAO workoutCategoryDAO;


	public List<WorkoutCategory> getWorkoutCategory() {
		// TODO Auto-generated method stub
		return workoutCategoryDAO.getWorkoutCategory();
	}

	public WorkoutCategory findById(int id) {
		// TODO Auto-generated method stub
		return workoutCategoryDAO.findById(id);
	}

	public void createWorkoutCategory(WorkoutCategory WorkoutCategory) {
		 workoutCategoryDAO.createWorkoutCategory(WorkoutCategory);
	}
	public void deleteWorkoutCategory(WorkoutCategory WorkoutCategory) {
		 workoutCategoryDAO.deleteWorkoutCategory(WorkoutCategory.getCategoryId());
	}
	
}

package com.worktracker.service;

import java.util.List;

import com.worktracker.entity.WorkoutCategory;

public interface WorkoutCategoryService {
	public List<WorkoutCategory> getWorkoutCategory();
	public WorkoutCategory findById(int id);
	public void createWorkoutCategory(WorkoutCategory WorkoutCategory);
	public void deleteWorkoutCategory(WorkoutCategory WorkoutCategory);
}

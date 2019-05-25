package com.worktracker.dao;

import java.util.List;

import com.worktracker.entity.WorkoutCategory;

public interface WorkoutCategoryDAO {
	public List<WorkoutCategory> getWorkoutCategory();
	public WorkoutCategory findById(int id);
	public void createWorkoutCategory(WorkoutCategory WorkoutCategory);
	public void deleteWorkoutCategory(int categoryId);
	/*public WorkoutCategory update(WorkoutActive workoutAct, int id);
	public void delete(int id);*/
}

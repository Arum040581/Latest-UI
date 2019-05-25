package com.worktracker.dao;

import java.util.List;

import com.worktracker.entity.WorkoutCollection;

public interface WorkoutCollectionDAO {
	public List<WorkoutCollection> getWorkoutCollection();
	public WorkoutCollection findById(int id);
	public void addWorkoutCollection(WorkoutCollection workoutCollection);
	public void delete(int id);
	/*public WorkoutCategory update(WorkoutActive workoutAct, int id);
	public void delete(int id);*/
}

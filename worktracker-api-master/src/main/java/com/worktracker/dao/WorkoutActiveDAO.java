package com.worktracker.dao;

import java.util.List;

import com.worktracker.entity.WorkoutActive;

public interface WorkoutActiveDAO {
	public void addWorkoutAct(WorkoutActive workoutAct);
	public List<WorkoutActive> getWorkoutAct();
	public WorkoutActive findById(int id);
	public List<WorkoutActive> findByWrkoutId(int id);
	public WorkoutActive update(WorkoutActive workoutAct, int id);
	public void delete(int id);
}

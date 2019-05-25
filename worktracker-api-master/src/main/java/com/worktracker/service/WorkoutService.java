package com.worktracker.service;

import java.util.List;

import com.worktracker.entity.WorkoutActive;
import com.worktracker.vo.WorkoutActiveVO;

public interface WorkoutService {
	public void createWorkoutActive(WorkoutActiveVO workoutActiveVO);
	public List<WorkoutActive> getWorkoutActive();
	public WorkoutActive findById(int id);
	/*public WorkoutActive update(WorkoutActiveDAO workoutActive, int id);
	public void deleteUserById(int id);
	public WorkoutActive updatePartially(WorkoutActive workoutActive, int id);*/
}

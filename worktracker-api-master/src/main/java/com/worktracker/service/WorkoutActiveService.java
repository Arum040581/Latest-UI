package com.worktracker.service;

import java.util.List;

import com.worktracker.entity.WorkoutActive;
import com.worktracker.vo.TrackerVO;
import com.worktracker.vo.WorkoutActiveVO;

public interface WorkoutActiveService {
	public List<WorkoutActive> getWorkoutActive();
	public WorkoutActive findById(int id);
	public void createWorkoutActive(WorkoutActiveVO workoutActiveVO);
	public void updateWorkoutActive(WorkoutActiveVO workoutActiveVO);
	public void deleteWorkoutActive(WorkoutActive workoutActive);
	public TrackerVO tracker();
}

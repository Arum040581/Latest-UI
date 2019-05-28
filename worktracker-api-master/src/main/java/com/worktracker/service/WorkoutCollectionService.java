package com.worktracker.service;

import java.util.List;

import com.worktracker.entity.WorkoutCollection;
import com.worktracker.vo.WorkoutCollectionVO;
import com.worktracker.vo.WrkCollection;

public interface WorkoutCollectionService {
	public void createWorkoutCollection(WorkoutCollectionVO workoutCollectionVO);
	public List<WrkCollection> getWorkoutCollectionList();
	public WorkoutCollection findById(int id);
	public void deleteWrkCollectionById(int id);
	public void update(WorkoutCollectionVO workoutCollectionVO);
	}

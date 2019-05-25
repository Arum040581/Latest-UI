package com.worktracker.vo;

public class WorkoutCollectionVO {

	private int workoutId;

	private String workoutTitle;

	private String workoutNote;

	private float caloriesBurnPerMin;
	
	private int categoryId;

	public int getWorkoutId() {
		return workoutId;
	}

	public void setWorkoutId(int workoutId) {
		this.workoutId = workoutId;
	}

	public String getWorkoutTitle() {
		return workoutTitle;
	}

	public void setWorkoutTitle(String workoutTitle) {
		this.workoutTitle = workoutTitle;
	}

	public String getWorkoutNote() {
		return workoutNote;
	}

	public void setWorkoutNote(String workoutNote) {
		this.workoutNote = workoutNote;
	}

	public float getCaloriesBurnPerMin() {
		return caloriesBurnPerMin;
	}

	public void setCaloriesBurnPerMin(float caloriesBurnPerMin) {
		this.caloriesBurnPerMin = caloriesBurnPerMin;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	

	
}

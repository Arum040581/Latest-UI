package com.worktracker.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="workout_collection")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class WorkoutCollection {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="workout_id")
	private int workoutId;

	@Column(name="workout_title")	
	private String workoutTitle;

	@Column(name="workout_note")	
	private String workoutNote;

	@Column(name="calories_burn_per_min")	
	private float caloriesBurnPerMin;
	
	@ManyToOne
	@JoinColumn(name="category_id")
	private WorkoutCategory workoutCategory;
	
	
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

	public WorkoutCategory getWorkoutCategory() {
		return workoutCategory;
	}

	public void setWorkoutCategory(WorkoutCategory workoutCategory) {
		this.workoutCategory = workoutCategory;
	}
	
	@Override
	public String toString() {
		return "WorkoutCollection [workoutId=" + workoutId + ", workoutTitle=" + workoutTitle + ", workoutNote="
				+ workoutNote + ", caloriesBurnPerMin=" + caloriesBurnPerMin + ", workoutCategory=" + workoutCategory
				+ "]";
	}

	
}

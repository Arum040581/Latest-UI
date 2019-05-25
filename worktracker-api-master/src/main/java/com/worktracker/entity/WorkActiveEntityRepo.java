package com.worktracker.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface WorkActiveEntityRepo extends JpaRepository<WorkoutActive, Integer>{

	@Query("SELECT wrk FROM WorkoutActive wrk where wrk.workoutId= ?1 and wrk.status=true")
	List<WorkoutActive>  findByWrkoutId(int id);
}

package com.worktracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.worktracker.dao.WorkoutActiveDAO;
import com.worktracker.dao.WorkoutActiveDAOImp;
import com.worktracker.service.WorkoutService;
import com.worktracker.service.WorkoutServiceImp;

@Configuration
@Profile("local")
@ComponentScan("com.worktracker.entity")
public class WorkoutLocalConfig {

	@Bean
	public WorkoutService workoutService() {
		return new WorkoutServiceImp();
	}
	@Bean
	public WorkoutActiveDAO workoutActiveDAO() {
		return new WorkoutActiveDAOImp();
	}
}

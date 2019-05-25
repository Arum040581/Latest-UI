package com.worktracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worktracker.dao.WorkoutActiveDAO;
import com.worktracker.dao.WorkoutCollectionDAO;
import com.worktracker.entity.WorkoutActive;
import com.worktracker.vo.WorkoutActiveVO;

@Service
@Transactional
public class WorkoutServiceImp implements WorkoutService {
	@Autowired
	WorkoutActiveDAO workoutActiveDAO;
	
	@Autowired
	WorkoutCollectionDAO workoutCollectionDAO;


	public List<WorkoutActive> getWorkoutActive() {
		// TODO Auto-generated method stub
		return workoutActiveDAO.getWorkoutAct();
	}

	public WorkoutActive findById(int id) {
		// TODO Auto-generated method stub
		return workoutActiveDAO.findById(id);
	}

	public void createWorkoutActive(WorkoutActiveVO workoutActiveVO) {
		// TODO Auto-generated method stub
		/*WorkoutActive workoutActive = new WorkoutActive();
		workoutActive.setComment(workoutActiveVO.getComment());
		workoutActive.setEnddate(workoutActiveVO.getEnddate());
		workoutActive.setStartdate(workoutActiveVO.getStartdate());
		workoutActive.setStartTime(workoutActiveVO.getStartTime());
		workoutActive.setEndTime(workoutActiveVO.getEndTime());
		workoutActive.setStatus(false);
		workoutActive.setWorkoutCollection(workoutCollectionDAO.findById(workoutActiveVO.getWorkoutId()));
		workoutActiveDAO.addWorkoutAct(workoutActive);*/
	}

	public void deleteUserById(int id) {
		// TODO Auto-generated method stub
		workoutActiveDAO.delete(id);
	}
	/*@Override
	public WorkoutActive updatePartially(WorkoutActiveDAO user, int id) {
		workoutActiveDAO.updateCountry(user,id);
		return workoutActiveDAO.findById(id);
	}

	@Override
	public WorkoutActive update(WorkoutActiveDAO user,int id) {
		// TODO Auto-generated method stub
		return workoutActiveDAO.update(user, id);
	}*/

}

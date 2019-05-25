package com.worktracker.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worktracker.dao.WorkoutActiveDAO;
import com.worktracker.dao.WorkoutCategoryDAO;
import com.worktracker.dao.WorkoutCollectionDAO;
import com.worktracker.entity.WorkoutActive;
import com.worktracker.entity.WorkoutCollection;
import com.worktracker.vo.WorkoutCollectionVO;
import com.worktracker.vo.WrkCollection;

@Service
@Transactional
public class WorkoutCollectionServiceImp implements WorkoutCollectionService {
	
	@Autowired
	WorkoutCollectionDAO workoutCollectionDAO;
	
	@Autowired
	WorkoutActiveDAO workoutActiveDAO;
	
	@Autowired
	WorkoutCategoryDAO WorkoutCategoryDAO;

	@Override
	public List<WrkCollection> getWorkoutCollectionList() {
		List<WorkoutCollection> wrkColList =workoutCollectionDAO.getWorkoutCollection();
		List<WrkCollection> wrkCols = new ArrayList<WrkCollection>();
		
		for(WorkoutCollection wrkcol:wrkColList) {
			List<WorkoutActive> wrkAct= workoutActiveDAO.findByWrkoutId(wrkcol.getWorkoutId());
			WrkCollection wrkcollection = new WrkCollection();
			wrkcollection.setCaloriesBurnPerMin(wrkcol.getCaloriesBurnPerMin());
			wrkcollection.setWorkoutCategory(wrkcol.getWorkoutCategory());
			wrkcollection.setWorkoutId(wrkcol.getWorkoutId());
			wrkcollection.setWorkoutTitle(wrkcol.getWorkoutTitle());
			wrkcollection.setWorkoutNote(wrkcol.getWorkoutNote());
			if(!wrkAct.isEmpty()) {
				wrkcollection.setStartFlag(true);
				wrkcollection.setWrkActiveId(wrkAct.get(0).getId());
			}else {
				wrkcollection.setStartFlag(false);
			}
			wrkCols.add(wrkcollection)	;
				
		}
		// TODO Auto-generated method stub
		return wrkCols;
	}

	@Override
	public WorkoutCollection findById(int id) {
		// TODO Auto-generated method stub
		WorkoutCollection workoutCollection;
		try {
			workoutCollection = workoutCollectionDAO.findById(id);
		}catch(Exception ex) {
			workoutCollection = null;
		}
		System.out.println(workoutCollection);
		return workoutCollection;
	}

	@Override
	public void createWorkoutCollection(WorkoutCollectionVO workoutCollectionVO) {
		// TODO Auto-generated method stub
		WorkoutCollection workoutCollection = new WorkoutCollection();
		workoutCollection.setCaloriesBurnPerMin(workoutCollectionVO.getCaloriesBurnPerMin());
		workoutCollection.setWorkoutNote(workoutCollectionVO.getWorkoutNote());
		workoutCollection.setWorkoutTitle(workoutCollectionVO.getWorkoutTitle());
		workoutCollection.setWorkoutCategory(WorkoutCategoryDAO.findById(workoutCollectionVO.getCategoryId()));
		workoutCollectionDAO.addWorkoutCollection(workoutCollection);
	}

	public void deleteWrkCollectionById(int id) {
		// TODO Auto-generated method stub
		workoutCollectionDAO.delete(id);
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

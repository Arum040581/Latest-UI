package com.worktracker.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worktracker.dao.WorkoutActiveDAO;
import com.worktracker.dao.WorkoutCollectionDAO;
import com.worktracker.entity.WorkoutActive;
import com.worktracker.vo.TrackerVO;
import com.worktracker.vo.WorkoutActiveVO;

@Service
@Transactional
public class WorkoutActiveServiceImp implements WorkoutActiveService {
	@Autowired
	WorkoutActiveDAO workoutActiveDAO;
	@Autowired
	WorkoutCollectionDAO workoutCollectionDAO;
	
	@Autowired
	DataSource dataSource;


	public List<WorkoutActive> getWorkoutActive() {
		return workoutActiveDAO.getWorkoutAct();
	}

	public WorkoutActive findById(int id) {
		return workoutActiveDAO.findById(id);
	}

	public void updateWorkoutActive(WorkoutActiveVO workoutActiveVO) {
		
		
		WorkoutActive workoutActive = findById(workoutActiveVO.getId());
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		long ms;
		try {
			ms = sdf.parse(workoutActiveVO.getEndTime()).getTime();
			Time t = new Time(ms);
			workoutActive.setEndTime(t);
			SimpleDateFormat DateFormat = new SimpleDateFormat("MM/dd/yyyy");
		       System.out.println(DateFormat.parse(workoutActiveVO.getEndDate()));
		       workoutActive.setEnddate(new java.sql.Date(DateFormat.parse(workoutActiveVO.getEndDate()).getTime()));
		} catch (ParseException e) {
			e.printStackTrace();
		}	
		
		workoutActive.setStatus(false);
		workoutActive.setWorkoutId(workoutActiveVO.getWorkoutId());
		workoutActive.setComment(workoutActiveVO.getComment());
		workoutActiveDAO.update(workoutActive,workoutActiveVO.getId());
	}
	public void createWorkoutActive(WorkoutActiveVO workoutActiveVO) {
		
		WorkoutActive workoutActive =new WorkoutActive();
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		long ms;
		try {
			ms = sdf.parse(workoutActiveVO.getStartTime()).getTime();
			Time t = new Time(ms);
			workoutActive.setStartTime(t);
			SimpleDateFormat DateFormat = new SimpleDateFormat("MM/dd/yyyy");
		       System.out.println(DateFormat.parse(workoutActiveVO.getStartDate()));
		       workoutActive.setStartdate(new java.sql.Date(DateFormat.parse(workoutActiveVO.getStartDate()).getTime()));
		} catch (ParseException e) {
			e.printStackTrace();
		}	
		
		workoutActive.setStatus(true);
		workoutActive.setWorkoutId(workoutActiveVO.getWorkoutId());
		workoutActive.setComment(workoutActiveVO.getComment());
		
		workoutActiveDAO.addWorkoutAct(workoutActive);
	}
	public void deleteWorkoutActive(WorkoutActive workoutActive) {
		workoutActiveDAO.delete(workoutActive.getId());
		
	}
	
	
	public TrackerVO tracker() {
		TrackerVO trackerVO =new TrackerVO();	
		// create the java statement
	      Statement st;
		try {
			st = dataSource.getConnection().createStatement();
		
	      String query = "SELECT IFNULL(c.calories_burn_per_min,0) as cal,Month(w.end_date) as month,MonthNAME(w.end_date) as monthname,SUM(IFNULL((TIME_TO_SEC(TIMEDIFF(w.end_time,w.start_time)))/60,0))as min FROM workout_active w INNER JOIN workout_collection c  WHERE  w.workout_id = c.workout_id and year(w.end_date)  = (year(CURDATE()))";
	      // execute the query, and get a java resultset
	      ResultSet rs = st.executeQuery(query);
	      int years[] = {0,0,0,0,0,0,0,0,0,0,0,0};
	      long years_cal=0;
	      // iterate through the java resultset
	      while (rs.next())
	      {
	        int month = rs.getInt("month");
	        int min = rs.getInt("min");
	        int cal = rs.getInt("cal");
	        cal=min*cal;
	        years_cal=years_cal+cal;
	        years[month-1] = cal+years[month-1];
	      }
	      trackerVO.setYears(years);
	      trackerVO.setYears_cal(years_cal);
	      
	      String monthquery = "SELECT IFNULL(c.calories_burn_per_min,0) as cal,WEEK(w.end_date) as date, FLOOR((DayOfMonth(w.end_date)-1)/7)+1 as week,SUM(TIME_TO_SEC(TIMEDIFF(w.end_time,w.start_time)))/60 as min FROM workout_active w INNER JOIN workout_collection c WHERE   w.workout_id = c.workout_id and Month(end_date)  = (Month(CURDATE())) GROUP BY WEEK(end_date);";
	      rs = st.executeQuery(monthquery);
	      int month_week[] = {0,0,0,0,0};
	      long month_cal=0;
	      while (rs.next())
	      {
	        int week = rs.getInt("week");
	        int min = rs.getInt("min");
	        int cal = rs.getInt("cal");
	        cal=min*cal;
	        month_cal=month_cal+cal;
	        month_week[week-1] = cal+month_week[week-1];
	      }
	      
	      trackerVO.setMonth(month_week);;
	      trackerVO.setMonth_cal(month_cal);
	      
	      String weekquery = "SELECT IFNULL(c.calories_burn_per_min,0) as cal,DAY(w.end_date) as date,DAYOFWEEK(w.end_date) as day,SUM((TIME_TO_SEC(TIMEDIFF(w.end_time,w.start_time)))/60)as min FROM workout_active  w INNER JOIN workout_collection c WHERE w.workout_id = c.workout_id and WEEK(w.end_date)  = (WEEK(CURDATE())) GROUP BY w.end_date;";
	      rs = st.executeQuery(weekquery);
	      int week_day[] = {0,0,0,0,0,0,0};
	      long week_cal=0;
	      while (rs.next())
	      {
	        int day = rs.getInt("day");
	        int min = rs.getInt("min");
	        int cal = rs.getInt("cal");
	        cal=min*cal;
	        week_cal=week_cal+cal;
	        week_day[day-1] = cal+week_day[day-1];
	      }
	      
	      trackerVO.setWeek(week_day);
	      trackerVO.setWeek_cal(week_cal);
	      
	      
	      
	      st.close();
	      
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return trackerVO ;
	    }
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


package com.worktracker.vo;

import com.worktracker.entity.WorkoutCollection;

public class WrkCollection  extends WorkoutCollection {

	private boolean startFlag;
	private int wrkActiveId;
	
	
	
	public int getWrkActiveId() {
		return wrkActiveId;
	}

	public void setWrkActiveId(int wrkActiveId) {
		this.wrkActiveId = wrkActiveId;
	}

	public boolean isStartFlag() {
		return startFlag;
	}

	public void setStartFlag(boolean startFlag) {
		this.startFlag = startFlag;
	}

	
}

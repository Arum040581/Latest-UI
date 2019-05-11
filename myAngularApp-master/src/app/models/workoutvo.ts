export class WorkoutVo {
    constructor(
       
		public workoutId: number,
		public workoutTitle: string,
		public workoutNote: string, 
		public workDate: Date, 
		public workTime: Date 
    ){}
}
export class WorkoutCollectionVO {
    constructor(
       
		public workoutTitle: string,
		public workoutNote: string, 
		public caloriesBurnPerMin: number, 
		public categoryId: string 
    ){}
}
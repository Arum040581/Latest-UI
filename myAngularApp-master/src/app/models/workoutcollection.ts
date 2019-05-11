import { WorkoutCategory } from "./WorkoutCategory";

export class Workoutcollection {
    constructor(
		public workoutId: number,
        public workoutTitle: string,
        public workoutNote: string,
        public caloriesBurnPerMin: number ,
        public workoutCategory: WorkoutCategory 
    ){}
}


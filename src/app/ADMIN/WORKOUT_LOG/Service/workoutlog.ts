export interface WorkoutLog {
    logId?: number;
    date: string;
    workoutType: string;
    duration: number;
    caloriesBurned: number;
    notes?: string;
    userId: number;
}
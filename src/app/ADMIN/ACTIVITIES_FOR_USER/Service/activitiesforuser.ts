export interface Activity {
    activityId?: number; // Optional because it's auto-generated
    activityType: string;
    date: string;
    durationInMinutes: number;
    caloriesBurned: number;
    userId: number;
}
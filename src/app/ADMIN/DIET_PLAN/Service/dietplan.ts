export interface DietPlan {
    planId?: number;
    startDate: string;
    endDate: string;
    mealPlan: string;
    notes?: string;
    userId: number;
}
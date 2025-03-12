import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
//import { UserprofileComponent } from './ADMIN/USER_PROFILE/userprofile/userprofile.component';
import { DietPlanComponent } from './ADMIN/DIET_PLAN/dietplan/dietplan.component';
import { ActivitiesforuserComponent } from './ADMIN/ACTIVITIES_FOR_USER/activitiesforuser/activitiesforuser.component';
import { HealthmetricsComponent } from './ADMIN/healthmetrics/healthmetrics.component';
import { SubscriptionComponent } from './ADMIN/SUBSCRIPTION_PLAN/subscription/subscription.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { WorkoutLogComponent, WorkoutlogComponent } from './ADMIN/WORKOUT_LOG/workoutlog/workoutlog.component';
import { AchievementComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/achievements/achievements.component';
import { CrudComponent } from './ADMIN/USER_PROFILE/crud/crud.component';
import { UserprofileUpdateComponent } from './ADMIN/USER_PROFILE/userprofile-update/userprofile-update.component';
import { UserprofileGetidComponent } from './ADMIN/USER_PROFILE/userprofile-getid/userprofile-getid.component';
import { UserprofileDeleteidComponent } from './ADMIN/USER_PROFILE/userprofile-deleteid/userprofile-deleteid.component';
import { CurdSubscriptionComponent } from './ADMIN/SUBSCRIPTION_PLAN/curd-subscription/curd-subscription.component';
import { SubscriptionUpdateComponent } from './ADMIN/SUBSCRIPTION_PLAN/subscription-update/subscription-update.component';
import { SubscriptionGetidComponent } from './ADMIN/SUBSCRIPTION_PLAN/subscription-getid/subscription-getid.component';
import { SubscriptionDeleteIdComponent } from './ADMIN/SUBSCRIPTION_PLAN/subscription-deleteid/subscription-deleteid.component';
import { CrudDietplanComponent } from './ADMIN/DIET_PLAN/crud-dietplan/crud-dietplan.component';
import { DietplanUpdateidComponent } from './ADMIN/DIET_PLAN/dietplan-updateid/dietplan-updateid.component';
import { DietplanGetidComponent } from './ADMIN/DIET_PLAN/dietplan-getid/dietplan-getid.component';
import { DietplandeleteidComponent } from './ADMIN/DIET_PLAN/dietplan-deleteid/dietplan-deleteid.component';
import { CrudActivitiesforuserComponent } from './ADMIN/ACTIVITIES_FOR_USER/crud-activitiesforuser/crud-activitiesforuser.component';
import { ActivitiesforuserUpdateidComponent } from './ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-updateid/activitiesforuser-updateid.component';
import { ActivitiesForUserGetIdComponent } from './ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-getid/activitiesforuser-getid.component';
import { ActivitiesForUserDeleteIdComponent } from './ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-deleteid/activitiesforuser-deleteid.component';
import { CrudAchievementsComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/crud-achievements/crud-achievements.component';
import { AchievementsUpdateidComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/achievements-updateid/achievements-updateid.component';
//import { AchievementsGetidComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/achievements-getid/achievements-getid.component';
import { AchievementsDeleteidComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/achievements-deleteid/achievements-deleteid.component';
import { UserProfileComponent } from './ADMIN/USER_PROFILE/userprofile/userprofile.component';
import { UserProfileGetAllComponent } from './ADMIN/USER_PROFILE/userprofile-getall/userprofile-getall.component';
import { UserprofileDeleteallComponent } from './ADMIN/USER_PROFILE/userprofile-deleteall/userprofile-deleteall.component';
import { SubscriptionGetAllComponent } from './ADMIN/SUBSCRIPTION_PLAN/subscription-getall/subscription-getall.component';
import { ActivitiesForUserUserIdComponent } from './ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-userid/activitiesforuser-userid.component';
import { DietPlanGetallComponent } from './ADMIN/DIET_PLAN/dietplan-getall/dietplan-getall.component';
import { AchievementsGetAllComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/achievements-getall/achievements-getall.component';
import { WorkoutlogGetallComponent } from './ADMIN/WORKOUT_LOG/workoutlog-getall/workoutlog-getall.component';
import { HealthMetricsGetAllComponent } from './ADMIN/HEALTH_METRICS/healthmetrics-getall/healthmetrics-getall.component';
import { HealthMetricsComponent } from './ADMIN/HEALTH_METRICS/healthmetrics/healthmetrics.component';
import { UserGuard } from './INTERCEPTOR/GUARD/user.guard';
import { AdminGuard } from './INTERCEPTOR/GUARD/admin.guard';
import { HomeComponent } from './home/home.component';
import { AchievementsGetUserIdComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/achievements-getuserid/achievements-getuserid.component';
import { DietPlanGetUserIdComponent } from './ADMIN/DIET_PLAN/dietplan-getuserid/dietplan-getuserid.component';
import { NavbarWithlogoutComponent } from './navbar-withlogout/navbar-withlogout.component';
import { WorkoutLogComponent } from './ADMIN/WORKOUT_LOG/workoutlog/workoutlog.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AppComponent } from './app.component';
//import { AchievementsGetUserIdComponent } from './ADMIN/ACHIEVEMENTS_OF_USER/achievements-getuserid/achievements-getuserid.component';
//import { UserProfileComponent, UserrofileComponent } from './ADMIN/USER_PROFILE/userprofile/userprofile.component';
//import { UserProfileComponent } from './ADMIN/USER_PROFILE/userprofile/userprofile.component';
//import { UserprofileGetAllComponent } from './ADMIN/USER_PROFILE/userprofile-getall/userprofile-getall.component';

//import { AuthService } from './Authservice/AuthService';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-user', component: HomeUserComponent, canActivate: [UserGuard] },
    { path: 'home-admin', component: HomeAdminComponent, canActivate: [AdminGuard] },
    { path: 'navbar', component: NavbarComponent },
    { path: 'navbar-withlogout', component: NavbarWithlogoutComponent },


    { path: 'crud', component: CrudComponent, canActivate: [AdminGuard] },
    { path: 'userprofile', component: UserProfileComponent, canActivate: [AdminGuard] },
    { path: 'userprofile-update', component: UserprofileUpdateComponent, canActivate: [AdminGuard] },
    { path: 'userprofile-getid', component: UserprofileGetidComponent, canActivate: [UserGuard] },
    { path: 'userprofile-deleteid', component: UserprofileDeleteidComponent, canActivate: [AdminGuard] },
    { path: 'userprofile-getall', component: UserProfileGetAllComponent, canActivate: [AdminGuard] },
    { path: 'userprofile-deleteall', component: UserprofileDeleteallComponent, canActivate: [AdminGuard] },


    { path: 'curd-subscription', component: CurdSubscriptionComponent, canActivate: [AdminGuard] },
    { path: 'subscription', component: SubscriptionComponent, canActivate: [AdminGuard] },
    { path: 'subscription-update', component: SubscriptionUpdateComponent, canActivate: [AdminGuard] },
    { path: 'subscription-getid', component: SubscriptionGetidComponent, canActivate: [UserGuard] },
    { path: 'subscription-getall', component: SubscriptionGetAllComponent, canActivate: [AdminGuard] },
    { path: 'subscription-deleteid', component: SubscriptionDeleteIdComponent, canActivate: [AdminGuard] },

    { path: 'crud-dietplan', component: CrudDietplanComponent, canActivate: [AdminGuard] },
    { path: 'dietplan', component: DietPlanComponent, canActivate: [AdminGuard] },
    { path: 'dietplan-updateid', component: DietplanUpdateidComponent, canActivate: [AdminGuard] },
    { path: 'dietplan-getid', component: DietplanGetidComponent, canActivate: [UserGuard] },
    { path: 'dietplan-getall', component: DietPlanGetallComponent, canActivate: [AdminGuard] },
    { path: 'dietplan-getuserid', component: DietPlanGetUserIdComponent, canActivate: [UserGuard] },
    { path: 'dietplan-deleteid', component: DietplandeleteidComponent, canActivate: [AdminGuard] },

    { path: 'crud-activitiesforuser', component: CrudActivitiesforuserComponent, canActivate: [AdminGuard] },
    { path: 'activitiesforuser', component: ActivitiesforuserComponent, canActivate: [AdminGuard] },
    { path: 'activitiesforuser-userid', component: ActivitiesForUserUserIdComponent, canActivate: [UserGuard] },
    { path: 'activitiesforuser-updateid', component: ActivitiesforuserUpdateidComponent, canActivate: [AdminGuard] },
    { path: 'activitiesforuser-getid', component: ActivitiesForUserGetIdComponent, canActivate: [UserGuard, AdminGuard] },
    { path: 'activitiesforuser-deleteid', component: ActivitiesForUserDeleteIdComponent, canActivate: [AdminGuard] },

    { path: 'crud-achievements', component: CrudAchievementsComponent, canActivate: [AdminGuard] },
    { path: 'achievements', component: AchievementComponent, canActivate: [AdminGuard] },
    { path: 'achievements-updateid', component: AchievementsUpdateidComponent, canActivate: [AdminGuard] },
    { path: 'achievements-getall', component: AchievementsGetAllComponent, canActivate: [AdminGuard] },
    { path: 'achievements-getuserid', component: AchievementsGetUserIdComponent, canActivate: [UserGuard] },
    { path: 'achievements-deleteid', component: AchievementsDeleteidComponent, canActivate: [AdminGuard] },

    // { path: 'healthmetrics', component: HealthmetricsComponent },
    { path: 'healthmetrics-getall', component: HealthMetricsGetAllComponent, canActivate: [AdminGuard] },
    { path: 'healthmetrics-1', component: HealthMetricsComponent, canActivate: [UserGuard] },

    { path: 'workoutlog', component: WorkoutLogComponent, canActivate: [UserGuard] },
    { path: 'workoutlog-getall', component: WorkoutlogGetallComponent, canActivate: [AdminGuard] },

    { path: 'unauthorized', component: UnauthorizedComponent },

    { path: 'appcomponent', component: AppComponent },

    { path: '**', redirectTo: 'unauthorized', pathMatch: 'full' },


];
export const appRouter = provideRouter(routes);
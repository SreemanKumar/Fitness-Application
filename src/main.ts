import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';  // Correct the path
import { routes } from './app/app.routes';            // Correct the path
import { RegisterComponent } from './app/register/register.component';
import { LoginComponent } from './app/login/login.component';
import { HomeUserComponent } from './app/home-user/home-user.component';
import { HomeAdminComponent } from './app/home-admin/home-admin.component';
//import { UserprofileComponent } from './app/ADMIN/USER_PROFILE/userprofile/userprofile.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HealthmetricsComponent } from './app/ADMIN/healthmetrics/healthmetrics.component';
import { SubscriptionComponent } from './app/ADMIN/SUBSCRIPTION_PLAN/subscription/subscription.component';
import { ActivitiesforuserComponent } from './app/ADMIN/ACTIVITIES_FOR_USER/activitiesforuser/activitiesforuser.component';
import { DietPlanComponent } from './app/ADMIN/DIET_PLAN/dietplan/dietplan.component';
import { AchievementComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/achievements/achievements.component';
import { WorkoutLogComponent } from './app/ADMIN/WORKOUT_LOG/workoutlog/workoutlog.component';
import { CrudComponent } from './app/ADMIN/USER_PROFILE/crud/crud.component';
import { UserprofileUpdateComponent } from './app/ADMIN/USER_PROFILE/userprofile-update/userprofile-update.component';
import { UserprofileGetidComponent } from './app/ADMIN/USER_PROFILE/userprofile-getid/userprofile-getid.component';
import { UserprofileDeleteidComponent } from './app/ADMIN/USER_PROFILE/userprofile-deleteid/userprofile-deleteid.component';
import { CurdSubscriptionComponent } from './app/ADMIN/SUBSCRIPTION_PLAN/curd-subscription/curd-subscription.component';
import { SubscriptionUpdateComponent } from './app/ADMIN/SUBSCRIPTION_PLAN/subscription-update/subscription-update.component';
import { SubscriptionGetidComponent } from './app/ADMIN/SUBSCRIPTION_PLAN/subscription-getid/subscription-getid.component';
import { SubscriptionDeleteIdComponent } from './app/ADMIN/SUBSCRIPTION_PLAN/subscription-deleteid/subscription-deleteid.component';
import { CrudDietplanComponent } from './app/ADMIN/DIET_PLAN/crud-dietplan/crud-dietplan.component';
import { DietplanUpdateidComponent } from './app/ADMIN/DIET_PLAN/dietplan-updateid/dietplan-updateid.component';
import { DietplanGetidComponent } from './app/ADMIN/DIET_PLAN/dietplan-getid/dietplan-getid.component';
import { DietplandeleteidComponent } from './app/ADMIN/DIET_PLAN/dietplan-deleteid/dietplan-deleteid.component';
import { CrudActivitiesforuserComponent } from './app/ADMIN/ACTIVITIES_FOR_USER/crud-activitiesforuser/crud-activitiesforuser.component';
import { ActivitiesforuserUpdateidComponent } from './app/ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-updateid/activitiesforuser-updateid.component';
import { ActivitiesForUserGetIdComponent } from './app/ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-getid/activitiesforuser-getid.component';
import { ActivitiesForUserDeleteIdComponent } from './app/ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-deleteid/activitiesforuser-deleteid.component';
import { CrudAchievementsComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/crud-achievements/crud-achievements.component';
import { AchievementsUpdateidComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/achievements-updateid/achievements-updateid.component';
//import { AchievementsGetidComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/achievements-getid/achievements-getid.component';
import { AchievementsDeleteidComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/achievements-deleteid/achievements-deleteid.component';
import { UserProfileComponent } from './app/ADMIN/USER_PROFILE/userprofile/userprofile.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileGetAllComponent } from './app/ADMIN/USER_PROFILE/userprofile-getall/userprofile-getall.component';
import { UserprofileDeleteallComponent } from './app/ADMIN/USER_PROFILE/userprofile-deleteall/userprofile-deleteall.component';
import { SubscriptionGetAllComponent } from './app/ADMIN/SUBSCRIPTION_PLAN/subscription-getall/subscription-getall.component';
import { ActivitiesForUserUserIdComponent } from './app/ADMIN/ACTIVITIES_FOR_USER/activitiesforuser-userid/activitiesforuser-userid.component';
import { DietPlanGetallComponent } from './app/ADMIN/DIET_PLAN/dietplan-getall/dietplan-getall.component';
import { AchievementsGetAllComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/achievements-getall/achievements-getall.component';
import { WorkoutlogGetallComponent } from './app/ADMIN/WORKOUT_LOG/workoutlog-getall/workoutlog-getall.component';
import { HealthMetricsGetAllComponent } from './app/ADMIN/HEALTH_METRICS/healthmetrics-getall/healthmetrics-getall.component';
import { HealthMetricsComponent } from './app/ADMIN/HEALTH_METRICS/healthmetrics/healthmetrics.component';
import { AdminGuard } from './app/INTERCEPTOR/GUARD/admin.guard';
import { headerInterceptor } from './app/INTERCEPTOR/GUARD/header.interceptor';
import { UtilitiesService } from './app/Services/utilities.service';
import { UserGuard } from './app/INTERCEPTOR/GUARD/user.guard';
import { HomeComponent } from './app/home/home.component';
//import { AchievementsGetUserIdComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/achievements-getuserid/achievements-getuserid.component';
import { DietPlanGetUserIdComponent } from './app/ADMIN/DIET_PLAN/dietplan-getuserid/dietplan-getuserid.component';
import { NavbarWithlogoutComponent } from './app/navbar-withlogout/navbar-withlogout.component';
import { UnauthorizedComponent } from './app/unauthorized/unauthorized.component';
import { AchievementsGetUserIdComponent } from './app/ADMIN/ACHIEVEMENTS_OF_USER/achievements-getuserid/achievements-getuserid.component';
//import { authInterceptor } from './app/INTERCEPTOR/auth.interceptor';
//import { authInterceptor } from './app/INTERCEPTOR/auth.interceptor';
//import { AuthService } from './app/Authservice/AuthService';
//import { UserprofileComponent } from './app/ADMIN/USER_PROFILE/userprofile/userprofile.component';
//import { UserProfileComponent } from './app/ADMIN/USER_PROFILE/userprofile/userprofile.component';
//import { UserprofileGetAllComponent } from './app/ADMIN/USER_PROFILE/userprofile-getall/userprofile-getall.component';
import { appConfig } from './app/app.config';



bootstrapApplication(AppComponent, appConfig)
//   {
//   providers: [
//     importProvidersFrom(HttpClientModule),
//     importProvidersFrom(ReactiveFormsModule),
//     provideHttpClient(withInterceptors([headerInterceptor(new UtilitiesService())])),

//     provideRouter([

//       { path: '', redirectTo: 'home', pathMatch: 'full' },
//       { path: 'login', component: LoginComponent },
//       { path: 'register', component: RegisterComponent },
//       { path: 'home-user', component: HomeUserComponent, canActivate: ["USER"] },
//       { path: 'home-admin', component: HomeAdminComponent },
      
//       { path: 'navbar', component: NavbarComponent },
      
//       { path: 'subscription', component: SubscriptionComponent },
//       { path: 'activitiesforuser', component: ActivitiesforuserComponent },
//       { path: 'dietplan', component: DietPlanComponent },
//       { path: 'workoutlog', component: WorkoutLogComponent },
//       { path: 'achievements', component: AchievementComponent },

//       { path: 'crud', component: CrudComponent },
//       { path: 'userprofile-update', component: UserprofileUpdateComponent },
//       { path: 'userprofile-getid', component: UserprofileGetidComponent },
//       { path: 'userprofile-deleteid', component: UserprofileDeleteidComponent },

//       { path: 'curd-subscription', component: CurdSubscriptionComponent },
//       { path: 'subscription-update', component: SubscriptionUpdateComponent },
//       { path: 'subscription-getid', component: SubscriptionGetidComponent },
//       { path: 'subscription-deleteid', component: SubscriptionDeleteIdComponent },

//       { path: 'crud-dietplan', component: CrudDietplanComponent },
//       { path: 'dietplan-updateid', component: DietplanUpdateidComponent },
//       { path: 'dietplan-getid', component: DietplanGetidComponent },
//       { path: 'dietplan-deleteid', component: DietplandeleteidComponent },

//       { path: 'crud-activitiesforuser', component: CrudActivitiesforuserComponent },
//       { path: 'activitiesforuser-updateid', component: ActivitiesforuserUpdateidComponent },
//       { path: 'activitiesforuser-getid', component: ActivitiesForUserGetIdComponent },
//       { path: 'activitiesforuser-deleteid', component: ActivitiesForUserDeleteIdComponent },

//       { path: 'crud-achievements', component: CrudAchievementsComponent },
//       { path: 'achievements-updateid', component: AchievementsUpdateidComponent },
      
//       { path: 'achievements-deleteid', component: AchievementsDeleteidComponent },
      
//       { path: 'userprofile', component: UserProfileComponent },
//       { path: 'userprofile-getall', component: UserProfileGetAllComponent },
//       { path: 'userprofile-deleteall', component: UserprofileDeleteallComponent },

//       { path: 'subscription-getall', component: SubscriptionGetAllComponent },

//       { path: 'activitiesforuser-userid', component: ActivitiesForUserUserIdComponent },

//       { path: 'dietplan-getall', component: DietPlanGetallComponent },

//       { path: 'achievements-getall', component: AchievementsGetAllComponent },

//       { path: 'workoutlog-getall', component: WorkoutlogGetallComponent },

//       { path: 'healthmetrics-getall', component: HealthMetricsGetAllComponent },

//       { path: 'healthmetrics-1', component: HealthMetricsComponent },

      

//       { path: 'home', component: HomeComponent },

//       { path: 'achievements-getuserid', component: AchievementsGetUserIdComponent },

//       { path: 'dietplan-getuserid', component: DietPlanGetUserIdComponent },

//       { path: 'navbar-withlogout', component: NavbarWithlogoutComponent },

//       { path: 'unauthorized', component: UnauthorizedComponent },

//       { path: '**', redirectTo: 'unauthorized', pathMatch: 'full' },

//     ])
//   ]
// }
.catch(err => console.error(err));
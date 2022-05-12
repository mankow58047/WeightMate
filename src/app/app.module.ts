import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { EntryDashboardComponent } from './entry-dashboard/entry-dashboard.component';
import { DashboardComponent } from './features/dashboard/dashboard.component'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthModule } from './features/auth/auth.module';
import { FoodComponent } from './food/food.component';
import { WaterComponent } from './water/water.component';
import { WeightComponent } from './weight/weight.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { AddWaterComponent } from './add-water/add-water.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { AddWeightComponent } from './add-weight/add-weight.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserWriteComponent } from './user-write/user-write.component';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EntryDashboardComponent,
    DashboardComponent,
    UserDetailComponent,
    FoodComponent,
    WaterComponent,
    WeightComponent,
    ExerciseComponent,
    AddFoodComponent,
    AddWaterComponent,
    AddExerciseComponent,
    AddWeightComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    UserWriteComponent,
  
   ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AuthModule
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

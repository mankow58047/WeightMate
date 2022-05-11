import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { EntryDashboardComponent } from './entry-dashboard/entry-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EntryDashboardComponent,
    DashboardComponent,
    UserDetailComponent,
    UserLoginComponent,
    FoodComponent,
    WaterComponent,
    WeightComponent,
    ExerciseComponent,
    AddFoodComponent,
    AddWaterComponent,
    AddExerciseComponent,
    AddWeightComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

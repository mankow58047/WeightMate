import { Component } from '@angular/core';
import { provideDatabase,getDatabase, Database } from '@angular/fire/database';
import { WeightMateService } from './weight-mate.service';
import { ExerciseService } from './exercise.service';
import { FoodService } from './food.service';
import { WaterService } from './water.service';
import { WeightService } from './weight.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WaterService, FoodService, WeightService, ExerciseService],
})

export class AppComponent {
  title = 'WeightMate';
  display: number = 0;

  constructor(private waterService: WaterService, 
    private weightService: WeightService,
     private foodService: FoodService, 
     private exerciseService: ExerciseService, 
     private authService: AuthService,
     private router: Router,
     ) { }

  addFood() {
    this.foodService.display = 1;   //Should this just be deleted?
  }

  showAddFood(){
    this.display = 11;
  }
  showAddWater() {
    this.waterService.display = 12;
  }

  showAddWeight() {
    this.weightService.display = 13;
  }

  showAddExercise() {
    this.exerciseService.display = 14;
  }
  // showSignIn(){
  //   this.display =10;
  // } 
  logout(){
    this.authService
    .logout()
    .then(() => this.router.navigate(['/']))
    .catch((e)=> console.log(e.message));
  }
}


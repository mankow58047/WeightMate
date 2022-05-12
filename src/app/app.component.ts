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
    this.foodService.display = 1;
  }

  showAddFood(){
    this.display = 11;
  }
  addWater() {
    this.waterService.display = 2;
  }

  addWeight() {
    this.weightService.display = 3;
  }

  addExercise() {
    this.exerciseService.display = 4;
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


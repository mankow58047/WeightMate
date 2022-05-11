import { Component } from '@angular/core';
import { provideDatabase,getDatabase, Database } from '@angular/fire/database';
import { ExerciseService } from './exercise.service';
import { FoodService } from './food.service';
import { WaterService } from './water.service';
import { WeightService } from './weight.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExerciseService, FoodService, WaterService, WeightService],
})
export class AppComponent {
  title = 'WeightMate';

  
  showFood() {
    this.foodService.display = 1;
  }

  showWater() {
    this.waterService.display = 2;
  }

  showWeight() {
    this.weightService.display = 3;
  }

  showExercise() {
    this.exerciseService.display = 4;
  }

}


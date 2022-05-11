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
  providers: [WaterService, FoodService, WeightService, ExerciseService],
})

export class AppComponent {
  title = 'WeightMate';
  display: number = 0;

  constructor(private waterService: WaterService, private weightService: WeightService,
     private foodService: FoodService, private exerciseService: ExerciseService) { }

  addFood() {
    this.foodService.display = 1;
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
  

}


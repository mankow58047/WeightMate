import { Component, EventEmitter, Output } from '@angular/core';
//import * as internal from 'stream';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-entry-dashboard',
  templateUrl: './entry-dashboard.component.html',
  styleUrls: ['./entry-dashboard.component.css']
})
export class EntryDashboardComponent {
  @Output() foodAdded = new EventEmitter<{name: string; calories: number; fat: number; cholesterol: number;
     sodium: number; sugar: number; protein: number }>()

  onCreateFood(foodName: string, foodCalories: number, foodFat: number, foodCholesterol: number, foodSodium: number, foodSugar: number, foodProtein: number) {
    this.foodAdded.emit({
      name: foodName,
      calories: foodCalories,
      fat: foodFat,
      cholesterol: foodCholesterol,
      sodium: foodSodium,
      sugar: foodSugar,
      protein: foodProtein,
      
    });
  }

  @Output() exerciseAdded = new EventEmitter<{name: string; duration: number; caloriesBurned: number}>()

  onCreateExercise(exerciseName: string, exerciseDuration: number, exerciseCaloriesBurned: number) {
    this.exerciseAdded.emit({
      name: exerciseName,
      duration: exerciseDuration,
      caloriesBurned: exerciseCaloriesBurned,
    });
  }



  @Output() waterAdded = new EventEmitter<{amount: number }>()

  onCreateWaterAdded(waterAmount: number) {
    this.waterAdded.emit({
      amount: waterAmount,
    });
  }



  @Output() weightAdded = new EventEmitter<{amount: number}>()

  onCreateWeight(weightAmount: number) {
    this.weightAdded.emit({
      amount: weightAmount,
    });
  }


}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newdashboard',
  templateUrl: './newdashboard.component.html',
  styleUrls: ['./newdashboard.component.css']
})
export class NewdashboardComponent {

  //food section 

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



 //exercise section 


@Output() exerciseAdded = new EventEmitter<{name: string; duration: number; caloriesBurned: number}>()

  onCreateExercise(exerciseName: string, exerciseDuration: number, exerciseCaloriesBurned: number) {
    this.exerciseAdded.emit({
      name: exerciseName,
      duration: exerciseDuration,
      caloriesBurned: exerciseCaloriesBurned,
    });
  }


  // water section 

  @Output() waterAdded = new EventEmitter<{amount: number }>()

  onCreateWaterAdded(waterAmount: number) {
    this.waterAdded.emit({
      amount: waterAmount,
    });
  }



  //weight section 



  @Output() weightAdded = new EventEmitter<{amount: number}>()

  onCreateWeight(weightAmount: number) {
    this.weightAdded.emit({
      amount: weightAmount,
    });
  }


}

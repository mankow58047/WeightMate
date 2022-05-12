import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from './../exercise';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) { }

  addExercise(name: string, duration: string, caloriesBurned: string) {
    const newExercise: Exercise = {
      name: name,
      duration: duration,
      caloriesBurned: caloriesBurned,
    };
    this.exerciseService.addExercise(newExercise);
    this.exerciseService.display = 14;
  }

  ngOnInit(): void {
  }

}

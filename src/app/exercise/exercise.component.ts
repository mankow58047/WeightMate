import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  exercise: Exercise = {name: '', duration: '', caloriesBurned: ''};

  constructor(private exerciseService: ExerciseService) { }

}

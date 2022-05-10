import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  intExercise: Exercise[] = [

  ];

  constructor(private http: HttpClient) { }

  addExercise(newExercise: Exercise) {
    this.intExercise.push(newExercise);
  }
}

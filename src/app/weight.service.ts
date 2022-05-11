import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weight } from './weight';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  
  display: number = 3;

  intWeight: Weight[] = [


  ];

  constructor(private http: HttpClient) { }

  addWeight(newWeight: Weight) {
    this.intWeight.push(newWeight);
  }
}

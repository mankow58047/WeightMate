import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Water } from './water';

@Injectable({
  providedIn: 'root'
})
export class WaterService {
  
  display: number = 2;

  intWater: Water[] = [

  ];

  constructor(private http: HttpClient) { }

  addWater(newWater: Water) {
    this.intWater.push(newWater);
  }
}

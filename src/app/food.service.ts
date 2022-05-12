import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  display: number = 1;

  intFood: Food[] = [
    

  ];

  constructor(private http: HttpClient) { }

  addFood(newFood: Food) {
    return this.http.post('https://weight-mate-1c908-default-rtdb.firebaseio.com/'+'user/food.json', newFood);
  }
}

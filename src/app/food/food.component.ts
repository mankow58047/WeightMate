import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  food: Food = { name:'', calories: '', fat: '', cholesterol: '',
   sodium: '', sugar: '', protein:'' };

   constructor(private foodService: FoodService) { }

}

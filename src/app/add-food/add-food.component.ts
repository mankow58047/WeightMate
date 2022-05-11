import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from './../food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  addFood(name: string, calories: string, fat: string, cholesterol: string, 
    sodium: string, sugar: string, protein: string ) {
      const newFood: Food = {
        name: name,
        calories: calories,
        fat: fat,
        cholesterol: cholesterol,
        sodium: sodium,
        sugar: sugar,
        protein: protein,
      };
      this.foodService.addFood(newFood);
      this.foodService.display = 1;
    }

  ngOnInit(): void {
  }

}

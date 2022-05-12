import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from './../food';
import { WeightMateService } from '../weight-mate.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  constructor(
    private foodService: FoodService,
    private WMUserService: WeightMateService
    ) { }

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
      this.foodService.addFood(newFood).subscribe(data => {console.log(data)});
      this.foodService.display = 11;
    }

  ngOnInit(): void {
  }

}

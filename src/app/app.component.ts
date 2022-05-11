import { Component } from '@angular/core';
import { provideDatabase,getDatabase, Database } from '@angular/fire/database';
import { WeightMateService } from './weight-mate.service';
import { ExerciseService } from './exercise.service';
import { FoodService } from './food.service';
import { WaterService } from './water.service';
import { WeightService } from './weight.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExerciseService, FoodService, WaterService, WeightService],
})
export class AppComponent {
  title = 'WeightMate';
  display: number =1;
  constructor( private WMService: WeightMateService){}

  showSignIn(){
    this.display = 10;
    //this.WMService.display = 10;
  }

  
  

}


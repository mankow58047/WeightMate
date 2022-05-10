import { Component, OnInit } from '@angular/core';
import { Water } from '../water';
import { WaterService } from '../water.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {

  water: Water = {amount:''};

  constructor(private waterService: WaterService) { }

  

}

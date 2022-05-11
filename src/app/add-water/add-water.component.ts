import { Component, OnInit } from '@angular/core';
import { WaterService } from '../water.service';
import { Water } from './../water'

@Component({
  selector: 'app-add-water',
  templateUrl: './add-water.component.html',
  styleUrls: ['./add-water.component.css']
})
export class AddWaterComponent implements OnInit {

  constructor(private waterService: WaterService) { }

  addWater(amount: string) {
    const newWater: Water = {
      amount: amount,
    };
    this.waterService.addWater(newWater);
    this.waterService.display = 12;
  }

  ngOnInit(): void {
  }

}

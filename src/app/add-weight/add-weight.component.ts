import { Component, OnInit } from '@angular/core';
import { WeightService } from '../weight.service';
import { Weight } from './../weight';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css']
})
export class AddWeightComponent implements OnInit {

  constructor(private weightService: WeightService) { }

  addWeight(amount: string) {
    const newWeight: Weight = {
      amount: amount,
    };
    this.weightService.addWeight(newWeight);
  }

  ngOnInit(): void {
  }

}

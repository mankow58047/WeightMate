import { Component, OnInit } from '@angular/core';
import { Weight } from '../weight';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent {

  weight: Weight = {amount: ''};

  constructor(private weightService: WeightService) { }

}

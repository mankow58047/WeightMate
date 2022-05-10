import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { WeightMateService } from '../weight-mate.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private WMUserService: WeightMateService) { }

  ngOnInit(): void {
  }

  // logIn(){
  //   const userLogIn: User = [{
  //     userName: this.userName,
  //     password: this.password,
  //   }]

  // }

}

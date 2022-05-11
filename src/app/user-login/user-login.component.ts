import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { WeightMateService } from '../weight-mate.service';
import { UserLogin } from '../user-login';
import { AngularFireModule } from 'angularfire2';
import { provideDatabase,getDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  //constructor(private WMUserService: WeightMateService) { }

   ngOnInit(): void {
  }

  logIn(){

  }
}

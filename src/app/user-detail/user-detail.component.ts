import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { WeightMateService } from '../weight-mate.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userList: User[] = [];
    userName!: string;
    password!: string;
    email!: string;
    fName!: string;
    lName!: string;
    birthdate!: string;
    height!: string;
    weight!: number;
    

  constructor(private WMUserService: WeightMateService) { }

  ngOnInit() {
    //this.userList = this.userService.USER;
  }

  addNewUser(){
    const newUser: User = {
      userName: this.userName,
      password: this.password,
      email: this.email,
      fName: this.fName,
      lName: this.lName,
      birthdate: this.birthdate,
      height: this.height, 
      weight: this.weight,
    }
    this.WMUserService.addUser(newUser).subscribe(data => {console.log(data)});
  }
}

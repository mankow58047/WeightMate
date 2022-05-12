import { Component, OnInit } from '@angular/core';
import { getAuth, getIdToken } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { authInstanceFactory } from '@angular/fire/auth/auth.module';


@Component({
  selector: 'app-user-write',
  templateUrl: './user-write.component.html',
  styleUrls: ['./user-write.component.css']
})
export class UserWriteComponent implements OnInit {
  auth = getAuth();
  

  constructor() { }

  ngOnInit(): void {
  }


}

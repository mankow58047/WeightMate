import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
   
  constructor( ) { }
  
  ngOnInit(): void {
  // const auth=getAuth();
  // const user = auth.currentUser;
  //   if (user !==null){
  //     const uid = user.uid;
  //     console.log(uid)
  //   }
  //   else{
      
  //   }
 
    
  }

}

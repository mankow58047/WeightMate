import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightMateService {



  USER: User[] = [
    {
      userName: 'Jojo',
      password: '1234',
      email: 'jojo@email.com',
      fName: 'Jojo',
      lName: 'Doe',
      birthdate: '05/04/1980',
      height: '5 foot 9 inches',
      weight: 155,
    }

  ];

//   constructor(private http: HttpClient) { 
//     addUser(newUser: User){
//       return this.http.post('', newUser);
//     }
//   }
}

import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeightMateService {
  
  constructor(private http: HttpClient){}


    addUser(newUr: User){
      return this.http.post('https://weight-mate-1c908-default-rtdb.firebaseio.com/'+'user.json', newUr);
    }
  
}

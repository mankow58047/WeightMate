import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeightMateService {
  
  constructor(private http: HttpClient){}

  foodAPI: string = '9nvWyMu1KuPfHcQGPA4ln6tT3e0bk3tR16tpc4Jm'
  foodQuery: any = 'chedder cheese'
  foodURL: string = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key='

  //foodSearch (){}

  

    addUser(newUr: User){
      return this.http.post('https://weight-mate-1c908-default-rtdb.firebaseio.com/'+'user.json', newUr);
    }

    getUser(){
      return this.http.get<User[]>('https://weight-mate-1c908-default-rtdb.firebaseio.com/'+'user.json');
    }

    

  
}

//API key for USDA food search 9nvWyMu1KuPfHcQGPA4ln6tT3e0bk3tR16tpc4Jm

import { Injectable } from '@angular/core';
import { Auth,   
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut } from '@angular/fire/auth';
  import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  login({email, password}: UserLogin){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({email, password}: UserLogin){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }
}

import { Injectable } from '@angular/core';
import { Auth,   
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut, 
  user} from '@angular/fire/auth';
  import { UserLogin } from './user-login';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

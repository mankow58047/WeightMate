import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../user-login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
     ) { }

   ngOnInit(): void {
  }

  login(loginData: UserLogin) {
    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/dashboard']))
      .catch((e) => console.log(e.message));
  }
}

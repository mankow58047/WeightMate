import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from 'src/app/user-login/user-login.component';
import { RegisterPageComponent } from 'src/app/register-page/register-page.component';


const routes: Routes = [
  { path: '', component: UserLoginComponent},
  { path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

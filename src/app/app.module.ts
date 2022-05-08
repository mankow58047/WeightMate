import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { EntryDashboardComponent } from './entry-dashboard/entry-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component'
=======
import { UserDetailComponent } from './user-detail/user-detail.component'
>>>>>>> 3051b09e1abdc86b0cccbcc923d97cc52fdf4fce

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
<<<<<<< HEAD
    EntryDashboardComponent,
    DashboardComponent
=======
    UserDetailComponent
>>>>>>> 3051b09e1abdc86b0cccbcc923d97cc52fdf4fce
  ],
  imports: [
    BrowserModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

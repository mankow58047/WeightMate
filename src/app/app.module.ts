import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { EntryDashboardComponent } from './entry-dashboard/entry-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserLoginComponent } from './user-login/user-login.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EntryDashboardComponent,
    DashboardComponent,
    UserDetailComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

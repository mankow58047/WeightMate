import { Component } from '@angular/core';
import { provideDatabase,getDatabase, Database } from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeightMate';

}


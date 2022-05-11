import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { provideDatabase,getDatabase, Database } from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeightMate';

  constructor(db: Database ){
    db.type
  }
}


import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, updateProfile } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {}
  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log(user);
      }
    });
  }
}

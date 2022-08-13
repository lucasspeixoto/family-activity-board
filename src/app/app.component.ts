import { Component, OnInit } from '@angular/core';

import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: Auth) {}

  ngOnInit(): void {
    this.emailLogin('lspeixotodev@gmail.com', '30101991').then(value => {
      console.log(value);
    });
  }

  async emailLogin(email: string, password: string): Promise<any> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
}

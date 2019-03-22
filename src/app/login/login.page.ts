import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  router: any;
  
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.login();
  }

  login() {this.afAuth.authState.subscribe(res => {
    if (res && res.uid) {
      this.router.navigateByUrl('/home');

    } else {
      console.log('user not logged in');
      this.router.navigateByUrl('/login');
    }
  })
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

}

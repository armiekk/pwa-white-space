import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenService {

  isLoggedIn: boolean = false;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe((val) =>
      this.isLoggedIn = val && val.uid ? true : false
    );
  }

  login() {
    return Observable.fromPromise(this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .do(() => this.isLoggedIn = true);
  }

  logout() {
    this.afAuth.auth.signOut().then(() => this.isLoggedIn = false);
  }


}

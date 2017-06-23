import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class FirebaseService {

  private _user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this._user = afAuth.authState;
  }

  async getUserDetail() {
    return await this._user.toPromise();
  }

  async isLoggedIn() {
    const userDetail: firebase.User = await this.getUserDetail();
    return userDetail.uid;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) {}

  createUser(email: string , password: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string , password: string) {
    return this.afa.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.afa.auth.signOut();
  }
  hasUser() {
    return this.afa.authState;
  }
}

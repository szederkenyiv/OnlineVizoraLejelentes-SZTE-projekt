import {inject, Injectable, signal} from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  updateProfile,
  user
} from "@angular/fire/auth";
import {from, Observable} from "rxjs";
import {UserInterface} from "../model/user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  firebaseAuth=inject(Auth)
  router = inject(Router);
  user$=user(this.firebaseAuth)
  currentUserSig=signal<UserInterface|null|undefined>(undefined)
  register(email:string,username:string,password:string):Observable<void>{
    const promise=createUserWithEmailAndPassword(this.firebaseAuth,email,password,).then(response=>updateProfile(response.user,{displayName:username}))
    return from(promise);
  }

  login(email: string, password:string): Observable<void>{
    const promise= signInWithEmailAndPassword(
      this.firebaseAuth, email, password
    ).then(()=>{});
    return from(promise);
  }
  logout() {
    return this.firebaseAuth.signOut().then(() => {
      this.router.navigate(['/home']); // A kijelentkezés után navigálunk a home oldalra
    });
    }



}

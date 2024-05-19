import {Component, inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "./shared/services/auth.service";
import {NavigationbarComponent} from "./shared/navigationbar/navigationbar.component";


@Component({
  selector: 'app-root',
  encapsulation:ViewEncapsulation.None,
  imports: [CommonModule, RouterOutlet, RouterLink, NavigationbarComponent],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.css',
  standalone: true
})
export class AppComponent implements OnInit,OnDestroy{
  authService=inject(AuthService)
  title='app'
  ngOnInit():void{
   this.authService.user$.subscribe((user)=>{
     if(user){
       this.authService.currentUserSig.set({
         email:user.email!,
         username:user.displayName!,

       });
     } else {
       this.authService.currentUserSig.set(null);
     }
     console.log(this);
   });
  }

  logout(): void {
   this.authService.logout();
  }

  ngOnDestroy(): void {
  }
}

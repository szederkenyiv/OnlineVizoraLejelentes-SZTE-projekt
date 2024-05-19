import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {Subscription} from "rxjs";
import {CommonModule, NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-navbar', // a komponens a sablonban ezen a néven lesz hivatkozva
  templateUrl: './navigationbar.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgIf,
    MatButton
  ],
  // a komponens HTML sablonjának fájlneve
  styleUrls: ['./navigationbar.component.css'] // a komponens CSS stílusfájljának fájlneve
})
export class NavigationbarComponent implements OnInit, OnDestroy{

  isHomePage: boolean = false;
  isLoginPage: boolean = false;
  isRegisterPage:boolean=false;
  isListPage:boolean=false;
  isAddPage: boolean=false;
  routerSubscription: Subscription | null = null;
  isLoggedIn:boolean=false;
  authService=inject(AuthService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage();
        this.checkIfLoginPage();
        this.checkIfRegisterPage();
        this.checkIfListPage();
        this.checkIfAddPage();
        this.checkIfLoggedIn();
      }
    });

  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  protected logout(){
    this.authService.logout();
  }
  private checkIfHomePage(): void {
    this.isHomePage = this.router.url === '/home' || this.router.url === '/';
  }
  private checkIfLoginPage(): void {
    this.isLoginPage = this.router.url === '/login';
  }
  private checkIfRegisterPage(): void{
    this.isRegisterPage=this.router.url==='/register';
  }
  private checkIfListPage():void{
    this.isListPage=this.router.url==='/list';
  }
  private checkIfAddPage():void{
    this.isAddPage=this.router.url==='/add';
  }
  private checkIfLoggedIn():void{
    this.isLoggedIn = !!this.authService.currentUserSig();
  }
}



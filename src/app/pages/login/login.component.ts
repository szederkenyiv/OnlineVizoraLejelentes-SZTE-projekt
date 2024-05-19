import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "../../shared/services/auth.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl:'login.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, MatButton, RouterLink],
})
export class LogicComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService=inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const rawFrom=this.form.getRawValue()
    this.authService.login(rawFrom.email,rawFrom.password).subscribe({
      next:()=>{
        this.router.navigateByUrl('/list');
      },
      error:(err)=>{
        this.errorMessage=err.code;
      }
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../shared/services/auth.service";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl:'register.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule],
})


export class RegisterComponent {

 constructor(private snackbar:MatSnackBar) {
 }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action,{duration:60000});
  }
  public messageSnack="Sikeres regisztráció";
  public actionValue="OK";
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService=inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });



  onSubmit(): void {
    const rawFrom=this.form.getRawValue()
    this.authService.register(rawFrom.email,rawFrom.username,rawFrom.password).subscribe({
    next:()=>{
      this.router.navigateByUrl('/list');
      this.openSnackBar("Sikeres regisztráció", this.actionValue);
    },
    error:(err)=>{
      this.openSnackBar("Sikertelen regisztráció",this.actionValue);

    }
    })
  }
}

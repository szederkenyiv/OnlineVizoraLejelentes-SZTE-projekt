import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaterMeterClass} from "../../shared/model/WaterMeter.class";
import {WaterMeterService} from "../../shared/services/WaterMeter.service";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  authService=inject(AuthService);
  ngOnInit(): void {
    console.log(this.authService.currentUserSig)
    if (!this.authService.currentUserSig()) {
      this.router.navigate(['/login']);
    }
  }
  waterMeterClass: WaterMeterClass=new WaterMeterClass();
  submitted=false;
  constructor(private waterMeterService:WaterMeterService, private router:Router) {}

  saveWaterMeter():void{
    this.waterMeterService.create(this.waterMeterClass).then(()=> {
      console.log('Created new item susccesfully!');
      this.submitted=true;
      this.router.navigate(['/list']);
    });
  }





}

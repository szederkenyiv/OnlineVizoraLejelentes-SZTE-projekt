import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaterMeterClass} from "../../shared/model/WaterMeter.class";
import {WaterMeterService} from "../../shared/services/WaterMeter.service";
import { map } from 'rxjs/operators';
import {DetailsComponent} from "../../shared/details/details.component";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DetailsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  http = inject(HttpClient);
  router = inject(Router);
  authService=inject(AuthService);


  waterMeters?:WaterMeterClass[];
  currentWaterMeter?: WaterMeterClass;
  currentIndex=-1;
  title='';
  constructor(private waterMeterService:WaterMeterService) {}

  ngOnInit(): void {

      if (!this.authService.currentUserSig()) {
        this.router.navigate(['/login']);
      }
      else {
        this.retrieveWaterMeters();
      }

  }

  refreshList(): void {
    this.currentWaterMeter = undefined;
    this.currentIndex = -1;
    this.retrieveWaterMeters();
  }
  retrieveWaterMeters(): void {
    this.waterMeterService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.waterMeters = data;
    });
  }

  setActiveWaterMeter(waterMeter: WaterMeterClass, index: number): void {
    this.currentWaterMeter = waterMeter;
    this.currentIndex = index;
  }
}

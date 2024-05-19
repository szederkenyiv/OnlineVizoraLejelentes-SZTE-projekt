import {Component, OnInit, OnChanges, Output, EventEmitter, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaterMeterClass} from "../model/WaterMeter.class";
import {WaterMeterService} from "../services/WaterMeter.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{


  @Input() waterMeter?: WaterMeterClass;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentWaterMeter: WaterMeterClass = {
    title: '',
    description: '',
  };
  message = '';

  constructor(private waterMeterService: WaterMeterService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentWaterMeter = { ...this.waterMeter };
  }



  updateWaterMeter(): void {
    const data = {
      title: this.currentWaterMeter.title,
      description: this.currentWaterMeter.description
    };

    if (this.currentWaterMeter.id) {
      this.waterMeterService.update(this.currentWaterMeter.id, data)
        .then(() => this.message = 'A vízóra sikeresen frissítve!')
        .catch(err => console.log(err));
    }
  }

  deleteWaterMeter(): void {
    if (this.currentWaterMeter.id) {
      this.waterMeterService.delete(this.currentWaterMeter.id)
        .then(() => {
          this.refreshList.emit();
          this.message = ' A vízóra sikeresen törölve!';
        })
        .catch(err => console.log(err));
    }
  }
}

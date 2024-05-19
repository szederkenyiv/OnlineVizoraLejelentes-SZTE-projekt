import {inject, Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WaterMeterClass } from '../model/WaterMeter.class';
import {Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class WaterMeterService {

  private dbPath = '/watermeter';

  watermeterRef: AngularFirestoreCollection<WaterMeterClass>;

  constructor(private db: AngularFirestore) {
    this.watermeterRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<WaterMeterClass> {
    return this.watermeterRef;
  }

  create(tutorial: WaterMeterClass): any {
    return this.watermeterRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.watermeterRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.watermeterRef.doc(id).delete();
  }
}

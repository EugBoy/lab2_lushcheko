import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {LCarInfo} from "../labels/car-info.label";
import {ICarInfo} from "../interfaces/car-info.interface";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _carsInfo: BehaviorSubject<ICarInfo[]> = new BehaviorSubject<ICarInfo[]>(
    [
      {[LCarInfo.ID]: 1, [LCarInfo.OWNER_NAME]:'Alex', [LCarInfo.DATE]: '18.03.2024', [LCarInfo.CAR_MARK]: 'AUDI', [LCarInfo.CAR_NUMBER]: 'А001АА'},
      {[LCarInfo.ID]: 2, [LCarInfo.OWNER_NAME]:'John', [LCarInfo.DATE]: '20.03.2024', [LCarInfo.CAR_MARK]: 'BMW', [LCarInfo.CAR_NUMBER]: 'B001АB'},
    ]
  );
  public carsInfo: Observable<ICarInfo[]> = this._carsInfo.asObservable();
  constructor() {}

  public addCarInfo(carInfo: any): void {
    const currentValue: any = this._carsInfo.value;
    let id: number = 1;
    const len = currentValue.length;
    console.log(currentValue);
    if (len > 0) {
      id = currentValue[len-1].id + 1;
    }
    carInfo.id = id;
    this._carsInfo.next([...currentValue, carInfo]);
  }

}

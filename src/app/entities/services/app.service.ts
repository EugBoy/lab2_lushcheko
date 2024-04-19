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
      {[LCarInfo.ID]: 1, [LCarInfo.OWNER_NAME]:'Alex', [LCarInfo.DATE]: '18.03.2024', [LCarInfo.CAR_MARK]: 'AUDI', [LCarInfo.QUANTITY_OF_OIL]: 45, [LCarInfo.HAS_DISCOUNT_CARD]: true, [LCarInfo.OWNER_PHONE_NUMBER]: 89991235689},
      {[LCarInfo.ID]: 2, [LCarInfo.OWNER_NAME]:'John', [LCarInfo.DATE]: '20.03.2024', [LCarInfo.CAR_MARK]: 'BMW', [LCarInfo.QUANTITY_OF_OIL]: 34, [LCarInfo.HAS_DISCOUNT_CARD]: false, [LCarInfo.OWNER_PHONE_NUMBER]: 89991235689},
    ]
  );
  public carsInfo: Observable<ICarInfo[]> = this._carsInfo.asObservable();

  /**
   * Добавление нового клиента
   * @param {ICarInfo} carInfo - информация о клиенте
   */
  public addCarInfo(carInfo: ICarInfo): void {
    const currentValue: any = this._carsInfo.value;
    let id: number = 1;
    const len: number = currentValue.length;
    if (len > 0) {
      id = currentValue[len-1].id + 1;
    }
    carInfo[LCarInfo.ID] = id;
    this._carsInfo.next([...currentValue, carInfo]);
  }

}

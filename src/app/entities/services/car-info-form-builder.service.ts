import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LCarInfo} from "../labels/car-info.label";

@Injectable({
  providedIn: 'root'
})
export class CarInfoFormBuilderService {

  constructor(
    private readonly _formBuilder: FormBuilder
  ) { }

  /**
   * Метод создания формы данных героя для его создания и изменения.
   */
  public get carInfoForm(): FormGroup {
    return this._formBuilder.group({
      [LCarInfo.OWNER_NAME]: [null, [Validators.required]],
      [LCarInfo.OWNER_PHONE_NUMBER]: [null, [Validators.required]],
      [LCarInfo.DATE]: [null, [Validators.required]],
      [LCarInfo.CAR_MARK]: [null, [Validators.required]],
      [LCarInfo.QUANTITY_OF_OIL]: [null, [Validators.required]],
      [LCarInfo.HAS_DISCOUNT_CAR]: [false, [Validators.required]],
    });
  }
}

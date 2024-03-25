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
      [LCarInfo.OWNER_NAME]: ['', [Validators.required]],
      [LCarInfo.DATE]: ['', [Validators.required]],
      [LCarInfo.CAR_MARK]: ['', [Validators.required]],
      [LCarInfo.CAR_NUMBER]: ['', [Validators.required]]
    });
  }
}

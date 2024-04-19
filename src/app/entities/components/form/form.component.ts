import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LCarInfo} from "../../labels/car-info.label";
import {AppService} from "../../services/app.service";
import {CarInfoFormBuilderService} from "../../services/car-info-form-builder.service";
import {ICarInfo} from "../../interfaces/car-info.interface";
import {CarMarksConst} from "../../consts/carMarks.const";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public carInfoForm: FormGroup = this._carInfoFormBuilderService.carInfoForm;

  @Input() public isPopupVisible: boolean = false;
  @Output()
  public isPopupVisibleChange: EventEmitter<false> = new EventEmitter<false>();

  constructor(
    private readonly _appService: AppService,
    private readonly _carInfoFormBuilderService: CarInfoFormBuilderService
  ) {
  }

  public addCarInfo (): void {
    const carInfo: ICarInfo = this.carInfoForm.getRawValue();
    if (this.carInfoForm.valid) {
      this._appService.addCarInfo(carInfo);
      this.carInfoForm.reset();
    }
    this.close();
  }

  public close(): void {
    this.isPopupVisibleChange.emit(false);
  }

  public get ownerNameControl (): FormControl {
    return this.carInfoForm.get([LCarInfo.OWNER_NAME]) as FormControl<string | null>;
  }

  public get ownerPhoneNumber (): FormControl {
    return this.carInfoForm.get([LCarInfo.OWNER_PHONE_NUMBER]) as FormControl<number | null>;
  }

  public get dateControl(): FormControl {
    return this.carInfoForm.get([LCarInfo.DATE]) as FormControl<string | null>;
  }

  public get carMarkControl(): FormControl {
    return this.carInfoForm.get([LCarInfo.CAR_MARK]) as FormControl<string | null>;
  }

  public get carNumberControl(): FormControl {
    return this.carInfoForm.get([LCarInfo.QUANTITY_OF_OIL]) as FormControl<string | null>;
  }

  protected readonly CarMarksConst = CarMarksConst;
}

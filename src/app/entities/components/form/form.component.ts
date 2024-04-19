import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LCarInfo} from "../../labels/car-info.label";
import {AppService} from "../../services/app.service";
import {CarInfoFormBuilderService} from "../../services/car-info-form-builder.service";
import {ICarInfo} from "../../interfaces/car-info.interface";
import {CarMarksConst} from "../../consts/carMarks.const";
import {DxTextBoxTypes} from "devextreme-angular/ui/text-box";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input()
  public isPopupVisible: boolean = false;

  @Output()
  public isPopupVisibleChange: EventEmitter<false> = new EventEmitter<false>();

  // public phoneRules: DxTextBoxTypes.Properties['maskRules'] = {
  //   X: /[02-9]/,
  // };

  public minDate: Date = new Date(1900, 0, 1);
  public currentDate: Date = new Date();

  public carInfoForm: FormGroup = this._carInfoFormBuilderService.carInfoForm;


  public CarMarksConst: string[] = CarMarksConst;

  constructor(
    private readonly _appService: AppService,
    private readonly _carInfoFormBuilderService: CarInfoFormBuilderService
  ) {}

  /**
   * Добавление нового клиента
   */
  public addCarInfo (): void {
    const carInfo: ICarInfo = this.carInfoForm.getRawValue();
    carInfo[LCarInfo.OWNER_PHONE_NUMBER] = Number('8' + String(carInfo[LCarInfo.OWNER_PHONE_NUMBER]));
    if (this.carInfoForm.valid) {
      this._appService.addCarInfo(carInfo);
      this.carInfoForm.reset();
    }
    this.close();
  }

  /**
   * Закрытие popup`а
   */
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

  public get quantityOfOilControl(): FormControl {
    return this.carInfoForm.get([LCarInfo.QUANTITY_OF_OIL]) as FormControl<string | null>;
  }

  public get hasDiscountCardControl(): FormControl {
    return this.carInfoForm.get([LCarInfo.HAS_DISCOUNT_CARD]) as FormControl<boolean | null>;
  }
}

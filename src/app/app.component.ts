import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {AppService} from "./entities/services/app.service";
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {CarInfoFormBuilderService} from "./entities/services/car-info-form-builder.service";
import {LCarInfo} from "./entities/labels/car-info.label";
import {ICarInfo} from "./entities/interfaces/car-info.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // private _appService = Inject(AppService);

  public isPopupVisible: boolean = false;

  public carsInfo: Observable<any> = this._appService.carsInfo;

  // public LCarInfo: typeof LCarInfo = LCarInfo;

  constructor (
    private readonly _appService: AppService,
  ) {}

  public showPopup(){
    this.isPopupVisible = !this.isPopupVisible;
  }

  public close() {
    this.isPopupVisible = false;
  }

  protected readonly LCarInfo = LCarInfo;
}

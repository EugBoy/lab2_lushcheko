import {Component} from '@angular/core';
import {AppService} from "./entities/services/app.service";
import {Observable} from "rxjs";
import {LCarInfo} from "./entities/labels/car-info.label";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isPopupVisible: boolean = false;

  public carsInfo: Observable<any> = this._appService.carsInfo;

  public LCarInfo: typeof LCarInfo = LCarInfo;

  constructor (
    private readonly _appService: AppService,
  ) {}

  public showPopup(): void{
    this.isPopupVisible = !this.isPopupVisible;
  }

  public close(): void {
    this.isPopupVisible = false;
  }
}

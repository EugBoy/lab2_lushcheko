import {LCarInfo} from "../labels/car-info.label";

export interface ICarInfo {
  [LCarInfo.ID]? : number;
  [LCarInfo.OWNER_NAME]: string;
  [LCarInfo.DATE]: string;
  [LCarInfo.CAR_MARK]: string;
  [LCarInfo.CAR_NUMBER]: string;
}

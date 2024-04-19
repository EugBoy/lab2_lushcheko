import {LCarInfo} from "../labels/car-info.label";
/**
 * Интерфейс данных о клиенте заправочной станции
 */
export interface ICarInfo {
  [LCarInfo.ID]? : number;
  [LCarInfo.OWNER_NAME]: string;
  [LCarInfo.OWNER_PHONE_NUMBER]: number;
  [LCarInfo.DATE]: string;
  [LCarInfo.CAR_MARK]: string;
  [LCarInfo.QUANTITY_OF_OIL]: number;
  [LCarInfo.HAS_DISCOUNT_CARD]: boolean;
}

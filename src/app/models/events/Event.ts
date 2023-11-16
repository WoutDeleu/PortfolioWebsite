import {Company} from "../properties/Company";

export interface Event {
  title: string;
  description: string;

  getStartDate(): Date;
}

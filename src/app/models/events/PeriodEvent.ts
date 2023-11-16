import { Event } from './Event';

export interface PeriodEvent extends Event {
  getEndDate(): Date;
  getDuration(): number;
}

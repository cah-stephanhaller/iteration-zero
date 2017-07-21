import { CalendarModel } from './calendar-model';

export class TimeSlotModel {

  constructor(public time: string, public icon: string, public calendarItems: CalendarModel[] ) {
    this.time = time;
    this.icon = icon;
    this.calendarItems = calendarItems;
  }
}

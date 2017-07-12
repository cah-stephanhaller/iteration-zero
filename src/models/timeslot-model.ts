import { CalendarModel } from './calendar-model';

export class TimeSlotModel {

  constructor(public time: string, public image: string, public calendarItems: CalendarModel[] ) {
    this.time = time;
    this.image = image;
    this.calendarItems = calendarItems;
  }
}

import { Injectable } from '@angular/core';
import { TimeSlotModel } from '../../models/timeslot-model';
import { CalendarModel } from '../../models/calendar-model';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  private timeSlots: TimeSlotModel[] = [];

  constructor() {
    console.log('Hello DataProvider');
  }

  getCalendarData(): TimeSlotModel[] {

    // 9:00 AM.
    var calendarItems1: CalendarModel[] = [];
    let calendarItem1 = new CalendarModel('Presentation', 'JIRA and Confluence Tips and Tricks', 'Training Room A');
    let calendarItem2 = new CalendarModel('Case Study', 'Puerto Rico\'s Agile Journey', 'Training Room C');
    calendarItems1.push(calendarItem1);
    calendarItems1.push(calendarItem2);
    let timeSlot1 = new TimeSlotModel('9:00 AM', 'assets/images/advance-card-tmntr.jpg', calendarItems1);

    // 10:15 AM.
    var calendarItems2: CalendarModel[] = [];
    let calendarItem3 = new CalendarModel('Presentation', 'What is Agile….the Cliff Notes Version', 'Training Room B');
    let calendarItem4 = new CalendarModel('Presentation', 'Design Thinking, a Primer', 'Training Room A');
    calendarItems2.push(calendarItem3);
    calendarItems2.push(calendarItem4);
    let timeSlot2 = new TimeSlotModel('10:15 AM', 'assets/images/advance-card-tmntr.jpg', calendarItems2);

    this.timeSlots.push(timeSlot1);
    this.timeSlots.push(timeSlot2);
    return this.timeSlots;
  }
 }

export class CalendarModel {

  constructor(public type: string, public title: string, public location: string) {
    this.type = type;
    this.title = title;
    this.location = location;
  }
}

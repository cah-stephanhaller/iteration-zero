export class CalendarModel {

  constructor(public time: string,
              public type: string, 
              public title: string, 
              public location: string, 
              public speaker: string, 
              public duration: string, 
              public subtype: string, 
              public level: string,
              public image: string,
              public description: string) {
    this.time = time;
    this.type = type;
    this.title = title;
    this.location = location;
    this.speaker = speaker;
    this.duration = duration;
    this.subtype = subtype;
    this.level = level;
    this.image = image;
    this.description = description;
  }

  // setTime(time: string) : void {
  //   this.time = time;
  // }

  // getTime() : string {
  //   return this.time;
  // }
}

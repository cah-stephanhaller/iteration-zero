export class CalendarModel {

  constructor(public time: string,
              public type: string, 
              public title: string, 
              public location: string, 
              public speaker: string, 
              public duration: string, 
              public track: string, 
              public level: string,
              public image: string,
              public abstract: string,
              public bio: string) {
    this.time = time;
    this.type = type;
    this.title = title;
    this.location = location;
    this.speaker = speaker;
    this.duration = duration;
    this.track = track;
    this.level = level;
    this.image = image;
    this.abstract = abstract;
    this.bio = bio;
  }

  // setTime(time: string) : void {
  //   this.time = time;
  // }

  // getTime() : string {
  //   return this.time;
  // }
}

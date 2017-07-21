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

  private timeSlots: TimeSlotModel[] = [
    {time: '9:00 AM', icon: 'chatbubbles', calendarItems: [
      {time: '9:00 AM', type: 'Presentation', title: 'JIRA and Confluence Tips and Tricks', location: 'Training Room A', speaker: 'BJ Allmon', duration: '2 hour', subtype: 'Tools', level: 'Beginner', image: 'assets/images/presentation-meeting.jpg', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'},
      {time: '9:00 AM', type: 'Case Study', title: 'Puerto Rico\'s Agile Journey', location: 'Training Room C', speaker: 'Marcos Rosado, Juan Carlos Morales, Cynthia Rivera', duration: '1 hour', subtype: 'General', level: 'Beginner', image: 'assets/images/case-study.png', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'}
      ]
    },
    {time: '10:15 AM', icon: 'chatbubbles', calendarItems: [
      {time: '10:15 AM', type: 'Presentation', title: 'What is Agile….the Cliff Notes Version', location: 'Training Room B', speaker: 'Marty Vian', duration: '1 hour', subtype: 'General', level: 'Beginner', image: 'assets/images/presentation-meeting.jpg', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'},
      {time: '10:15 AM', type: 'Presentation', title: 'Design Thinking, a Primer', location: 'Training Room A', speaker: 'Beverly Sunkle', duration: '1 hour', subtype: 'General', level: 'Beginner', image: 'assets/images/presentation-meeting.jpg', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'}
      ]
    },
    {time: '12:00 PM', icon: 'pizza', calendarItems: [
      {time: '12:00 PM', type: 'Lunch', title: 'Lunch is provided!!', location: 'Cafeteria', speaker: '', duration: '', subtype: '', level: '', image: '', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'}
      ]
    },    
    {time: '1:00 PM', icon: 'chatbubbles', calendarItems: [
      {time: '1:00 PM', type: 'Demo', title: 'Hiptest - Less Code, Reusable Requirement, More Happiness', location: 'Training Room C', speaker: '', duration: '', subtype: '', level: '', image: '', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'},
      {time: '1:00 PM', type: 'Presentation', title: 'The Value of Managing Work Visually', location: 'Training Room A', speaker: '', duration: '', subtype: '', level: '', image: '', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'}
      ]
    },
    {time: '2:15 PM', icon: 'chatbubbles', calendarItems: [
      {time: '2:15 PM', type: 'Presentation, Demo', title: 'CI/CD Automation for Mobile Apps', location: 'LE-1', speaker: '', duration: '', subtype: '', level: '', image: '', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'},
      {time: '2:15 PM', type: 'Presentation', title: 'What is Machine Learning and Why Does it Matter?', location: 'LE-2', speaker: '', duration: '', subtype: '', level: '', image: '', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'}
      ]
    },
    {time: '3:30 PM', icon: 'chatbubbles', calendarItems: [
      {time: '3:30 PM', type: 'Presentation, Demo', title: 'Pairing is Caring', location: 'LE-2', speaker: '', duration: '', subtype: '', level: '', image: '', description: 'We\'ll enter a description of the conference registration here….We\'ve asked for descriptions to be 70 words or less.'}
      ]
    }
  ];

  constructor() {
    console.log('Hello DataProvider');
  }

  getCalendarData(): TimeSlotModel[] {
    return this.timeSlots;
  }
 }

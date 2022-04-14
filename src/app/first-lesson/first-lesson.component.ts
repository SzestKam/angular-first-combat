import {Component, OnInit} from '@angular/core';
import {WeekDayEnum} from '../model/WeekDayEnum';

@Component({
  selector: 'app-first-lesson',
  templateUrl: './first-lesson.component.html',
  styleUrls: ['./first-lesson.component.css']
})
export class FirstLessonComponent implements OnInit {
  title: string = 'Witaj świecie';
  my_msg: string = '';

  imgUrl='https://angular.io/assets/images/logos/angular/angular.png';
  imgAlt='Logo Angular';

  private currentTime: Date;
  private simpleArray: Array<number> = [];

  constructor() {
    this.currentTime = new Date();
  }

  ngOnInit(): void {
    this.simpleArray.push(0, 1, 1, 2, 3, 5, 8, 13, 21, 34);
  }

  getCurrentDay(): string {
    return FirstLessonComponent.convertToDayName(this.currentTime.getDay());
  }

  getCurrentDate(): string {
    return this.currentTime.toDateString();
  }

  getSimpleFibb(): Array<number> {
    return this.simpleArray;
  }

  isWeekend(): boolean {
    const dayNumber = this.currentTime.getDay();
    return dayNumber > 5;
  }

  showAlert() {
    alert('Yeap, you nailed it!');
  }

  private static convertToDayName(dayNumber: number): string {
    return WeekDayEnum[dayNumber - 1].toUpperCase()
  }
}

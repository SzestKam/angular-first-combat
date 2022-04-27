import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../model/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  @Input() student: Student = {firstName:'', lastName: '', indexNumber: 0};
  @Output() onClose = new EventEmitter();

  closeDetails(): void {
    this.onClose.emit();
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../model/Student';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent {

  @Input() student: Student = {firstName:'', lastName: '', indexNumber: 0};

  @Output() onSave = new EventEmitter<Student>();
  @Output() onCancel = new EventEmitter();

  saveStudent():void {
    this.onSave.emit(this.student);
  }

  cancel(): void {
    this.onCancel.emit();
  }
}

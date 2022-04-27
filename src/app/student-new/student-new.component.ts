import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../model/Student';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit{
  @Input() student: Student = {firstName:'', lastName: '', indexNumber: 0};

  @Output() onSave = new EventEmitter<Student>();

  @Output() onCancel = new EventEmitter();
  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    indexNumber: new FormControl(''),
    email: new FormControl(''),
    year: new FormControl(''),
    specialization: new FormControl(''),
    description: new FormControl('')
  });

  ngOnInit(): void {
    if(this.student.indexNumber>0) {
      this.studentForm.patchValue(this.student);
    }
  }

  saveStudent():void {
    console.warn(this.studentForm.value);
    this.onSave.emit(this.studentForm.value);
  }

  cancel(): void {
    this.onCancel.emit();
  }
}

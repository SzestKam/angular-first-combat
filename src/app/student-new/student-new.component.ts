import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../model/Student';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    firstName: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    indexNumber: new FormControl('',
      [Validators.required, Validators.min(1), Validators.max(1000000)]),
    email: new FormControl('',Validators.email),
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
    this.onSave.emit(this.studentForm.value);
  }

  cancel(): void {
    this.onCancel.emit();
  }

  isErrorFirstName(): boolean {
    return <boolean>this.studentForm.get('firstName')?.invalid &&
      (this.studentForm.get('firstName')?.dirty ||
        this.studentForm.get('firstName')?.touched) as boolean;
  }
}

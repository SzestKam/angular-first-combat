import {Component, OnInit} from '@angular/core';
import {Student} from '../model/Student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  private showFormVisible: boolean = false;
  private showDetailsVisible: boolean = false;
  private data: Array<Student> = [];

  temporaryStudent: Student;

  constructor(private studentSrv: StudentService) {
    this.temporaryStudent = StudentsComponent.emptyStudent();
  }

  ngOnInit(): void {
    this.pickupData();
  }

  getStudents(): Array<Student> {
    return this.data;
  }

  isVisibleForm(): boolean {
    return this.showFormVisible;
  }

  addStudent(): void {
    this.hideDetails();
    this.temporaryStudent = StudentsComponent.emptyStudent();
    this.showForm();
  }

  showForm(): void {
    this.showFormVisible = true;
  }

  hideForm(): void {
    this.showFormVisible = false;
  }

  isDetailsForm(): boolean {
    return this.showDetailsVisible;
  }

  showDetails(): void {
    this.showDetailsVisible = true;
  }

  hideDetails(): void {
    this.showDetailsVisible = false;
    this.temporaryStudent = {firstName: '', lastName: '', indexNumber: 0};
  }

  saveStudent($student: Student): void {
    this.studentSrv.save($student).subscribe(() => {
        this.hideForm();
        this.pickupData();
      }
    );
    this.temporaryStudent = StudentsComponent.emptyStudent();
  }

  deleteStudent(indexNumber: number): void {
    this.studentSrv.deleteBy(indexNumber)
      .subscribe(() => this.pickupData(),
        error => {
          console.error('error ', error);
        });
  }

  editStudent(indexNumber: number): void {
    this.showForm();
    const st = this.studentSrv.getBy(indexNumber);
    this.temporaryStudent = Object.assign({}, st);
  }

  detailsStudent(indexNumber: number): void {
    this.showDetails();
    this.temporaryStudent = this.studentSrv.getBy(indexNumber);
  }

  private pickupData() {
    this.data = this.studentSrv.getList();
  }

  private static emptyStudent(): Student {
    return {firstName: '', lastName: '', indexNumber: 0} as Student;
  }
}

import {Injectable} from '@angular/core';
import {Student} from '../model/Student';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Array<Student> = [];

  private readonly baseUrl = 'https://angular-f9286-default-rtdb.europe-west1.firebasedatabase.app/students/';

  constructor(private httpClient: HttpClient) {
    this.students = [
      {
        firstName: 'Janusz',
        lastName: 'Kowalski',
        indexNumber: 2233
      },
      {
        firstName: 'Janina',
        lastName: 'Nowak',
        indexNumber: 5533,
        email: 'janina@nowak.pl'
      },
      {
        firstName: 'Roman',
        lastName: 'Nowak',
        indexNumber: 5555,
        email: 'rnowak@example.pl'
      }
    ];
  }

  getList(): Array<Student> {
    return this.students;
  }

  save(newStudent: Student): void {
    this.deleteBy(newStudent.indexNumber);
    this.students.push(Object.assign({}, newStudent));

    const url = this.baseUrl + newStudent.indexNumber + '.json';
    this.httpClient
      .put<Student>(url, JSON.stringify(newStudent))
      .subscribe();

  }

  deleteBy(indexNumber: number): void {
    this.students = this.students.filter(st => st.indexNumber !== indexNumber);
  }

  getBy(indexNumber: number): Student {
    return this.students.filter(s => s.indexNumber === indexNumber)[0];
  }
}

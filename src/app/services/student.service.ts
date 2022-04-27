import {Injectable, OnInit} from '@angular/core';
import {Student} from '../model/Student';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Array<Student> = [];

  private readonly baseUrl = 'https://angular-f9286-default-rtdb.europe-west1.firebasedatabase.app/students';

  constructor(private httpClient: HttpClient) {
    this.refreshFromRemote();
  }

  getList(): Array<Student> {
    return this.students;
  }

  save(newStudent: Student): void {
    const url = this.baseUrl + '/' + newStudent.indexNumber + '.json';
    this.httpClient
      .put<Student>(url, JSON.stringify(newStudent))
      .subscribe(() => this.refreshFromRemote());
  }

  deleteBy(indexNumber: number): void {
    this.students = this.students.filter(st => st.indexNumber !== indexNumber);
  }

  getBy(indexNumber: number): Student {
    return this.students.filter(s => s.indexNumber === indexNumber)[0];
  }

  private refreshFromRemote(): void {
    this.students = [];
    const url = this.baseUrl + '.json';
    this.httpClient.get(url)
      .pipe(
        tap(value => {
          const myArr = Object.values(value);
          myArr.forEach(item => {
            this.students.push(item as Student);
          })
        }),
      )
      .subscribe();
  }
}

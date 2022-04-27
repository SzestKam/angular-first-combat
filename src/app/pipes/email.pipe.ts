import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if(value){
      return `<a href="mailto:${value}">${value}</a>`;
      //return value;
    }
    return '-';
  }

}

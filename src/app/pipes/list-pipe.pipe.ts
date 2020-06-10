import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listPipe'
})
export class ListPipePipe implements PipeTransform {

  transform(value: any[], key: any): string {
    let values: any = [];
    value.forEach(val => {
      values.push(val[key]);
    })
    return values.join('/');
  }

}

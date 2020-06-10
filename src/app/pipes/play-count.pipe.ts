import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playCount'
})
export class PlayCountPipe implements PipeTransform {

  transform(value: number): string {
    let nums: any;
    if (value > 10000){
      nums = Math.floor(value/10000) + '万';
    }else{
      nums = value;
    }
    return nums;
  }

}

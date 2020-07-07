import { Pipe, PipeTransform } from '@angular/core';
import { pca, pcaa} from 'area-data';

@Pipe({
  name: 'areaData'
})
export class AreaDataPipe implements PipeTransform {

  transform(value: number, area: number): unknown {
    const province = pca['86'][area];
    if(!province){
      return '海外';
    }
    const city = pcaa[area][value];
    return province + ' ' + city;
    
    
  }

}

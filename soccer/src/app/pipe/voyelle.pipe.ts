import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyelle'
})
export class VoyellePipe implements PipeTransform {

  transform(value:any): any {
    return value.replace(/[aeiouy]/gi,"*");
  }

}

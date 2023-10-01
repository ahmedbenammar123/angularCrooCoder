import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: any,): any {
    let result=''
    for (let i =ch.length ; i  >0 ; i--) {
       result  = ch[i] + result ;
    }
    return result;
  }

}

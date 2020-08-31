import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commonpipe',
})
export class CommonPipe implements PipeTransform {
  transform(val: Array<any>, args) {
    if (val && val.length > 0 && args) {
      const updatedList = val.filter((item) => {
        return item.brand === args;
      });
      return updatedList;
    }
    return val;
  }
}

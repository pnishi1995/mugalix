import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commonpipe',
})
export class CommonPipe implements PipeTransform {
  transform(val: Array<any>, args: Array<string>) {
    if (val && val.length > 0 && args && args.length > 0 ) {
      let updatedList = []; 
      args.forEach(brand => {
        const newList = val.filter((item) => {
          return item.brand === brand;
        });
        updatedList = [...updatedList, ...newList];
      });
      return updatedList;
    }
    return val;
  }
}

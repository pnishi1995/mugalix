import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'commonpipe',
})
export class CommonPipe implements PipeTransform {
  transform(val: Array<any>, args: Array<string>) {
    if (val && val.length > 0 && args && args.length > 0) {
      let updatedList = [];
      args.forEach((brand) => {
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

@Pipe({
  name: 'convertname',
})
export class ConvertnamePipe implements PipeTransform {
  transform(val: any, args: any) {
    if (val) {
      const name_arr = val.split(' ');
      let name = '';
      name_arr.forEach((initial) => {
        name += initial.charAt(0);
      });
      return name;
    }
    return val;
  }
}

@Pipe({
  name: ' paginate'
})
export class PaginatePipe implements PipeTransform{
transform(val: any,args:any){

}
}

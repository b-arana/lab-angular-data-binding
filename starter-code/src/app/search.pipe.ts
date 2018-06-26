import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  
  transform(items: any[], field: string, textSearch: string): any[] {
    if (!items) {
      return [];
    }

    if (!textSearch) {
      return items;
    }

    const myPattern = new RegExp(textSearch, 'i'); // insensitive -- no tenga en cunenta 
    return items.filter(item => item[field].toString().match(myPattern));
  }
};

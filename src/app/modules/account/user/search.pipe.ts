// search.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item: { lastName?: string }) => {
      const lastName = item.lastName?.toString().toLowerCase(); // Change 'lastName' to the actual property name

      return lastName?.includes(searchTerm);
    });
  }
}

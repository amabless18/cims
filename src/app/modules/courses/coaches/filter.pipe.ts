

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterOptions: any): any[] {
    if (!items || !filterOptions) {
      return items;
    }

    // Filter by role
    if (filterOptions.roles) {
      items = items.filter(item => item.roles === filterOptions.roles);
    }

    // Filter by course
    if (filterOptions.course) {
      items = items.filter(item => item.course === filterOptions.course);
    }

    return items;
  }
}

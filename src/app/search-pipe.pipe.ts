import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})
export class SearchFeedPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {
      console.log(args)
      return items.filter(item => true);
      }
}

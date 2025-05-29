import { Pipe, PipeTransform } from '@angular/core';
import { Hero, Creator, Color } from '../interfaces/hero';

@Pipe({
  name: 'heroSortBy'
})
export class HeroSortByPipe implements PipeTransform {

  transform(value: Hero[], sortyBy: string): Hero[] {
    switch(sortyBy) {
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name));
      case 'color':
        return value.sort((a, b) => Color[a.color].localeCompare(Color[b.color]));
      case 'creator':
        return value.sort((a, b) => Creator[a.creator].localeCompare(Creator[b.creator]));
      case 'canFly':
        return value.sort((a, b) => Number(a.canFly) - Number(b.canFly));
      default:
        return value;
    }
  }

}

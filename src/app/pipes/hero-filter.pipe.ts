import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  transform(heroes: Hero[], searchValue: string): Hero[] {
    if ( !searchValue ) return heroes;
    return heroes.filter((hero) => hero.name.toLocaleLowerCase().includes(searchValue.toLowerCase()));
  }

}

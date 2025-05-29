import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero';

@Pipe({
  name: 'heroColor'
})
export class HeroColorPipe implements PipeTransform {

  transform(value: number): string {
    return Color[value] || "No definido";
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCanFlyText'
})
export class HeroCanFlyTextPipe implements PipeTransform {

  transform(canFly: boolean): string {
    return (canFly) ? "Puede volar" : "No puede volar";
  }

}

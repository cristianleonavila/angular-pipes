import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic.component.html',
  styles: ``
})
export default class BasicComponent {

  localeService = inject(LocaleService);

  nameLower = signal("cristian");
  nameUpper = signal("CRISTIAN");
  fullName = signal("cRiStIaN");
  customDate = signal(new Date());

  dateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);
    onCleanUp(() => clearInterval(interval));
  });

}

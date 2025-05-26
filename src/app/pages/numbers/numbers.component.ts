import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers.component.html',
  styles: ``
})
export default class NumbersComponent {

  totalSells = signal(2423332.5567);
  percent = signal(0.4856);
}

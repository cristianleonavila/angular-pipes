import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom',
  imports: [ToggleCasePipe],
  templateUrl: './custom.component.html',
  styles: ``
})
export default class CustomComponent {

  name = signal("Cristian Leon");

  toggleCase = signal(false);
}

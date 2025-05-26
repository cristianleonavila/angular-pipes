import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe } from '@angular/common';
import { interval, tap } from 'rxjs';


const client1 = {
  name: 'Cristian Leon',
  gender: 'male',
  age: 36,
  address: 'Cra 69L#64H-84'
};
const client2 = {
  name: 'Lorena Diaz',
  gender: 'female',
  age: 25,
  address: 'Usme'
};

@Component({
  selector: 'app-uncommon',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, AsyncPipe],
  templateUrl: './uncommon.component.html',
  styles: ``
})
export default class UncommonComponent {

  // i18nSelect

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient() {
    if (this.client() === client1 ) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }


  // i18n Plural

  clients = signal([
    'Maria', 'Fernando', 'Cristian', 'Lorena', 'Larry'
  ]);

  promise:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta...");
    }, 3600);
  });

  observableTimer = interval(2000).pipe(
    tap((value) => console.log({value}))
  );

  clientsMap = signal({
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    other: 'Tenemos # clientes esperando'
  });

  eliminarPersona() {
    this.clients.update(current => current.slice(1));
  }
}

import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // I18N Select
  public name: string = 'Carlos';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = [
    'Maria',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': ' tenemos 2 clientes esperando',
    other: ' tenemos # clientes esperando',
  };

  deleteClients(): void {
    this.clients.shift();
  }

  // KEYVALUE PIPE

  public person = {
    name: 'Carlos',
    age: '29',
    address: 'Lalin, España',
  };

  // Async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}

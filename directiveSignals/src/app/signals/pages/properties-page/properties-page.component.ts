import {
  Component,
  OnDestroy,
  OnInit,
  computed,
  effect,
  signal,
} from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent implements OnDestroy, OnInit {
  public counter = signal(10);
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public fullName = computed(() => {
    `${this.user().first_name} ${this.user().last_name}`;
  });

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(() => {
      this.counter.update((current) => current + 1);
      if (this.counter() == 15) {
        this.userChangedEffect.destroy();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  onFieldUpdated(field: keyof User, value: string) {
    // !Podria ser inseguro con el set
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    //  !Mutate
    // this.user.mutate((current) => {
    //   switch (field) {
    //     case 'email':
    //       current.email = value;
    //       break;
    //     case 'first_name':
    //       current.first_name = value;
    //       break;
    //     case 'last_name':
    //       current.last_name = value;
    //       break;
    //     case 'id':
    //       current.id = Number(value);
    //       break;
    //   }
    // });

    // !Daria un error con el id ya que el value es un string
    this.user.update((current) => {
      return {
        ...current,
        [field]: value,
      };
    });
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}

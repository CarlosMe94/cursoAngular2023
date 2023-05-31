import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counte-page.component.html',
  styleUrls: ['./counte-page.component.css'],
})
export class CountePageComponent {
  public counter = signal(10);

  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    // this.counter.set(this.counter() + value);
    this.counter.update((current) => current + value);
  }
}

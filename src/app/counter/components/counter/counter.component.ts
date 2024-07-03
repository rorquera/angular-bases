import { Component } from '@angular/core';

@Component({
  templateUrl:'./counter.component.html',
  selector: 'app-component',
})
export class CounterComponent {
  public title: string = 'bases';
  public counter: number = 10;

  public increaseBy = (value: number): void => {
    this.counter += value;
    console.log(this.counter);
  };

  public decreaseBy = (value: number): void => {
    this.counter === 0 ? this.counter : (this.counter -= value);
    console.log(this.counter);
  };

  reset = (): void => {
    this.counter = 10;
  };
}

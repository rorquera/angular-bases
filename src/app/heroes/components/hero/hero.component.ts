import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizar(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription = (): string => {
    return `${this.name} - ${this.age}`;
  };

  cambiarNombre = (name: string): void => {
    this.name = name;
  };

  cambiarEdad = (age: number): void => {
    this.age = age;
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: string[] = ['hulk', 'venom', 'reptile', 'scorpion', 'doom'];
  public heroeEliminado?: string;

  eliminarUltimo = (): void => {
    this.heroeEliminado = this.heroes.pop() || '';
  };
}

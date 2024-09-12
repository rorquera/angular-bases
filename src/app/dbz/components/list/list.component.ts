import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'noob',
      vida: 45,
    },
  ];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  emitCodigo(codigo: string): void {
    console.log(codigo);
    this.onDeleteCharacter.emit(codigo);
  }
}

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'kung lao',
      vida: 60,
    },
    {
      id: uuid(),
      name: 'rain',
      vida: 75,
    },
  ];

  onNewCharacterPadre(character: Character): void {
    const nuevoCharacter: Character = { ...character, id: uuid() };
    this.characters.push(nuevoCharacter);
    console.log([this.characters]);
  }

  onDeleteCharacter(id: string): void {
    console.log('llegada del indice en el padre: ' + id);
    this.characters = this.characters.filter((personaje) => personaje.id != id);
  }
}

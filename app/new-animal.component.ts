import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:  `
  <div class="newAnimal">
    <h1> Lets make an animal </h1>
    <form class="animalForm">
    </form>
    </div>
    `
})

export class NewAnimalComponent {

}

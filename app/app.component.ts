import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to the zoo motherfucker</h1>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  <animal-list [childAnimalList]="animals" (clickSender)="editAnimal($event)"></animal-list>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based')
  ];

  selectedAnimal = null;

  editAnimal(slectedAnimalFromList) {
    this.selectedAnimal = slectedAnimalFromList;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.animals.push(newAnimalFromChild);
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}

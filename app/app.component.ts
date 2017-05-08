import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="header">
      <h1>Zoo knew?</h1>
    </div>
      <animal-list [childAnimalList]="animals" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal [childMakeAnimal]="makeNewAnimal"(newAnimalSender)="addAnimal($event)" (newAnimalShowHideSender)="animalForm($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based')
  ];

  selectedAnimal = null;
  makeNewAnimal = null;

  animalForm(hideOrShow) {
    this.makeNewAnimal = hideOrShow;
  }

  editAnimal(selectedAnimalFromList) {
    this.selectedAnimal = selectedAnimalFromList;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.animals.push(newAnimalFromChild);
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}

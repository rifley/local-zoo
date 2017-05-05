import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <div>
    <select (change)="changeSelected($event.target.value)">
      <option value="all">All Animals</option>
      <option value="young">Young Animals</option>
      <option value="mature">Mature Animals</option>
    </select>
  </div>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | animalAge:filterByAnimalAge" (click)="editHasBeenClicked(currentAnimal)">{{currentAnimal.name}}</li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  filterByAnimalAge: string = "animalAge";

  changeSelected(animalAgeSelected) {
    this.filterByAnimalAge = animalAgeSelected;
  }
}

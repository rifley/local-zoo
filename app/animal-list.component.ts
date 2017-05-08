import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <h3>Happy Animals In Our Care:</h3>
    <br>
    <div id="animalFilter">
      <select class="form-control" (change)="changeSelected($event.target.value)">
        <option value="all">All Animals</option>
        <option value="young">Young Animals</option>
        <option value="mature">Mature Animals</option>
      </select>
    </div>


  <table>
    <tr>
      <th>Species</th>
      <th>Name</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th>Caretakers</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>Dislikes</th>
    </tr>
    <tr *ngFor="let currentAnimal of childAnimalList | animalAge:filterByAnimalAge" (click)="editHasBeenClicked(currentAnimal)">
      <td>{{currentAnimal.species}}</td>
      <td>{{currentAnimal.name}}</td>
      <td>{{currentAnimal.age}}</td>
      <td>{{currentAnimal.diet}}</td>
      <td>{{currentAnimal.location}}</td>
      <td>{{currentAnimal.caretakers}}</td>
      <td>{{currentAnimal.sex}}</td>
      <td>{{currentAnimal.likes}}</td>
      <td>{{currentAnimal.dislikes}}</td>
    </tr>
  </table>
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

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:  `
  <div class="newAnimal" *ngIf="childMakeAnimal">
    <h1>Lets make an animal</h1>
    <form>
      <div class="form-group">
        <label for="species">Species</label>
        <input class="form-control" type="text" id="species" #species>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" type="text" id="name" #name>
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input class="form-control" type="number" id="age" #age>
      </div>
      <div class="form-group">
        <label for="diet">Diet</label>
        <input class="form-control" type="text" id="diet" #diet>
      </div>
      <div class="form-group">
        <label>Location</label>
        <input class="form-control" type="text" #location>
      </div>
      <div class="form-group">
        <label>Caretakers</label>
        <input class="form-control" type="number" #caretakers>
      </div>
      <div class="form-group">
        <label>Sex</label>
        <input class="form-control" type="text" #sex>
      </div>
      <div class="form-group">
        <label for="likes">Likes</label>
        <input class="form-control" type="text" id="likes" #likes>
      </div>
      <div class="form-group">
        <label for="dislikes">Dislikes</label>
        <input class="form-control" type="text" id="dislikes" #dislikes>
      </div>
      <button class="newAnimalButton" type="submit" (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value); species.value=''; name.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; sex.value=''; likes.value=''; dislikes.value='' ">Add</button>
      <button (click)="hideForm()" type="button">Close</button>
    </form>
    </div>
    <button type="button" (click)="showForm()">New Animal</button>
    `
})

export class NewAnimalComponent {
  @Input() childMakeAnimal: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() newAnimalShowHideSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {

    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  showForm() {
    this.newAnimalShowHideSender.emit(true);
  }

  hideForm() {
    this.newAnimalShowHideSender.emit(false);
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:  `
  <div class="newAnimal">
    <h1>Lets make an animal</h1>
    <form class="animalForm">
      <div class="form-group">
        <label for="species">Species</label>
        <input type="text" id="species" #species>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" #name>
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" #age>
      </div>
      <div class="form-group">
        <label for="diet">Diet</label>
        <input type="text" id="diet" #diet>
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" id="location" #location>
      </div>
      <div class="form-group">
        <label for="caretakers">Caretakers</label>
        <input type="number" id="caretakers" #caretakers>
      </div>
      <div class="form-group">
        <label for="sex">Sex</label>
        <input type="text" id="sex" #sex>
      </div>
      <div class="form-group">
        <label for="likes">Likes</label>
        <input type="text" id="likes" #likes>
      </div>
      <div class="form-group">
        <label for="dislikes">Dislikes</label>
        <input type="text" id="dislikes" #dislikes>
      </div>
      <button type="button" (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value);">Add</button>
    </form>
    </div>
    `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}

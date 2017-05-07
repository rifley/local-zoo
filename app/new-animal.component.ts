import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:  `
  <div class="newAnimal">
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
        <label for="location">Location</label>
        <input class="form-control" type="text" id="location" #location>
      </div>
      <div class="form-group">
        <label for="caretakers">Caretakers</label>
        <input class="form-control" type="number" id="caretakers" #caretakers>
      </div>
      <div class="form-group">
        <label for="sex">Sex</label>
        <input class="form-control" type="text" id="sex" #sex>
      </div>
      <div class="form-group">
        <label for="likes">Likes</label>
        <input class="form-control" type="text" id="likes" #likes>
      </div>
      <div class="form-group">
        <label for="dislikes">Dislikes</label>
        <input class="form-control" type="text" id="dislikes" #dislikes>
      </div>
      <button class="btn btn-info" type="submit" (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value); species.value=''; name.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; sex.value=''; likes.value=''; dislikes.value='' ">Add</button>
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

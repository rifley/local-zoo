import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
   <h3>Edit Animal</h3>
    <div class="animalEdit">
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
      </div>
      <div class="form-group">
        <label>Caretakers:</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
      </div>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}

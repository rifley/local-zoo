import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: "animalAge",
  pure: false
})

export class AnimalAgePipe implements PipeTransform {
  transform(input: Animal[], desiredAnimalAge) {
    var output: Animal[] = [];
    if(desiredAnimalAge ==="young") {
      for( var i=0; i<input.length; i++) {
        if(input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAnimalAge === "mature") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].age >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div #NewForm >
    <h3>Add new Animal</h3>
    <!-- add ids to each input to be able to get it -->
    <label>Enter Animal Species:</label>
    <input #newAnimalSpecies>
    <br>
    <label>Enter Animal Name:</label>
    <input #newAnimalName>
    <br>
    <label>Enter Animal Diet:</label>
    <input #newAnimalDiet>
    <br>
    <label>Enter Animal Age:</label>
    <input #newAnimalAge>
    <br>
    <label>Enter Animal Location:</label>
    <input #newAnimalLocation>
    <br>
    <label>Enter Animal Caretakers Needed:</label>
    <input #newAnimalCaretakers>
    <br>
    <label>Enter Animal Sex:</label>
    <input #newAnimalSex>
    <br>

    <label>Enter Animal Likes:</label>
    <input #newAnimalLikes>
    <br>
    <label>Enter Animal Dislikes:</label>
    <input #newAnimalDislikes>
    <br>

    <button (click)="sendAnimalToCreate(newAnimalSpecies.value, newAnimalName.value, newAnimalAge.value, newAnimalDiet.value,  newAnimalLocation.value, newAnimalCaretakers.value, newAnimalSex.value, newAnimalLikes.value, newAnimalDislikes.value);
    newAnimalSpecies.value='';
    newAnimalName.value='';
    newAnimalDiet.value='';
    newAnimalAge.value='';
    newAnimalLocation.value='';
    newAnimalCaretakers.value='';
    newAnimalSex.value='';
    newAnimalLikes.value='';
    newAnimalDislikes.value=''">Add New Animal!</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() animalToCreate: Animal;
  @Output() clickSender = new EventEmitter();

  sendAnimalToCreate(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.clickSender.emit(newAnimal)
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div id="NewForm" >
    <h3>Add new Animal</h3>
    <!-- add ids to each input to be able to get it -->
    <label>Enter Animal Description:</label>
    <input>
    <br>
    <label>Enter Animal Age:</label>
    <input>
    <br>
    <label>Enter Animal Likes:</label>
    <input>
    <br>
    <label>Enter Animal Dislikes:</label>
    <input>
    <br>
    <button> submit!</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() animalToCreate: Animal;
  @Output() clickSender = new EventEmitter();

  sendAnimalToCreate(animalToCreate) {
    this.clickSender.emit(animalToCreate)
  }
}

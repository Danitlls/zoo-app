import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <button (click)="sendAnimalToEdit(animalToEdit)">Edit!</button>
  `
})

export class EditAnimalComponent {
  @Input() animalToEdit: Animal;
  @Output() clickSender = new EventEmitter();

  sendAnimalToEdit(animalToEdit) {
    this.clickSender.emit(animalToEdit)
  }
}

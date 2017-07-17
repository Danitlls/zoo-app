import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { filterByAgePipe } from './filterByAge.pipe';

@Component ({
  selector: 'animal-list',
  template: `
  <select (change)="filterList($event.target.value)">
    <option value="mature">Mature Animals</option>
    <option value="young">Younger Animals</option>
    <option selected="selected" value="all">All Animals</option>
  </select>

  <ul>
   <li *ngFor="let currentAnimal of masterAnimalList | filterByAgePipe:desiredAge" [class]="ageColor(currentAnimal)">
   {{currentAnimal.name}}
   <edit-animal [animalToEdit]="currentAnimal" (clickSender)="clickedAnimal($event)"></edit-animal>
   </li>
 </ul>

 <div id="updateForm" *ngIf="editingAnimal" class="editForm">
  <h3>{{selectedAnimal.species}}, {{selectedAnimal.sex}}</h3>
   <h3>Edit Animal</h3>
   <label>Enter Animal Description:</label>
   <input [(ngModel)]="selectedAnimal.name">
   <br>
   <label>Enter Animal Age:</label>
   <input [(ngModel)]="selectedAnimal.age">
   <br>
   <label>Enter Animal Likes:</label>
   <input [(ngModel)]="selectedAnimal.likes">
   <br>
   <label>Enter Animal Dislikes:</label>
   <input [(ngModel)]="selectedAnimal.dislikes">
   <br>
   <button (click)="doneEditing()">Done</button>
 </div>

  <new-animal (clickSender)="newAnimal($event)"></new-animal>
  `
})

export class AnimalListComponent {
  // The input would be used if i need data from the parent template
  // @Input() childAnimalList: Animal[];

  masterAnimalList: Animal[] = [
    new Animal('Lion', 'Jack' , 3 , 'Carnivore' , 'South Africa' , 2 , 'Male' , 'Cool shade' , 'Loud noises'),
    new Animal('Lion' , 'Lila' , 2 , 'Carnivore' , 'Namibia' , 3 , 'Female' , 'Playing with ropes' , 'Loud noises'),
    new Animal('Swift fox' , 'Swixy' , 2 , 'Carnivore' , 'North America' , 1 , 'Male' , 'bushes' , 'baths'),
    new Animal('black-footed ferret' , 'Hanny' , 1 , 'Omnivore' , 'North America' , 1 , 'Female' , 'Playing in the wather' , 'Ropes'),
    new Animal('black-footed ferret' , 'Titi' , 3 , 'Omnivores' , 'North America' , 1 , 'Male' , 'Playing in the wather' , 'Balls'),
    new Animal('California Conder' , 'Hunk' , 7 , 'Carnivore' , 'North America' , 1 , 'Female' , 'Baths' , 'Loud noises')];
  selectedAnimal: any = {};
  editingAnimal: Boolean = false
  desiredAge: String = "all"

  ageColor(currentAnimal){
    if (currentAnimal.age > 2){
      return "adultAnimal";
    } else if (currentAnimal.age <= 2) {
      return  "youngAnimal";
    } else {
      return "";
    }
  }

  clickedAnimal(currentAnimal){
    this.editingAnimal = true
    this.selectedAnimal = currentAnimal;
  }

  filterList(age) {
  this.desiredAge = age
  }

  doneEditing(){
    this.editingAnimal = false;
  }

  newAnimal(newAnimal){
    this.masterAnimalList.push(newAnimal);
  }
}

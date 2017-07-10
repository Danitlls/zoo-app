import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalListComponent } from './animal-list.component';


@Component({
  selector: 'app-root',
  template: `
    <section id="main">
      <h1>Zoo App</h1>

      <!-- I don't need to pass data into this template like:([childTaskList]="masterTaskList") because the data is declared in animal-List Template as MasterAnimalList -->
      <animal-list></animal-list>

    </section>
    `
})


export class AppComponent {

}

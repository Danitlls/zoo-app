import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { Animal } from './animal.model';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { filterByAgePipe } from './filterByAge.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent, filterByAgePipe, AnimalListComponent, EditAnimalComponent, NewAnimalComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

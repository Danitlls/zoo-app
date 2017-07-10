import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

//Pipe decorator :
@Pipe({
  name: "filterByAgePipe",
  pure: false
})


// class declaration (the PipeTransform is an interface or group of methods):
export class filterByAgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge){
   var output: Animal[] = [];
   for (var i = 0; i < input.length; i++) {
     var age = input[i].age
     if (desiredAge === "mature") {
       if (age > 2) {
         output.push(input[i]);
       }
     } else if (desiredAge === "young") {
       if (age <= 2) {
         output.push(input[i]);
       }
     } else {
       output.push(input[i]);
     }
   }
   return output;
 }
}

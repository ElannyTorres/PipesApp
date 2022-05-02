import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'elanny';
  nombreUpper: string = 'ELANNY';
  nombreCompleto: string = 'eLaNnY tOrReS';

  fecha: Date = new Date();

}

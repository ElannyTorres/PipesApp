import { Component, OnInit } from '@angular/core';
import { MayusculasPipe } from '../../pipes/mayusculas.pipe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

}

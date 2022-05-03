import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //* i18nSelect
  nombre: string = 'Harold';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona() {
    this.nombre = 'Elanny';
    this.genero = 'femenino';
  }

  //* i18nPlural
  clientes = ['Maria', 'Pedro', 'Juan', 'Fernando', 'Eduardo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente() {
    this.clientes.shift()
  }
}

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  //* KeyValue Pipes
  persona = {
    nombre: 'Elanny',
    edad: '28',
    direccion: 'Lima, Perú'
  }

  //* Json Pipes
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //* Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  });

}

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(texto:string, valor: boolean = true): string {

    return valor ? texto.toUpperCase() : texto.toLowerCase();
  }

}

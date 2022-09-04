import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarRegistros'
})
export class MostrarRegistrosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultRegistro =[];
    for (const registros of value) {
      if (registros.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultRegistro.push(registros);
      };
    };
    return resultRegistro;
  }

}

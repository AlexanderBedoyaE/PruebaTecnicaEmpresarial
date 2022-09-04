import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../services/registros.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component implements OnInit {
  registros:any;

  constructor(public libro: RegistrosService) { }
  filtrarResultados='';
    ngOnInit(): void {
      this.libro.getRegistros().subscribe
      (
        (r) => { this.registros= r; console.log(r)},
        (e) => {console.error(e) }
      )
    }
}

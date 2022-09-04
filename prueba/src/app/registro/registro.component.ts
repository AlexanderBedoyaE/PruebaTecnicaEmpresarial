import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../services/registros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registros:any;

  constructor(public libro: RegistrosService) { }

    ngOnInit(): void {
      this.libro.getRegistros().subscribe
      (
        (r) => { this.registros= r; console.log(r)},
        (e) => {console.error(e) }
      )
    }
  }





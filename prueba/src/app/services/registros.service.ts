import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  private API_SERVER ="/api/registro";

  constructor(public http:HttpClient){ }

  public getRegistros():Observable<any>{

  return this.http.get(this.API_SERVER);
  }
}






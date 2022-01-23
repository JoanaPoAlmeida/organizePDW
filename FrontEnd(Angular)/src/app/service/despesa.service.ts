import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesas } from '../model/despesas';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  addDespURL : string;
  getDespURL : string;
  updateDespURL : string;
  deleteDespURL : string;

  constructor(private http: HttpClient) {

    this.addDespURL = 'http://localhost:4200/mainpage/despesas'
    this.getDespURL = 'http://localhost:4200/mainpage/despesas'
    this.updateDespURL = 'http://localhost:4200/mainpage/despesas'
    this.deleteDespURL = 'http://localhost:4200/mainpage/despesas'
   }

   addDespesa(desp: Despesas): Observable<Despesas> {
     return this.http.post<Despesas>(this.addDespURL, desp);
   }

   getAllDespesas() : Observable<Despesas[]>{
     return this.http.get<Despesas[]>(this.getDespURL);
   }

   deleteDespesa(desp: Despesas) : Observable<Despesas> {
     return this.http.delete<Despesas>(this.deleteDespURL+'/' +desp.idDespesa);
   }
}

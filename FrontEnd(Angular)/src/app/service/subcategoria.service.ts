import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subcategorias } from '../model/subcategorias';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  addSubcatURL : string;
  getSubcatURL : string;
  updateSubcatURL : string;
  deleteSubcatURL : string;

  constructor(private http: HttpClient) {

    this.addSubcatURL = 'http://localhost:4200/mainpage/subcategorias'
    this.getSubcatURL = 'http://localhost:4200/mainpage/subcategorias'
    this.updateSubcatURL = 'http://localhost:4200/mainpage/subcategorias'
    this.deleteSubcatURL = 'http://localhost:4200/mainpage/subcategorias'
   }

   addSubcategory(subcat: Subcategorias): Observable<Subcategorias> {
     return this.http.post<Subcategorias>(this.addSubcatURL, subcat);
   }

   getAllSubcategories() : Observable<Subcategorias[]>{
     return this.http.get<Subcategorias[]>(this.getSubcatURL);
   }

   deleteSubcategory(subcat: Subcategorias) : Observable<Subcategorias> {
     return this.http.delete<Subcategorias>(this.deleteSubcatURL+'/' +subcat.id);
   }
}

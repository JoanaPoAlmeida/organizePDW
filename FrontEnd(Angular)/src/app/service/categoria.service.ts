import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  addCatURL : string;
  getCatURL : string;
  updateCatURL : string;
  deleteCatURL : string;

  constructor(private http: HttpClient) {

    this.addCatURL = 'http://127.0.0.1:8000/api/addCategoria'
    this.getCatURL = 'http://127.0.0.1:8000/api/showCategorias'
    this.updateCatURL = 'http://localhost:4200/mainpage/categorias'
    this.deleteCatURL = 'http://127.0.0.1:8000/api/deleteCategoria'
   }

   addCategory(cat: Categoria): Observable<Categoria> {
     return this.http.post<Categoria>(this.addCatURL, cat);
   }

   getAllCategories() : Observable<Categoria[]>{
     return this.http.get<Categoria[]>(this.getCatURL);
   }

   deleteCategory(cat: Categoria) : Observable<Categoria> {
     return this.http.delete<Categoria>(this.deleteCatURL+'/' +cat.idCategoria);
   }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subcategorias } from '../model/subcategorias';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { SubcategoriaService } from '../service/subcategoria.service';

@Component({
  selector: 'app-gerir-subcategorias',
  templateUrl: './gerir-subcategorias.component.html',
  styleUrls: ['./gerir-subcategorias.component.scss']
})
export class GerirSubcategoriasComponent implements OnInit {

  //category variables
  catDetail !: FormGroup
    catObj : Categoria = new Categoria;
    catList: Categoria[] = [];

  //subcategory variables
  subcatDetail !: FormGroup
    subcatObj : Subcategorias = new Subcategorias;
    subcatList: Subcategorias[] = [];

  constructor(private formBuilder : FormBuilder, private catService : CategoriaService, private subCatService : SubcategoriaService) { }

  ngOnInit(): void {

    this.listCategories();
    this.listSubCategories();

    this.subcatDetail = this.formBuilder.group({
      name : [''],
      categoryID : [''],
    });
  }


  addsubCategory(){
    console.log("wooorkiiing boys");
  }

  deletesubCategory(subcat: Subcategorias){
    console.log("delete wooorks boooys");
  }

  listCategories(){
    this.catService.getAllCategories().subscribe(res=>{
      this.catList = res;
    }, err=>{
      console.log("Error while fetching the data;");
    });
  }

  listSubCategories(){
    this.subCatService.getAllSubcategories().subscribe(res=>{
      this.subcatList = res;
    }, err=>{
      console.log("Error while fetching the data;");
    });
  }

}

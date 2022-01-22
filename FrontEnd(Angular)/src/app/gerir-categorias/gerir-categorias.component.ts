/*import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-gerir-categorias',
  templateUrl: './gerir-categorias.component.html',
  styleUrls: ['./gerir-categorias.component.scss']
})
export class GerirCategoriasComponent implements OnInit {

  catDetail !: FormGroup
    catObj : Categoria = new Categoria;
    catList: Categoria[] = [];


  constructor(private formBuilder : FormBuilder, private catService : CategoriaService) { }

  ngOnInit(): void {

    this.getAllCategories();

    this.catDetail = this.formBuilder.group({
      id : 1,
      name : ' ',
      description : ' '
    });

  }

  addCategory(){
    this.catObj.id = this.catDetail.value.id;
    this.catObj.name = this.catDetail.value.name;
    this.catObj.description = this.catDetail.value.description;
    
    this.catList.push(this.catObj);
    this.catDetail.value.id = this.catDetail.value.id+1;
    console.log(this.catList);
    
   
    this.catService.addCategory(this.catObj).subscribe(res=>{
      console.log(res);
      this.getAllCategories();
    }, err=>{
      console.log(err);
    });
  }

  getAllCategories(){
 
    this.catService.getAllCategories().subscribe(res=>{
      this.catList = res;
    }, err=>{
      console.log("Error while fetching the data;");
    });
  }

  editCategory(cat: Categoria){

    this.catDetail.controls['id'].setValue(cat.id);
    this.catDetail.controls['name'].setValue(cat.name);
    this.catDetail.controls['description'].setValue(cat.description);
  }

  deleteCategory(cat : Categoria){

  }
}*/
import { Component, OnInit } from '@angular/core';

//declare function salvar(): void;
//declare function cancelar(): void;
//declare function listaTabela(): void;
//declare function adicionar(): void;
//declare function lerDados(): void;
//declare function validaCampos(): void;

@Component({
  selector: 'app-gerir-categorias',
  templateUrl: './gerir-categorias.component.html',
  styleUrls: ['./gerir-categorias.component.scss']
})

export class GerirCategoriasComponent implements OnInit {

  constructor(){}

  ngOnInit() {

  }
}
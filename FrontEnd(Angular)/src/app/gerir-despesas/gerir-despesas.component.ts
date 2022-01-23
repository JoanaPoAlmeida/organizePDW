import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subcategorias } from '../model/subcategorias';
import { Despesas } from '../model/despesas';
import { DespesaService } from '../service/despesa.service';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-gerir-despesas',
  templateUrl: './gerir-despesas.component.html',
  styleUrls: ['./gerir-despesas.component.scss']
})
export class GerirDespesasComponent implements OnInit {

    //variaveis das despesas
    despDetail !: FormGroup
    despObj : Despesas = new Despesas;
    despList: Despesas[] = [];

    //subcategory variables
    catDetail !: FormGroup
    @Input()categoria: Categoria = new Categoria;
    catList: Categoria[] = [];

  constructor(private formBuilder : FormBuilder, private despService : DespesaService, private catService : CategoriaService) { }

  ngOnInit(): void {
    this.getAllDespesas();
    this.getAllSubcategorias();

    this.despDetail = this.formBuilder.group({
      name : [''],
      subcategoryID : [''],
      valor: [''],
      data: [''],
    });
  }

  addDespesa(){
    this.despObj.idDespesa = this.despDetail.value.id;
    this.despObj.nomeDespesa = this.despDetail.value.name;
    this.despObj.valor = this.despDetail.value.valor;
    this.despObj.data = this.despDetail.value.data;
    //this.despObj.subcategoryID= this.despDetail.value.subcategoryID;
   
    this.despService.addDespesa(this.despObj).subscribe(res=>{
      console.log(res);
      this.getAllDespesas();
    }, err=>{
      console.log(err);
      console.log(this.despObj);
    });
  }

  getAllDespesas(){
    this.despService.getAllDespesas().subscribe(res=>{
      this.despList = res;
    }, err=>{
      console.log("Error while fetching the data;");
    });
  }

  getAllSubcategorias(){
    this.catService.getAllCategories().subscribe(res=>{
      this.catList = res;
    }, err=>{
      console.log("Error while fetching the data;");
    });
  }

  deleteDespesa(despesa: Despesas){
    console.log("siiiiiiiiiiiim");
  }
}

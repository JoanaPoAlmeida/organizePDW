import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subcategorias } from '../model/subcategorias';
import { Despesas } from '../model/despesas';
import { DespesaService } from '../service/despesa.service';
import { SubcategoriaService } from '../service/subcategoria.service';

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
    subcatDetail !: FormGroup
    @Input()subcategoria: Subcategorias = new Subcategorias;
    subcatList: Subcategorias[] = [];

  constructor(private formBuilder : FormBuilder, private despService : DespesaService, private subCatService : SubcategoriaService) { }

  ngOnInit(): void {
    this.getAllDespesas();
    this.getAllSubcategorias();

    this.despDetail = this.formBuilder.group({
      name : [''],
      subcategoryID : [''],
      valor: [''],
      data: [''],
    });

    this.subcategoria.id = 1;
    this.subcategoria.name = 'henrique';
    this.subcategoria.despesas = 12;
    this.subcategoria.categoryID = 1;
    this.subcatList.push(this.subcategoria)
    this.subcategoria.id = 2;
    this.subcategoria.name = 'Pedro';
    this.subcategoria.despesas = 124;
    this.subcategoria.categoryID = 1;
    this.subcatList.push(this.subcategoria)

  }

  addDespesa(){
    this.despObj.id = this.despDetail.value.id;
    this.despObj.name = this.despDetail.value.name;
    this.despObj.valor = this.despDetail.value.valor;
    this.despObj.data = this.despDetail.value.data;
    this.despObj.subcategoryID= this.despDetail.value.subcategoryID;
   
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
    this.subCatService.getAllSubcategories().subscribe(res=>{
      this.subcatList = res;
    }, err=>{
      console.log("Error while fetching the data;");
    });
  }

  deleteDespesa(despesa: Despesas){
    console.log("siiiiiiiiiiiim");
  }
}

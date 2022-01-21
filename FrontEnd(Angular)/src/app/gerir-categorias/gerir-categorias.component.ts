import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'

@Component({
  selector: 'app-gerir-categorias',
  templateUrl: './gerir-categorias.component.html',
  styleUrls: ['./gerir-categorias.component.scss']
})
export class GerirCategoriasComponent implements OnInit {

  catDetail !: FormGroup

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.catDetail = this.formBuilder.group({

      name : [' '],
      description : [' ']
    });

  }

  addCategory(){
    console.log(this.catDetail);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerDetail !: FormGroup
  registerObj : User = new User;
  registerList: User[] = [];

  constructor(private formBuilder : FormBuilder, private loginService : LoginService, public router: Router) { }

  ngOnInit(): void {

    this.registerDetail = this.formBuilder.group({
      username : [''],
      password: [''],
      email: ['']
    });
  }


  registerconfirmation(){
    this.registerObj.name= this.registerDetail.value.username;
    this.registerObj.password= this.registerDetail.value.password;
    this.registerObj.email= this.registerDetail.value.email;
    this.loginService.confirmRegister(this.registerObj);
  }
}

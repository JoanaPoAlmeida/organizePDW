import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetail !: FormGroup
  loginObj : User = new User;
  loginList: User[] = [];

  constructor(private formBuilder : FormBuilder, private loginService : LoginService, public router: Router) { }

  ngOnInit(): void {

    this.loginDetail = this.formBuilder.group({
      username : [''],
      password: ['']
    });
  }


  loginconfirmation(){
    this.loginObj.email= this.loginDetail.value.username;
    this.loginObj.password= this.loginDetail.value.password;
    this.loginService.confirmLogin(this.loginObj);
  }
}

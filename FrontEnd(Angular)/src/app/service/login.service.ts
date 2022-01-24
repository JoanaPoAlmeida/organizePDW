import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL : string;
  registerURL : string;
  
  constructor(private http: HttpClient, public router: Router) { 
    this.loginURL = 'http://127.0.0.1:8000/api/login'
    this.registerURL = 'http://127.0.0.1:8000/api/register'
  }

  confirmRegister(user:User){
    return this.http.post<User>(this.registerURL, user).subscribe((res: any)=>{
      if(res=="Registo falhou"){
        alert(res);
      }else{
        this.router.navigate(['/login']);
      }
    });
  }

  confirmLogin(user: User){
    return this.http.post<User>(this.loginURL, user).subscribe((res: any)=>{
      if(res=="Login falhou"){
        alert(res);
      }else{
        this.router.navigate(['/mainpage/dashboard']);
      }
    });

  }
}

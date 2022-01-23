import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GerirCategoriasComponent } from './gerir-categorias/gerir-categorias.component';
import { GerirDespesasComponent } from './gerir-despesas/gerir-despesas.component';
import { GerirSubcategoriasComponent } from './gerir-subcategorias/gerir-subcategorias.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'mainpage', component:MainPageComponent, children:[
    {path:'despesas', component:GerirDespesasComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'categorias', component:GerirCategoriasComponent},
    {path:'subcategorias', component:GerirSubcategoriasComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children:[
      {path:'login',component: LoginPageComponent},
      {path:'new-account',component: RegisterComponent},
      {path:'**',redirectTo:'login'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AuthRoutingModule { }

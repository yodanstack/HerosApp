import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-router.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterComponent,
    LayoutPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }

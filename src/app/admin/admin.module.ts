import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './component/nav/nav.component';
import { TableComponent } from './component/table/table.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FormProductComponent } from './component/form-product/form-product.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';



@NgModule({
  declarations: [ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductListComponent,
    FormProductComponent,
    LoginComponent,
    RegisterComponent,
    ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }

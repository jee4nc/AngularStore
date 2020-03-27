import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { NavComponent } from './component/nav/nav.component';
import { TableComponent } from './component/table/table.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FormProductComponent } from './component/form-product/form-product.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
          path: 'create',
          component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dash',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products/update/:id',
        component: ProductEditComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'login/register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

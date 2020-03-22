import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTANDO COMPONENTES PARA RUTES
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/products.component';




const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

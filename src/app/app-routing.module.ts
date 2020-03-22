import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTANDO COMPONENTES PARA RUTES
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/products.component';
import { PagenNotFoundComponent } from './pagen-not-found/pagen-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';




const routes: Routes = [
  {
    path: '',  // esto sirve para poder redirigir a home cuando no alla path
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**', // este doble ** significa que si no hay match, mandara aqui
    component: PagenNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

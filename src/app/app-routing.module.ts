import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// IMPORTANDO COMPONENTES PARA RUTES
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
        pathMatch: 'full',

      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
    ] // dsdds
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

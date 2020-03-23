import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// IMPORTANDO COMPONENTES PARA RUTES
import { DemoComponent } from './demo/demo.component';
import { PagenNotFoundComponent } from './pagen-not-found/pagen-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard} from './admin.guard';




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
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module')
        .then(m => m.ContacModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./../app/products/product.module')
        .then(m => m.ProductModule)
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

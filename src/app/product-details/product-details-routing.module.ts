import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './componentes/product-detail/product-detail.component';

const routes: Routes = [
    {
        path : '',  // ESta wea siempre tiene que estar vacio
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ProductDetailRoutingModule {
}

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './componentes/products/products.component';
import { ProductDetailComponent } from './componentes/product-detail/product-detail.component';

const routes: Routes = [
    {
        path : '',  // ESta wea siempre tiene que estar vacio
        component: ProductsComponent
    },
    {
        path : ':id',
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
export class ProductRoutingModule {
}

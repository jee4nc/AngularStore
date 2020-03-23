import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './componentes/product-card/product.component';

const routes: Routes = [
    {
        path : '',  // ESta wea siempre tiene que estar vacio
        component: ProductComponent
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

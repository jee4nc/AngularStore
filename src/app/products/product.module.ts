import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './componentes/product-card/product.component';
import { ProductsComponent } from './componentes/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        ProductComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule,
        MaterialModule
    ]
})
export class ProductModule {

}

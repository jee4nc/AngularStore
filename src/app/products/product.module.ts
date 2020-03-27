import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './componentes/product/product.component';
import { ProductsComponent } from './componentes/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent} from './componentes/product-detail/product-detail.component';

@NgModule({
    declarations: [
        ProductComponent,
        ProductsComponent,
        ProductDetailComponent
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

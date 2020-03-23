import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from './componentes/product-detail/product-detail.component';
import { ProductDetailRoutingModule } from './product-details-routing.module';

@NgModule({
    declarations: [
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductDetailRoutingModule

    ]
})
export class ProductDetailsModule {

}

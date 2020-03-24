import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './componentes/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { SaludoComponent } from './componentes/saludo/saludo.component';
import {  BannerContactComponent} from './componentes/banner-contact/banner-contact.component';


@NgModule({
    declarations: [
        ContactComponent,
        SaludoComponent,
        BannerContactComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule,
    ]
})
export class ContacModule {
}

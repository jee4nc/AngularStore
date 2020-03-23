import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './componentes/contact/contact.component';

const routes: Routes = [
    {
        path : '',  // ESta wea siempre tiene que estar vacio
        component: ContactComponent
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
export class ContactRoutingModule {
}

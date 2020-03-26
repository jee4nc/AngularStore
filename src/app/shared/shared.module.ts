import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule} from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,  // Se declaran los componentes
    FooterComponent   // Se declaran los componenes
  ],
  imports: [
    CommonModule,
    RouterModule, // Como los components Header ocupar router link, es necesario importar este modulo
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent, // Esto soluciona el error de que no encuentra el componente
    FooterComponent  // Por eso hay que exportar estos modulos
  ]
})
export class SharedModule { }

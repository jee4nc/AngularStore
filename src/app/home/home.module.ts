import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Esto soluciono el erro de la galeria
import { BannerComponent} from './componentes/banner/banner.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomeRoutingModule} from './home-routing.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule {

}

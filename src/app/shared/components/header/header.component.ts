import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators'; // pipe de rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>; // hacemos a total observable

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(  // Es el mismo contador de objetos pero con pipe de map
      map(products => products.length)
    );
  }
  ngOnInit(): void {
  }

}

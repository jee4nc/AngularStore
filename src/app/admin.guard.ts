import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {AuthService} from '../../src/app/core/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.hasUser().pipe(
      map(user => user === null ? false : true), // ESto me permite saber si el user esta auten
      tap( hasuser => {
        if (!hasuser) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }
}

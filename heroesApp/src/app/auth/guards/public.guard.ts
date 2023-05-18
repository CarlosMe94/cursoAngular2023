import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  CanMatch,
  CanActivate,
  Router,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanMatch, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthenticacion().pipe(
      tap((isAutheticated) => console.log('Auth', isAutheticated)),

      tap((isAutheticated) => {
        if (isAutheticated) {
          this.router.navigate(['./']);
        }
      }),
      map((isAutheticated) => !isAutheticated)
    );
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    // console.log('Can Matcht');
    // console.log({ route, segments });
    // return false;
    return this.checkAuthStatus();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    // console.log('Can activate');
    // console.log({ route, state });
    // return false;
    return this.checkAuthStatus();
  }
}

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private login: LoginComponent, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.login.isAuthenticated()
        .then((authenticated: Boolean) => {
            if(authenticated){
                return true;
            }else{
                this.router.navigate(['/']);
            }
        }
    );
    }
}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

/**
 * C'est une garde, donc implemente CanActivate
 */
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService : AuthService, private router: Router){

    }
    
    /**
     * can Activate rend, soit un booleen, soit la promesse d'un booleen, soit l'observable d'un booleen
     * @param route requis par l'interface canActivate
     * @param state 
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        console.log('utilisateur authentifie : ' + this.authService.isAuth);
        if (this.authService.isAuth){
            // si l'utilisateur est authentifié, return true (guard ok)
            return true;
        } else {
            // si utilisateur pas authentifié, redirection vers lecran d'authentification
            // navigate ca renvoie une promesse de Boolean
            console.log('utilisateur non authentifie');
            return this.router.navigate(['/auth']);
        }        
    }

}
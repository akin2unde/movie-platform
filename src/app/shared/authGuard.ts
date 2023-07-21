import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import Store, { AppKey } from "./store";
@Injectable()
export class AuthGuard implements CanActivate {
  store = new Store();
  constructor(private router: Router) {

  }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    // if(!this.store.get(AppKey.USER))
    // {
    //   if(state.url=='/login' || state.url=='/request-access')
    //   {
    //     return true;
    //   }
    //   this.router.navigate(["/login"])
    // }
    return true;
  }
}

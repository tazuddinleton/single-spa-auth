import { Injectable } from '@angular/core';
// CONS: Intellisense is poor
import {UserInfo, jwtDecoder} from '@kaz/utility';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private user: any;
  constructor() { }


  public login(username: string) {
    // Assume api call etc.
    const u = jwtDecoder(username);
    console.log('jwt decoded', u);
    debugger;
    this.user = u;
  }

  public isLoggedIn(): boolean {
    return !!this.user;
  }
}

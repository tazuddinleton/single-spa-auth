import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private user: any;
  constructor() { }


  public login(username: string) {
    // Assume api call etc.
    this.user = {username: username}
  }

  public isLoggedIn(): boolean {
    return !!this.user;
  }
}

import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = ''

  constructor(private authService: AuthServiceService) {

  }
  signIn() {
    console.log('signing in ' + this.username);
    this.authService.login(this.username);
  }

}

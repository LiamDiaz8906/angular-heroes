import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private autService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {

    this.autService.login('liamdiaz50.com', '123456')
      .subscribe( user => {
        this.router.navigate(['/'])
      } )

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  isLoading: boolean = false;
  errors: any = {
    firstname: [],
    lastname: [],
    email: [],
    password: [],
    password_confirmation: [],
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.isLoading = true;
    this.loginService.register(this.user).subscribe(
      ({ body }) => {
        localStorage.setItem('apiKey', body.key);
        localStorage.setItem('user', JSON.stringify(body.user));
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      ({ error }) => {
        this.errors = error.errors;
        this.isLoading = false;
      }
    );
  }
}

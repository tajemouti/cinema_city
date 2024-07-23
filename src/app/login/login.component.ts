import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = "";
  password ="";
  errMsg = "";

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.username.trim().length === 0) {
      this.errMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errMsg = "Password is required";
    } else {
      this.errMsg = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errMsg = "Invalid credentials!";
      }
    }
  }
}

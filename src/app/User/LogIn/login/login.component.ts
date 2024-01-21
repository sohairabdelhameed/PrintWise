import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/FirebaseAuth'; // Adjust the path accordingly

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Call the loginWithEmail method from the AuthService
    this.authService.loginWithEmail(this.username, this.password)
      .then(() => {
        // Redirect to the "upload" route upon successful login
        console.log('Login successful!');
        this.router.navigate(['/upload']);
      })
      .catch(error => {
        // Handle login errors
        console.error('Login failed:', error.message);
        // Add error handling logic here
      });
  }
}

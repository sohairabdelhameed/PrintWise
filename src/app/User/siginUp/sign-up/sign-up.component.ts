import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/FirebaseAuth';  // Update the path
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match.');
      // Handle the error, e.g., show a message to the user
      return;
    }
  
    this.authService.signUpWithEmail(this.username, this.email, this.password)
      .then((credential) => {
        // Registration successful, create user document in Firestore
        const user = credential.user;
        if (user) {
          return this.authService.createUserInFirestore(user.uid, this.username, this.email);
        } else {
          throw new Error('User not found after registration.');
        }
      })
      .then(() => {
        console.log('User data saved to Firestore.');
        // You can redirect or perform additional actions after successful registration
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Handle the error, e.g., show a message to the user
      });
  }
}  
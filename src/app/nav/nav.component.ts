import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/FirebaseAuth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.getCurrentUsername().subscribe(username => {
      if (username) {
        // User is logged in, retrieve and display username
        this.username = username;
      } else {
        // User is not logged in, do something (e.g., redirect to login)
        this.username = ''; // Clear username if not logged in
      }
    });
  }
  
  logout() {
    this.authService.signOut()
      .then(() => {
        // Clear the username after logout
        this.username = ''; // Set username to empty string or null
        this.router.navigate(['/signIn']);
      })
      .catch(error => {
        // Handle logout errors
        console.error('Error logging out:', error);
      });
  }

}

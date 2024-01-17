import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Any additional head elements can be added here -->
    </head>
    <body>
        <!-- Your body content goes here -->
        <nav-bar></nav-bar>
      
        <router-outlet></router-outlet>
     
    </body>

    </html>
  
  `,
 styleUrls:['./app.component.css']
  
})
export class AppComponent {
  title = 'PrintWise';
}

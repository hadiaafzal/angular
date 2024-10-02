// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   myForm: FormGroup=new FormGroup({});
// constructor(private formBuilder: FormBuilder ){}
//   ngOnInit(): void {
//     this.myForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],


//     })

//   }

//   submitForm() {
//     console.log('Form submitted')
//   }

// }








// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <header>
//       <h1>My Web Application</h1>
//     </header>
//     <nav>
//       <ul>
//         <li><a routerLink="/">Home</a></li>
//         <li><a routerLink="/about">About</a></li>
//         <li><a routerLink="/contact">Contact</a></li>
//       </ul>
//     </nav>
//     <router-outlet></router-outlet>
//     <footer>
//       <p>&copy; 2023 My Company</p>
//     </footer>
//   `,
//   styles: [`
//     /* Your CSS styles here */
//   `]
// })
// export class AppComponent {
// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Welcome to Our Web Application</h1>
      <p>This is a simple UI for demonstration purposes.</p>
      <button (click)="onClick()">Click Me</button>
      <p *ngIf="clicked">{{ message }}</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      background-color: #BEEDE5; /* Set the background color of the entire page */
      margin: 0; /* Reset default margins */
      padding: 0;
    }
    .container {
      text-align: center;
      margin-top: 0; /* Remove any extra space at the top */
      padding-top: 20px; /* Optionally add padding if needed */
    }
    h1 {
      color: #445A67;
      font-size: 2rem;   /* Larger font size */
      font-weight: bold; /* Bold text */
      text-transform: uppercase; /* Uppercase text */
      letter-spacing: 1.5px; /* Add some spacing between letters */
    }
    p {
      color: #1F3D51;
      font-size: 1.2rem; /* Slightly larger paragraph text */
      line-height: 1.5;  /* Increase line spacing for better readability */
      font-family: 'Arial', sans-serif; /* Apply a font */
    }
    button {
      // background-color: #3498db;
      color: #8dd7bf;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
    button:hover {
      background-color: #74737A;

    }
  `]
})
export class AppComponent {
  clicked = false;
  message = 'Button clicked!';

  onClick() {
    this.clicked = true;
    {
           console.log('Button Clicked')
         }
  }
}



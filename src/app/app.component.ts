import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Welcome to the Angular CouchDB Blog</h1>
     <app-book-list></app-book-list>

     <app-add-book></app-add-book>
    </div>
  `,
  
})
export class AppComponent {
}

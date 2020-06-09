import { Component } from '@angular/core';

// Decorator
@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
// TypeScript class
export class HeaderComponent {
collapsed = true;
}

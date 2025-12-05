import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'TVK-Assement';
  showFooter: boolean = true; 
  private routesToHideFooter = [
    '/fullstack/', 
    '/frontend/', 
    '/backend/',
    '/python/',
    '/testing/',
    '/java/'
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let currentPath = event.urlAfterRedirects.split('?')[0].split('#')[0].toLowerCase();
      
      if (!currentPath.endsWith('/')) {
          currentPath += '/';
      }
      if (!currentPath.startsWith('/')) {
          currentPath = '/' + currentPath;
      }
      this.showFooter = !this.routesToHideFooter.some(route => 
        currentPath.startsWith(route)
      );

console.log(`Normalized Path: ${currentPath}, Show Footer: ${this.showFooter}`);    });
  }
}

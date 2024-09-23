import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatGridListModule,MatIconModule, MatToolbarModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  isHandset: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    // Observe for handset or smaller screen sizes
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isHandset = result.matches;
      });
  }
}

import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width:1350px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  toDashboard() {
    this.router.navigate(['student'], { relativeTo: this.activatedRoute });
  }

  toUsers() {
    this.router.navigate(['users'], { relativeTo: this.activatedRoute });
  }

  toGifts() {
    this.router.navigate(['gifts'], { relativeTo: this.activatedRoute });
  }
}

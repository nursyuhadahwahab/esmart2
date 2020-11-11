import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  count: number = 10;
  constructor(private router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.count = this.count - 1
      if (this.count == 0) {
        this.router.navigate(['/home'])
      }
    }, 1000)
  }
}

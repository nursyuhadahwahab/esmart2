import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../Auth/auth.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isLoading: boolean = true;
  isLoggedin: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.pipe(take(2)).subscribe(stat => {
      this.isLoggedin = stat
      this.isLoading = false
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe((res) => {
      this.isLoggedIn = res
    })
  }

  logout() {
    this.auth.logout()
  }

  login() {
    this.router.navigate(['/login'])
  }
}

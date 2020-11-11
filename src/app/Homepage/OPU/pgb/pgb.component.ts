import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-pgb',
  templateUrl: './pgb.component.html',
  styleUrls: ['./pgb.component.css']
})
export class PgbComponent implements OnInit {

  constructor(
    private router: Router, 
    private auth: AuthService
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
  }

}

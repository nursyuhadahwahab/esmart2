import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-angsi',
  templateUrl: './angsi.component.html',
  styleUrls: ['./angsi.component.css']
})
export class AngsiComponent implements OnInit {

  constructor(
    private router: Router, 
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
  }

}

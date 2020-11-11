import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-abf',
  templateUrl: './abf.component.html',
  styleUrls: ['./abf.component.css']
})
export class AbfComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-prpcuf',
  templateUrl: './prpcuf.component.html',
  styleUrls: ['./prpcuf.component.css']
})
export class PrpcufComponent implements OnInit {

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


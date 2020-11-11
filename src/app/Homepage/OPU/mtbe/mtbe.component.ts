import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-mtbe',
  templateUrl: './mtbe.component.html',
  styleUrls: ['./mtbe.component.css']
})
export class MtbeComponent implements OnInit {

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
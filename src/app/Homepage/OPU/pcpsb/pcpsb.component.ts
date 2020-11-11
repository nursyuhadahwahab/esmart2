import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-pcpsb',
  templateUrl: './pcpsb.component.html',
  styleUrls: ['./pcpsb.component.css']
})
export class PcpsbComponent implements OnInit {

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
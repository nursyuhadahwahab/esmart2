import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Auth/auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  isLoading: boolean = true;
  isLoggedin: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

}

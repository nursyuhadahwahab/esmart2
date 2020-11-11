import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  error = false;
  loginSubs: Subscription;

  user = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    //if (localStorage.getItem('refreshToken')) this.auth.refreshToken()

    this.loginSubs = this.auth.isLoggedIn.subscribe(
      state => {
        if (state) this.router.navigate(['/home'])
      }
    )
  }
  ngOnDestroy() {
    this.loginSubs.unsubscribe()
  }

  login() {
    const user = this.user.value;
    this.auth.login(user).subscribe(
      res => {
        console.log(res);
        this.auth.doLoginUser(res)
      },
      err => {
        this.error = true;
        console.log(this.error);
      }
    )
  }
}

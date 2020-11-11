import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject(false)

  private _login = "https://dhms.petronas.com:7171/login"
  private _logout = "https://dhms.petronas.com:7171/logout"
  

  constructor(private router: Router, private http: HttpClient) {
    let accessToken = helper.decodeToken(localStorage.getItem('accessToken'))
  }

  login(user) {
    return this.http.post<any>(this._login, user)
  }

  logout() {
    this.http.post<any>(this._logout, { accessToken: localStorage.getItem('accessToken') })
    localStorage.clear()
    this.isLoggedIn.next(false)
    this.router.navigate(['auth']);
  }

  doLoginUser(data) {
    localStorage.setItem('accessToken', data.token)
    this.isLoggedIn.next(true)
    this.router.navigate(['home'])
  }

  public isAuthenticated() : boolean {
    const token = localStorage.getItem('accessToken');
    // Check whether the token is expired and return
    // true or false
    return !helper.isTokenExpired(token);
  }
}

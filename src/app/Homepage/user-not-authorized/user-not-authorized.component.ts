import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/Auth/auth.service";

@Component({
  selector: "app-user-not-authorized",
  templateUrl: "./user-not-authorized.component.html",
  styleUrls: ["./user-not-authorized.component.css"],
})
export class UserNotAuthorizedComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}

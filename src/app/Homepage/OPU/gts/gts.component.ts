import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/Auth/auth.service";

@Component({
  selector: "app-gts",
  templateUrl: "./gts.component.html",
  styleUrls: ["./gts.component.css"],
})
export class GTSComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DoctorService } from "../../service/doctor.service";
import { log } from "util";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private _doctorService: DoctorService, private router: Router) {}

  onSubmit() {
    console.log("lol");
    const hello = this._doctorService.getDoctor("hello", "bye");
    this.router.navigate(["/dashboard"]);
  }

  ngOnInit() {}
}

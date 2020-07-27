import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    desc: new FormControl(""),
    password: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}
}
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doctor-appoint",
  templateUrl: "./doctor-appoint.component.html",
  styleUrls: ["./doctor-appoint.component.css"]
})
export class DoctorAppointComponent implements OnInit {
  items = [1, 2, 3];

  constructor() {}

  ngOnInit() {}
}

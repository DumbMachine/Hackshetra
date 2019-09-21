import { Component, OnInit } from "@angular/core";
import { DoctorAppointService } from "../services/doctor-appoint.service";

@Component({
  selector: "app-doctor-appoint",
  templateUrl: "./doctor-appoint.component.html",
  styleUrls: ["./doctor-appoint.component.css"]
})
export class DoctorAppointComponent implements OnInit {
  public doctors = [];

  constructor(private _doctorAppointService: DoctorAppointService) {}

  ngOnInit() {
    this.doctors = this._doctorAppointService.getDoctorList();
  }
}

import { Component, OnInit } from "@angular/core";
import { DoctorService } from "../../service/doctor.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  doctor = {};

  constructor(private _doctorService: DoctorService) {}

  ngOnInit() {
    this.doctor = this._doctorService.getDoctor("Pankaj Chawla", "Lol");
  }
}

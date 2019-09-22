import { Component, OnInit } from "@angular/core";
import { DoctorService } from "src/app/doctor/service/doctor.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  doctor = {};

  chat = [];

  messageForm = new FormGroup({
    message: new FormControl("")
  });

  constructor(private _getDoctorService: DoctorService) {}
  ngOnInit() {
    this.doctor = this._getDoctorService.doctor;
  }
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DoctorService {
  doctor = null;

  constructor() {}

  getDoctor(username, password) {
    if (this.doctor == null) {
      this.doctor = {
        name: "Pankaj Chawla",
        desc: "Lol",
        connection: "user123487383"
      };
      return this.doctor;
    }
  }
}

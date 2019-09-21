import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DoctorAppointService {
  constructor() {}

  getDoctorList() {
    return [
      {
        name: "Dr. Pankaj Chawla",
        description:
          "General physician<br />M.B.B.S. M.A.<br />Specializes in : General medecine"
      },
      {
        name: "Dr. Pankaj Chawla",
        description:
          "General physician<br />M.B.B.S. M.A.<br />Specializes in : General medecine"
      },
      {
        name: "Dr. Pankaj Chawla",
        description:
          "General physician<br />M.B.B.S. M.A.<br />Specializes in : General medecine"
      }
    ];
  }
}

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
          "General physician \nM.B.B.S. M.A.\nSpecializes in : General medecine"
      },
      {
        name: "Dr. Parul Chauhan",
        description:
          "General physician\nM.B.B.S. M.A.\nSpecializes in : General medecine"
      },
      {
        name: "Dr. Amit Sharma",
        description:
          "General physician\nM.B.B.S. M.A.\nSpecializes in : General medecine"
      }
    ];
  }
}

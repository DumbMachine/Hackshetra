import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CustomerDataService {
  constructor() {}

  getCustomerData(userId) {
    const users = {
      1: {
        disease: "Fever",
        wikipedia: []
      }
    };
    return users[userId];
  }
}

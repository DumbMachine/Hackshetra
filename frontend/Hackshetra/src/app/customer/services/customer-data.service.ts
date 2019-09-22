import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CustomerDataService {
  constructor(private http: HttpClient) {}

  getCustomerData(userId) {
    return this.http.get("https://caf3e4a2.ngrok.io/" + userId);
  }
}

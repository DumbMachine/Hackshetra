import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomerDataService } from "./services/customer-data.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  public userData;

  constructor(
    private _customerDataService: CustomerDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let userId = parseInt(this.route.snapshot.paramMap.get("userId"));
    this.userData = this._customerDataService.getCustomerData(userId);
  }
}
